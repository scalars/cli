import { config } from 'dotenv'
import inquirer from 'inquirer'
import fuzzyPath from 'inquirer-fuzzy-path'
import { join } from 'path'
import yargs  from 'yargs'

import { introspect } from '../utils/introspect'
inquirer.registerPrompt( 'path', fuzzyPath )

const succesMessage: string = `
Introspection success !
    Enjoy your experience using Scalars
    Happy codding!!
== Madrov team️ ==
`

/**
 * Function that starts introspection
 * @param endpoint Endpoint to introspect
 * @param clientPath Path where ScalarsClient.ts will be generated
 * @param soft Make soft introspection
 */
const sync = ( endpoint: string, clientPath: string, soft: boolean ) => {
    introspect( {
        endpoint,
        clientPath,
        soft
    } ).then( () => {
        console.info( succesMessage )
        process.exit( 0 )
    } ).catch( error => {
        console.info( error )
        process.exit( - 1 )
    } )
}

/**
 * Function that prepare introspection.
 * @param interactive Flag to enable command line menu
 * @param endpoint Endpoint recovered from command line option "-e or --endpoint".
 * @param authorization Authorization recovered from command line option "-a or --authorization".
 * @param env
 * @param prod Flag to use .env.prod file as introspection values, otherwise .env.dev is taken by default.
 * @param soft
 */
const loadEnvsAndIntrospect = (
    interactive: boolean,
    endpoint: string | null,
    authorization: string | null,
    env: string | null,
    prod: boolean,
    soft: boolean
) => {
    let currentEndpoint: string | null = endpoint
    let clientPath: string = __dirname
    if ( env ) {
        const { error, parsed } = config( { path: join( process.cwd(), `${env ? env : '.env'}` ) } )
        if ( ! error && parsed ) {
            currentEndpoint = parsed.SCALARS_ENDPOINT as string
        }
    } else {
        currentEndpoint = ( endpoint || process.env.SCALARS_ENDPOINT ) as string
    }
    if ( ! interactive && currentEndpoint ) {
        console.info( `Start introspection ${currentEndpoint}` )
        sync( currentEndpoint as string, __dirname, soft )
    } else {
        inquirer.prompt( [
            {
                type: 'input',
                name: 'newEndpoint',
                message: `What's your scalars endpoint`,
                default: currentEndpoint,
                when: ( answers ) => ! answers.defaultEnvs
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
            if ( ! answers.defaultEnvs && answers.newEndpoint && answers.newClientId ) {
                currentEndpoint = answers.newEndpoint as string
            }
            sync( currentEndpoint as string, clientPath, soft )
        } )

    }
}

yargs( process.argv.slice( 2 ) )
    .usage( `Usage: $0 <command>` )
    .command( 'sync', 'Synchronize your client', ( { argv } ) => {
        const prod: boolean = !! argv.p
        const interactive: boolean = !! argv.i
        const endpoint: string | null = ( argv.e as string ) || null
        const authorization: string | null = ( argv.a as string ) || null
        const soft: boolean = !! argv.s
        const env: string | null = argv.env as string || null
        loadEnvsAndIntrospect( interactive, endpoint, authorization, env, prod, soft )
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

    .option( 'env', { type: 'string', description: 'Load enviroment file' } )
    .alias( 'env', 'enviroment' )
    .nargs( 'env', 1 )

    .option( 'a', { type: 'string', description: 'Make introspection with provided auth token' } )
    .alias( 'a', 'authorization' )
    .nargs( 'a', 1 )
    .option( 's', { type: 'boolean', description: 'Make soft introspection' } )
    .alias( 's', 'soft' )
    .nargs( 's', 0 )
    .epilog( `Madrov Team, 2021` )
    .argv
