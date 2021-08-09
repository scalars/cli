import { introspect } from '../utils/introspect'
import { config } from 'dotenv'
import { existsSync } from 'fs'
import { join } from 'path'
import { usage } from 'yargs'
import inquirer from 'inquirer'
import * as fuzzyPath from 'inquirer-fuzzy-path'
// Inquirer setup
inquirer.registerPrompt( 'path', fuzzyPath )



// Trying to set endpoint and clientId by environment variables

let endpoint: string | null = process.env.SCALARS_ENDPOINT || null
let clientId: string | null = process.env.SCALARS_CLIENT_ID || null
let clientPath: string = process.cwd()

/**
 * Function that starts introspection
 */
const sync = () => {
    introspect( {
        endpoint: endpoint as string,
        clientId: clientId as string,
        clientPath
    } ).then( () => {
        console.log( `Introspection completed!!\nHappy codding!!\nYour friendly neighbors Luis Danilo JG and Madrov team ❤️` )
    } )
}

const confirmEnvs = ( dotenv: boolean ) => {
    let startConfirm: boolean = !dotenv
    if ( dotenv ) {
        const production: boolean = process.env.NODE_ENV === 'production'
        const { error } = config( { path: join( process.cwd(), `${production ? '.env.prod' : '.env.dev'}` ) } )
        if ( !error ) {
            endpoint = process.env.SCALARS_ENDPOINT || null
            clientId = process.env.SCALARS_CLIENT_ID || null
        }
        startConfirm = !!endpoint && !!clientId
        if ( startConfirm ) {
            inquirer.prompt( [
                {
                    type: 'confirm',
                    name: 'envs',
                    message: `♦♣♥♠ Are these your cards? (by cards I mean your endpoint and client id)\n\tENDPOINT=${endpoint}\n\tCLIENT_ID=${clientId}\n`,
                    when: !!endpoint && !!clientId
                },
                {
                    type: 'input',
                    name: 'newEndpoint',
                    message: `What's your scalars endpoint`,
                    default: endpoint,
                    when: ( answers ) => !answers.envs && !!endpoint
                },
                {
                    type: 'input',
                    name: 'newClientId',
                    message: `What's your scalars client id`,
                    default: clientId,
                    when: ( answers ) => !answers.envs && !!clientId
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
                if ( !answers.envs && answers.newEndpoint && answers.newClientId ) {
                    endpoint = answers.newEndpoint
                    clientId = answers.newClientId
                }
                sync()
            } )
        } else {
            console.log( `Error!\n\tIt was not possible to start introspection due to your setup` )
        }
    }
}

export const argv = usage( '$0 command' )
    .command( 'sync', 'Sync api connection scalars', ( yargs ) => {
        confirmEnvs( !endpoint && !clientId )
    } )
    .help( 'h' )
    .demand( 1, 'You must provide a valid scalars command' )
    .alias( 'h', 'help' )
    .argv
