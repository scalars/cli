import { generate } from '@graphql-codegen/cli'
import { join, resolve } from 'path'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { render } from 'mustache'
import { ScalarsClientConfig } from './interfaces'
import tsc, { TsConfigCompilerOptions } from 'tsc-prog'

const selectTypes: Array<Record<string, any>> = []
const returnTypes: Array<Record<string, any>> = []

const compile = ( fileNames: Array<string>, options: TsConfigCompilerOptions ): void => {
    tsc.build( {
        basePath: __dirname,
        compilerOptions: options,
        include: fileNames,
        exclude: []
    } )
}

/**
 * This function generates types by introspecting the API
 * @param scalarsEndpoint Endpoint of API to introspect
 */
const generateTypedSchema = async ( scalarsEndpoint: string ): Promise<string> => {
    const { '0': { content } } = await generate( {
        generates: {
            [join( __dirname, 'newTypes.ts' )]: {
                schema: scalarsEndpoint.endsWith( '/' ) ? `${scalarsEndpoint}api/v1` : `${scalarsEndpoint}/api/v1`,
                plugins: ['typescript', 'typescript-operations'],
            }
        }
    }, false )
    return content
}

/**
 * This function build main file of this package (index.js) adding to Scalars Client new services
 * @param operations Object with all queries and mutations that can be made on each entity and the possible
 * fields that can be queried/are attached to each one.
 * @param config Client configuration (endpoint and client id)
 */
const updateScalarsClient = async ( operations: Record<string, any>, config: ScalarsClientConfig ): Promise<void> => {
    const outputPath = __dirname
    // !existsSync( outputPath ) && !!mkdirSync( outputPath, { recursive: true } )
    const canPerformSoftIntrospection: boolean = config.soft
        && existsSync( resolve( outputPath, 'ScalarsClient.ts' ) )
    if ( !canPerformSoftIntrospection ) {
        // -------------------------------------------------------------------------
        // const scalarsClientManagerTemplate: string = readFileSync(
        //     join( __dirname, 'templates', 'ScalarsClientManager.mustache' )
        // ).toString()
        // writeFileSync(
        //     resolve( outputPath, 'ScalarsClientManager.ts' ),
        //     render( scalarsClientManagerTemplate, {} )
        // )
        // -------------------------------------------------------------------------
        const scalarsClientTemplate: string = readFileSync(
            join( __dirname, 'templates', 'ScalarsClient.mustache' )
        ).toString()
        writeFileSync(
            resolve( outputPath, 'index.ts' ),
            render( scalarsClientTemplate, {} )
        )
        // -------------------------------------------------------------------------
        // const serviceTemplate: string = readFileSync(
        //     join( __dirname, 'templates', 'Service.mustache' )
        // ).toString()
        // writeFileSync(
        //     resolve( outputPath, 'Service.ts' ),
        //     render( serviceTemplate, {} )
        // )
        // -------------------------------------------------------------------------
        // writeFileSync(
        //     resolve( outputPath, 'index.ts' ),
        //     `export * from './Service';\nexport * from './ScalarsClientManager';\nexport * from './ScalarsClient';\nexport * from './DefaultServices';
        // `
        // )
        // -------------------------------------------------------------------------
        // writeFileSync(
        //     resolve( __dirname, 'index.ts' ),
        //     `export * from './generated'`
        // )
    } else {
        console.log( `Doing soft introspection!` )
    }
    // -------------------------------------------------------------------------
    const schemaTypes = await generateTypedSchema( config.endpoint )
    const defaultServicesTemplate: string = readFileSync(
        join( __dirname, 'templates', 'DefaultServices.mustache' )
    ).toString()
    writeFileSync(
        resolve( outputPath, 'DefaultServices.ts' ),
        render( defaultServicesTemplate, {
            operations,
            schemaTypes: schemaTypes,
            selects: selectTypes,
            returns: returnTypes,
            config
        } )
    )
    // -------------------------------------------------------------------------

    // -------------------------------------------------------------------------
    try {
        compile( [resolve( __dirname, 'index.ts' )], {
            declaration: true,
            emitDeclarationOnly: false,
            target: 'es2019',
            module: 'commonjs',
            moduleResolution: 'node',
            strict: true,
            esModuleInterop: true,
            skipLibCheck: true,
            forceConsistentCasingInFileNames: true,
            outDir: __dirname,
        } )
    }
    catch ( e ) {
        console.log( e )
    }
}

/**
 * This function evaluate a field of an operation (query or mutation) and determines if this field is an scalar type or
 * another object type
 * @param fieldType Type of the field
 */
const getFieldType = ( fieldType: Record<string, any> ): Record<string, any> => {
    const { kind, ofType, name } = fieldType
    if ( kind === 'NON_NULL' || kind === 'LIST' ) {
        return getFieldType( ofType )
    }
    else if ( kind === 'SCALAR' || kind === 'ENUM' ) {
        return {
            type: 'boolean'
        }
    }
    else if ( kind === 'OBJECT' ) {
        return {
            type: `${name}Select`,
        }
    }
    // TODO Handle fields of type enum
    return { type: 'undefined' } // Unhandled types
}

/**
 * This function builds types for operations responses
 * @param entity Entity to which the related queries or mutations responses will be build
 */
const generateOperationsResponseTypes = ( entity: Record<string ,any> ): Record<string, any> => {
    const selectType: Record<string, any> = {
        name: `${entity.name}Select`,
        fields: entity.fields.map( ( field: Record<string, any> ) => {
            return {
                name: field.name,
                ...getFieldType( field.type )
            }
        } )
    }
    if ( !selectTypes.some( select => select.name === selectType.name ) )
        selectTypes.push( selectType )
    return selectType
}

/**
 * This function build an object containing the return of an operation (query or mutation) by its type passed as
 * parameter
 * @param type Type of the operation
 * @param required Auxiliary parameter for recursively use of this function
 */
const getOperationReturnType = ( type: Record<string, any>, required: boolean = false ): Record<string, any> => {
    const { kind, name, ofType } = type
    let result: Record<string, any> = {}
    if ( /NON_NULL/gm.test( kind ) ) {
        result = getOperationReturnType( ofType, true )
    }
    if ( /LIST/gm.test( kind ) ) {
        result = {
            list: true,
            requiredList: required,
            ...getOperationReturnType( ofType )
        }
    }
    if ( /OBJECT/gm.test( kind ) ) {
        result = {
            type: name,
            requiredType: required,
        }
    }
    return result
}

/**
 * This function build an object containing the arg of an operation (query or mutation) by its type passed as
 * parameter
 * @param arg Arg of the operation (obtained from the first introspection)
 * @param required Auxiliary parameter for recursively use of this function
 */
const getOperationArgType = ( arg: Record<string, any>, required: boolean = false ): Record<string, any> => {
    const { type: { kind, name, ofType } } = arg
    let result: Record<string ,any> = {}
    if ( /NON_NULL/gm.test( kind ) ) {
        result = getOperationArgType( { name: arg.name, type: ofType }, true )
    }
    if ( /INPUT_OBJECT/gm.test( kind ) ) {
        result = {
            name: arg.name,
            type: name,
            requiredType: required
        }
    }
    if ( /SCALAR/gm.test( kind ) ) {
        result = {
            name: arg.name,
            type: `Scalars['${name}']`,
            scalarType: name,
            requiredType: required
        }
    }
    return result
}

/**
 * This function gets the name of the entity attached to the query passed as parameter.
 * @param type Type of the operation
 */
const getEntityFromOperation = ( type: Record<string, any> ): string => {
    const { kind, name, ofType } = type
    if ( /NON_NULL|LIST/gm.test( kind ) ) {
        return getEntityFromOperation( ofType )
    }
    else if ( /OBJECT/gm.test( kind ) ) {
        return name
    }
    return ''
}

/**
 * This function build an object with all mutations that can be made for the entity passed as parameter and the possible
 * fields that can be queried/are attached to it.
 * @param entity Entity to which the possible related mutations and its fields will be build.
 * @param mutations Object from first introspection which have all possible mutations for all entities.
 */
const getMutations = ( entity: Record<string, any>, mutations: Array<Record<string, any>> ): Array<Record<string, any>> => {
    const entityMutations: Array<Record<string, any>> = []
    const select: Record<string, any> = generateOperationsResponseTypes( entity )
    mutations.forEach( ( mutation: Record<string, any> ) => {
        if ( getEntityFromOperation( mutation.type ) === entity.name ) {
            const operationReturn: Record<string, any> = getOperationReturnType( mutation.type )
            if ( !returnTypes.some( ret => ret.type === operationReturn.type ) )
                returnTypes.push( operationReturn )
            entityMutations.push( {
                operation: mutation.name,
                _operation: mutation.name.charAt( 0 ).toUpperCase().concat( mutation.name.slice( 1 ) ),
                authOperation: /^createAuthuser$/g.test( mutation.name ),
                entity: entity.name,
                args: mutation.args
                    .map( ( arg: Record<string, any> ) => getOperationArgType( arg ) )
                    .sort( ( a: Record<string ,any>, b: Record<string ,any> ) => {
                        if ( a.requiredType && !b.requiredType ) {
                            return -1
                        }
                        if ( b.requiredType && !a.requiredType ) {
                            return 1
                        }
                        return 0
                    } ),
                return: operationReturn,
                select
            } )
        }
    } )
    return entityMutations
}

/**
 * This function build an object with all queries that can be made for the entity passed as parameter and the possible
 * fields that can be queried/are attached to it.
 * @param entity Entity to which the possible related queries and its fields will be build.
 * @param queries Object from first introspection which have all possible queries for all entities.
 */
const getQueries = ( entity: Record<string, any>, queries: Array<Record<string, any>> ): Array<Record<string, any>> => {
    const entityQueries: Array<Record<string, any>> = []
    const select: Record<string ,any> = generateOperationsResponseTypes( entity )
    queries.forEach( ( query: Record<string, any > ) => {
        if ( getEntityFromOperation( query.type ) === entity.name ) {
            const operationReturn: Record<string, any> = getOperationReturnType( query.type )
            if ( !returnTypes.some( ret => ret.type === operationReturn.type ) )
                returnTypes.push( operationReturn )
            entityQueries.push( {
                operation: query.name,
                _operation: query.name.charAt( 0 ).toUpperCase().concat( query.name.slice( 1 ) ),
                authOperation: /^createAuthuser$/g.test( query.name ),
                entity: entity.name,
                args: query.args
                    .map( ( arg: Record<string, any> ) => getOperationArgType( arg ) )
                    .sort( ( a: Record<string ,any>, b: Record<string ,any> ) => {
                        if ( a.requiredType && !b.requiredType ) {
                            return -1
                        }
                        if ( b.requiredType && !a.requiredType ) {
                            return 1
                        }
                        return 0
                    } ),
                return: operationReturn,
                select
            } )
        }
    } )
    return entityQueries
}

/**
 * This function build an object with all queries and mutations that can be made on each entity and the possible
 * fields that can be queried/are attached to each one.
 * @param objects Object generated by the first introspection
 */
const getServicesByOperations = ( objects: Array<Record<string, any>> ): Record<string, any> => {
    const operations: Record<string, any> = {
        queries: [],
        mutations: []
    }
    const queryObject: Record<string, any> | undefined = objects
        .filter( ( object: Record<string, any> ) =>
            /^Query$/gm.test( object.name ) &&
            !/^.+Connection$/gm.test( object.name )
        ).shift()
    const mutationObject: Record<string, any> | undefined = objects
        .filter( ( object: Record<string, any> ) =>
            /^Mutation$/gm.test( object.name ) &&
            !/^.+Connection$/gm.test( object.name )
        ).shift()
    const entitiesObjects: Array<Record<string, any>> = objects
        .filter( ( object: Record<string, any> ) =>
            !/^Mutation$/gm.test( object.name ) &&
            !/^Query$/gm.test( object.name ) &&
            !/^.+Connection$/gm.test( object.name )
        )
    entitiesObjects.forEach( ( entity: Record<string, any> ) => {
        operations.queries.push( ...getQueries( entity, queryObject?.fields ) )
        operations.mutations.push( ...getMutations( entity, mutationObject?.fields ) )
    } )
    return operations
}

/**
 * This function makes introspection to the API and filters the result for obtain only
 * the introspection of objects
 * @param scalarsEndpoint Endpoint of API to introspect
 */
const getIntrospectionFilteredByObjects = async ( scalarsEndpoint: string ): Promise<Array<Record<string, any>>> => {
    const { '0': { content } } = await generate( {
        generates: {
            'introspection.json': {
                schema: scalarsEndpoint.endsWith( '/' ) ? `${scalarsEndpoint}api/v1` : `${scalarsEndpoint}/api/v1`,
                plugins: ['introspection'],
                config: {
                    minify: false,
                    descriptions: true,
                    schemaDescription: true
                }
            }
        }
    }, false )
    const { '__schema': { types } }: Record<string, any> = JSON.parse( content )
    return types
        .filter( ( type: any ) => /^OBJECT$/gm.test( type.kind ) && !/^__.+/gm.test( type.name ) )
}

/**
 * This function starts the entire process of introspection and creation
 * of queries and mutations offered by the scalars API
 */
export const introspect = async ( config: ScalarsClientConfig ): Promise<void> => {
    const objects = await getIntrospectionFilteredByObjects( config.endpoint )
    const operations: Record<string, any> = getServicesByOperations( objects )
    await updateScalarsClient( operations, config )
}
