import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join } from 'path'

let endpoint: string | undefined
let clientId: string | undefined

const sync = () => {
    introspect( {
        endpoint: endpoint as string,
        clientId: clientId as string
    } ).then( () => {
        console.clear()
        console.log( `Introspection completed!!\n\tThanks for using scalars client!\n\tOn your code you need to create an instance of the client like this:\n\t\tconst client = new ScalarsClient()\n\tHappy codding!!\n\tYour friendly neighbors Luis Danilo JG and Madrov team ❤️` )
    } )
}

let errors: boolean = false
const production: boolean = process.env.NODE_ENV === 'production'
const envPath: string = join( process.cwd() , `${ production ? '.env' : '.env.dev'}` )
const { error } = config( { path: envPath } )
errors = !!error
if ( !errors ) {
    endpoint = process.env.SCALARS_API || process.env.SCALARS_ENDPOINT
    clientId = process.env.SCALARS_CLIENT_ID
    errors = !endpoint && !clientId
    if ( !errors ) {
        const arg: string = process.argv[2]
        if ( arg && /sync/g.test( arg ) ) {
            sync()
        }
        else {
            console.log( `Error!\n\t${arg ? `${arg} is not an option` : `must specify an argument for scalars command`}` )
        }
    }
    else {
        console.log( `Error!\n\tMake sure you specified your scalars API endpoint as SCALARS_API or SCALARS_ENDPOINT and\n\tyour client id as SCALARS_CLIENT_ID at ${envPath}.` )
    }
}
else {
    console.error( `Error!\n\tFailed to load environment variables from ${envPath}` )
}


