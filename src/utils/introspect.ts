import { generate } from '@graphql-codegen/cli'
import { ScalarsClientConfig } from './interfaces'
import { join } from 'path'

/**
 * This function makes introspection to the API and filters the result for obtain only
 * the introspection of objects
 * @param scalarsApi Endpoint of API to introspect
 */
const getIntrospectionFilteredByObjects = async ( scalarsApi: string ): Promise<Array<Record<string, any>>> => {
    const { '0': { content } } = await generate( {
        generates: {
            [join( __dirname, 'introspection.json' )]: {
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
    console.log( JSON.stringify( objects ) )
}
