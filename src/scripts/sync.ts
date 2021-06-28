import { introspect } from '../utils/introspect'
import { config } from 'dotenv'

console.log( __dirname )
config( {
    path: '.env.dev'
} )
const endpoint: string = process.env.SCALARS_API || process.env.SCALARS_ENDPOINT || ''
const clientId: string = process.env.SCALARS_CLIENT_ID || ''

if ( !endpoint )
    throw new Error( `Make sure you specified your scalars api endpoint at environment variables (SCALARS_API or SCALARS_ENDPOINT)` )
if ( !clientId )
    throw new Error( `Make sure you specified your scalars client id at environment variables (SCALARS_CLIENT_ID)` )

introspect( { endpoint, clientId } ).then( () => {
    console.log( `Introspection completed!!` )
    console.log( `
        Thanks for using scalars client!
        Now you are available to use ScalarsClient!
        Ensure to create a client at the scalars console to start to use your API!
        On your code you need to create an instance of the client like this:
        const client = new ScalarsClient()
        Happy codding!!Your friendly neighbors Luis Danilo JG and Madrov team ❤️
    ` )
} )
