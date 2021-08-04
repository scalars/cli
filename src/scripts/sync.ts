import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join } from 'path'
import { usage } from 'yargs'

let endpoint: string | null = process.env.SCALARS_ENDPOINT | null
let clientId: string | null = process.env.SCALARS_CLIENT_ID | null

export const argv = usage( '$0 command' )
    .command( 'sync', 'Sync api connection scalars', ( yargs ) => {
        let err: boolean = !endpoint && !clientId
        if ( err ) {
            // There are no default environment variables
            // Tying to set via dotenv
            const production: boolean = process.env.NODE_ENV === 'production'
            const envPath: string = join( process.cwd() , `${ production ? '.env.prod' : '.env.dev'}` )
            const { error } = config( { path: envPath } )
            err = !!error
            if ( !err ) {
                // dotenv has loaded .env.dev file
                endpoint = process.env.SCALARS_ENDPOINT
                clientId = process.env.SCALARS_CLIENT_ID
                err = !endpoint && !clientId
                if ( !err ) {
                    sync()
                }
                else {
                    console.log( `Error!\n\tMake sure you specified your scalars endpoint as SCALARS_ENDPOINT and\n\tyour client id as SCALARS_CLIENT_ID at ${envPath}.` )
                }
            }
            else {
                console.error( `Error!\n\tFailed to load environment variables from ${envPath}` )
            }
        } else {
            sync()
        }
    } )
    .help( 'h' )
    .demand( 1, 'You must provide a valid scalars command' )
    .alias( 'h', 'help' )
    .argv

/**
 * Function that starts introspection
 */
const sync = () => {
    introspect( {
        endpoint: endpoint as string,
        clientId: clientId as string
    } ).then( () => {
        console.clear()
        console.log( `Introspection completed!!\n\tThanks for using scalars client!\n\tOn your code you need to create an instance of the client like this:\n\t\tconst client = new ScalarsClient()\n\tHappy codding!!\n\tYour friendly neighbors Luis Danilo JG and Madrov team ❤️` )
    } )
}

