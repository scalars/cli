import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join } from 'path'

const production: boolean = process.env.NODE_ENV === 'production'
const envPath: string = join( process.cwd() , `${ production ? '.env' : '.env.dev'}` )
const { error } = config( { path: envPath } )
if ( error ) {
    throw new Error( `
        Error!
            Failed to load environment variables from ${envPath}
    ` )
}

const endpoint: string = process.env.SCALARS_API || process.env.SCALARS_ENDPOINT || ''
const clientId: string = process.env.SCALARS_CLIENT_ID || ''

if ( !endpoint )
    throw new Error( `
        Error!
            Make sure you specified your scalars API endpoint at ${envPath}
            as SCALARS_API or SCALARS_ENDPOINT
    ` )
if ( !clientId )
    throw new Error( `
        Error!
            Make sure you specified your scalars client id at ${envPath}
             as SCALARS_CLIENT_ID
    ` )

introspect( { endpoint, clientId } ).then( () => {
    console.log( `Introspection completed!!` )
    console.log( `
        Thanks for using scalars client!
            Now you are available to use ScalarsClient!
            On your code you need to create an instance of the client like this:
            
            const client = new ScalarsClient()
            
            Happy codding!!Your friendly neighbors Luis Danilo JG and Madrov team ❤️
    ` )
} )
