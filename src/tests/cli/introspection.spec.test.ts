import { exec } from 'child_process'

describe( 'Suite cli introspection', () => {
    it( 'should introspect with env in runtime', async ( ) => {
        const status = await new Promise( ( resolve => {
            const sync = exec( `SCALARS_ENDPOINT=https://devapp.kaury.co/app yarn ts-node dist/sync.js sync` )
            sync.on('exit', ( existCode: number ) => {
                if ( existCode !== 0 ) {
                    resolve( false )
                    return
                }
                resolve( true )
            } )
        } ) )
        expect( status ).toBeTruthy()
    } )
    it( 'should introspect with env file path', async ( ) => {
        const status = await new Promise( ( resolve => {
            const sync = exec( `yarn ts-node dist/sync.js sync --env src/tests/cli/env.test` )
            sync.on('exit', ( existCode: number ) => {
                if ( existCode !== 0 ) {
                    resolve( false )
                    return
                }
                resolve( true )
            } )
        } ) )
        expect( status ).toBeTruthy()
    } )
    it( 'should introspect with args command', async () => {
        const status = await new Promise( ( resolve => {
            const sync = exec( `yarn ts-node dist/sync.js sync --endpoint https://devapp.kaury.co/app` )
            sync.on('exit', ( existCode: number ) => {
                if ( existCode !== 0 ) {
                    resolve( false )
                    return
                }
                resolve( true )
            } )
        } ) )
        expect( status ).toBeTruthy()
    } )
} )