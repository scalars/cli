import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { join, resolve } from 'path'
import yargs from 'yargs'
import inquirer from 'inquirer'
import * as fuzzyPath from 'inquirer-fuzzy-path'
// Inquirer setup
inquirer.registerPrompt( 'path', fuzzyPath )

/**
 * Function that starts introspection
 * @param endpoint Endpoint to introspect
 * @param clientId Client id to authorize introspection
 * @param clientPath Path where ScalarsClient.ts will be generated
 * @param soft Make soft introspection
 */
const sync = ( endpoint: string, clientId: string, clientPath: string, soft: boolean ) => {
    introspect( {
        endpoint,
        clientId,
        clientPath,
        soft
    } ).then( () => {
        // console.clear()
        console.info( `Introspection success!\n\tEnjoy your experience using Scalars\n\tHappy codding!!\n== Madrov team️ ==` )
    } )
}

/**
 * Function that prepare introspection.
 * @param interactive Flag to enable command line menu
 * @param endpoint Endpoint recovered from command line option "-e or --endpoint".
 * @param authorization Authorization recovered from command line option "-a or --authorization".
 * @param prod Flag to use .env.prod file as introspection values, otherwise .env.dev is taken by default.
 */
const loadEnvsAndIntrospect = ( interactive: boolean, endpoint: string | null, authorization: string | null, prod: boolean, soft: boolean ) => {
    // endpoint final a usar
    let currentEndpoint: string | null = endpoint
    // authorization final a usar, un string "client_id xxxxxx" oo un string jwt
    let currentAuthorization: string | null = authorization
    // Para cuando el menu esta habilitado, ruta por defecto en donde se exporta ScalarsClient.ts
    let clientPath: string = join( process.cwd() )
    // Bandera para errores varios
    const { error, parsed } = config( { path: join( process.cwd(), `${prod ? '.env.prod' : '.env.dev'}` ) } )
    if ( !error && parsed ) {
        // Environment variables loaded successfully
        currentEndpoint = ( endpoint || parsed.SCALARS_ENDPOINT ) as string
        currentAuthorization = ( authorization || parsed.SCALARS_CLIENT_ID ) as string
    } else {
        console.info( `DOTENV ERROR: Couldn't load ${join( process.cwd(), `${prod ? '.env.prod' : '.env.dev'}` )}` )
        return
    }
    if ( !interactive ) {
        // Have to make auto introspection
        if ( currentEndpoint && currentAuthorization ) {
            // endpoint and auth already configured, supplied through command line options
            console.info( `Introspection with endpoint ${currentEndpoint}` )
            console.info( `Using client id ${currentAuthorization}` )
            sync( currentEndpoint as string, currentAuthorization as string, clientPath, soft )
        } else {
            console.info( 'DOTENV ERROR: Environment variables loaded, but SCALARS_ENDPOINT or SCALARS_CLIENT_ID were not found' )
            return
        }
    } else {
        // Have to make assisted introspection (with command line menu)
        inquirer.prompt( [
            {
                type: 'confirm',
                name: 'defaultEnvs',
                message: `\tENDPOINT=${currentEndpoint}\n\tAUTHORIZATION=${currentAuthorization}\n♦♣♥♠ Are these your cards? (loaded from ${prod ? '.env.prod' : '.env.dev'})`,
            },
            {
                type: 'input',
                name: 'newEndpoint',
                message: `What's your scalars endpoint`,
                default: currentEndpoint,
                when: ( answers ) => !answers.defaultEnvs
            },
            {
                type: 'input',
                name: 'newClientId',
                message: `What's your scalars client id`,
                default: currentAuthorization,
                when: ( answers ) => !answers.defaultEnvs
            },
            {
                type: 'path',
                itemType: 'directory',
                rootPath: process.cwd(),
                excludePath: ( path: string ) => {
                    const nodeModulesPath: string = join( process.cwd(), 'node_modules' )
                    const gitPath: string = join( process.cwd(), '.git' )
                    return path.startsWith( nodeModulesPath ) || path.startsWith( gitPath )
                },
                depthLimit: 2,
                default: clientPath,
                name: 'clientPath',
                message: `Where do you want me to bury the corpse?`
            }
        ] ).then( answers => {
            clientPath = answers.clientPath
            if ( !answers.defaultEnvs && answers.newEndpoint && answers.newClientId ) {
                currentEndpoint = answers.newEndpoint as string
                currentAuthorization = answers.newClientId as string
            }
            sync( currentEndpoint as string, currentAuthorization as string, clientPath, soft )
        } )

    }
}

yargs( process.argv.slice( 2 ) )
    .usage( `Usage: $0 <command>` )
    .command( 'sync', 'Synchronize your client', ( { argv } ) => {
        const prod: boolean = !!argv.p
        const interactive: boolean = !!argv.i
        const endpoint: string | null = ( argv.e as string ) || null
        const authorization: string | null = ( argv.a as string ) || null
        const soft: boolean = !!argv.s
        loadEnvsAndIntrospect( interactive, endpoint, authorization, prod, soft )
    } )
    .demand( 1, 'You must provide a valid scalars command' )
    .help( 'h' )
    .alias( 'h', 'help' )
    .option( 'p', { type: 'boolean', description: 'Make introspection with .env.prod as default values' } )
    .alias( 'p', 'prod' )
    .nargs( 'p', 0 )
    .option( 'i', { type: 'boolean', description: 'Make assisted introspection' } )
    .alias( 'i', 'interactive' )
    .nargs( 'i', 0 )
    .option( 'e', { type: 'string', description: 'Make introspection with provided endpoint' } )
    .alias( 'e', 'endpoint' )
    .nargs( 'e', 1 )
    .option( 'a', { type: 'string', description: 'Make introspection with provided auth token' } )
    .alias( 'a', 'authorization' )
    .nargs( 'a', 1 )
    .option( 's', { type: 'boolean', description: 'Make soft introspection' } )
    .alias( 's', 'soft' )
    .nargs( 's', 0 )
    .epilog( `Madrov Team, 2021` )
    .argv
