import { generate } from '@graphql-codegen/cli'
import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { render } from 'mustache'
import { ModuleFormat, rollup, RollupOptions } from 'rollup'
// import virtual from '@rollup/plugin-virtual'
import { ScalarsClientConfig } from './interfaces'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import ts, { CompilerHost, CompilerOptions, Program } from 'typescript'

const selectTypes: Array<Record<string, any>> = []

const compile = ( fileNames: Array<string>, options: CompilerOptions ): void => {
    const createdFiles: Record<string, any> = {}
    const host: CompilerHost = ts.createCompilerHost( options )
    host.writeFile = ( fileName: string, contents: string ) => createdFiles[fileName] = contents
    const program: Program = ts.createProgram( fileNames, options, host )
    program.emit()
    fileNames.forEach( file => {
        const dts = file.replace( '.ts', '.d.ts' )
        writeFileSync( dts, createdFiles[dts] )
    } )
}

/**
 * This function generates types by introspecting the API
 * @param scalarsApi Endpoint of API to introspect
 */
const generateTypedSchema = async ( scalarsApi: string ): Promise<string> => {
    const { '0': { content } } = await generate( {
        generates: {
            [join( __dirname, 'newTypes.ts' )]: {
                schema: scalarsApi,
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
    // mkdir(
    //     join( __dirname, 'holo' ),
    //     { recursive: true },
    //     ( err: unknown ) => {
    //         if ( err )
    //             throw err
    //         const template: string = readFileSync(
    //             // join( __dirname, 'templates', 'template.mustache' ) TODO Uncomment this at npm publish
    //             join( __dirname, '..', 'templates', 'template.mustache' )
    //         ).toString()
    //         writeFileSync(
    //             join( __dirname, 'holo', 'newIndex.ts' ),
    //             render( template, {
    //                 operations,
    //                 imports: Array.from( importedTypes ),
    //                 selects: Array.from( selectTypes ),
    //                 config
    //             } )
    //         )
    //     }
    // )
    // const schemaTypes = await generateTypedSchema( config.endpoint )
    // const rendered: string = schemaTypes
    // console.log( rendered )
    // const virtualEntry = virtual( {
    //     entry: `export const n: number = 32;`
    // } )
    // const inputOptions: RollupOptions = {
    //     input: 'entry',
    //     plugins: [ virtualEntry as Plugin, typescript( { module: 'EsNext' } ), terser() ]
    // }
    // const outputOptions = {
    //     file: join( __dirname, 'newIndex.js' ),
    //     format: 'es' as ModuleFormat,
    // }
    // const bundle = await rollup( inputOptions )
    // await bundle.write( outputOptions )
    // await bundle.close()
    const template: string = readFileSync(
        join( __dirname, 'template.mustache' )
    ).toString()
    // const volume = Volume.fromJSON( {
    //     '/virtualIndex.ts': render( template, {
    //         operations,
    //         imports: Array.from( importedTypes ),
    //         selects: Array.from( selectTypes ),
    //         config
    //     } ),
    //     '/testo.ts': 'export interface foo { id: number }'
    // } )
    // const memfs: FS = createFs( volume ) as FS
    const schemaTypes = await generateTypedSchema( config.endpoint )
    writeFileSync(
        join( __dirname, '_index.ts' ),
        render( template, {
            operations,
            newTypes: schemaTypes,
            selects: Array.from( selectTypes ),
            config
        } )
    )
    const inputOptions: RollupOptions = {
        // input: '/testo.ts',
        input: join( __dirname, 'index.ts' ),
        plugins: [
            typescript( { module: 'esnext' } ),
            terser(),
            // memfsPlugin( memfs ),
        ],
        external: ['axios', 'graphql', 'graphql-tag']
    }
    const outputOptions = {
        file: join( __dirname, 'index.js' ),
        format: 'es' as ModuleFormat,
    }
    try {
        compile( [join( __dirname, 'index.ts' )], {
            declaration: true,
            emitDeclarationOnly: true
        } )
        const bundle = await rollup( inputOptions )
        await bundle.write( outputOptions )
        await bundle.close()
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
const getFieldType = ( fieldType: Record<string, any> ): string => {
    const { kind, ofType, name } = fieldType
    if ( kind === 'NON_NULL' ) {
        return getFieldType( ofType )
    }
    else if ( kind === 'SCALAR' ) {
        return 'boolean'
    }
    else if ( kind === 'OBJECT' ) {
        return `${name}Select`
    }
    return 'null' // Unhandled types
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
                type: getFieldType( field.type )
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
            entityMutations.push( {
                operation: mutation.name,
                _operation: mutation.name.charAt( 0 ).toUpperCase().concat( mutation.name.slice( 1 ) ),
                entity: entity.name,
                args: mutation.args.map( ( arg: Record<string, any> ) => {
                    return getOperationArgType( arg )
                } ),
                return: getOperationReturnType( mutation.type ),
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
            const args: Array<Record<string, any>> = query.args.map( ( arg: Record<string, any> ) => {
                return getOperationArgType( arg )
            } )
            entityQueries.push( {
                operation: query.name,
                _operation: query.name.charAt( 0 ).toUpperCase().concat( query.name.slice( 1 ) ),
                entity: entity.name,
                args, argsRequired: !!args.find( arg => arg.requiredType ),
                return: getOperationReturnType( query.type ),
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
 * @param scalarsApi Endpoint of API to introspect
 */
const getIntrospectionFilteredByObjects = async ( scalarsApi: string ): Promise<Array<Record<string, any>>> => {
    const { '0': { content } } = await generate( {
        generates: {
            'introspection.json': {
                schema: scalarsApi,
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
