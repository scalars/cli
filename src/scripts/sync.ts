import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join } from 'path'

let errors: boolean = false
const production: boolean = process.env.NODE_ENV === 'production'
const envPath: string = join( process.cwd() , `${ production ? '.env' : '.env.dev'}` )
const { error } = config( { path: envPath } )
errors = !!error
if ( !errors ) {
    const endpoint: string | undefined = process.env.SCALARS_API || process.env.SCALARS_ENDPOINT
    const clientId: string | undefined = process.env.SCALARS_CLIENT_ID
    errors = !endpoint && !clientId
    if ( !errors ) {
        introspect( {
            endpoint: endpoint as string,
            clientId: clientId as string
        } ).then( () => {
            console.log( `
            Introspection completed!!
                Thanks for using scalars client!
                On your code you need to create an instance of the client like this:
                    const client = new ScalarsClient()
                Happy codding!!
                Your friendly neighbors Luis Danilo JG and Madrov team ❤️
            ` )
        } )
    }
    else {
        console.log( `
        Error!
            Make sure you specified your scalars API endpoint as SCALARS_API or SCALARS_ENDPOINT and
            your client id as SCALARS_CLIENT_ID at ${envPath}.
    ` )
    }

}
else {
    console.error( `
    Error!
        Failed to load environment variables from ${envPath}
    ` )
}


