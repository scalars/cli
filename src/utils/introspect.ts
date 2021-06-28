import { ScalarsClientConfig } from './interfaces'

/**
 * This function starts the entire process of introspection and creation
 * of queries and mutations offered by the scalars API
 */
export const introspect = async ( config: ScalarsClientConfig ): Promise<void> => {
    return new Promise( resolve => {
        console.log( `Config`, config )
        resolve()
    } )
}
