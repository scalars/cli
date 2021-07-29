import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join } from 'path'
import { usage } from 'yargs'

export const argv = usage( '$0 command' )
    .command( 'sync', 'Sync api connection scalars', ( yargs ) => {
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
                    console.clear()
                    console.log( `
                        Introspection completed!!\n\tThanks for using scalars client!\n\tOn your code you need to create an instance of the client like this:\n\t\tconst client = new ScalarsClient()\n\tHappy codding!!\n\tYour friendly neighbors Luis Danilo JG and Madrov team ❤️
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
    } )
    .demand( 1, 'You must provide a valid scalars command' )
    .help( 'h' )
    .alias( 'h', 'help' )
    .argv


