import { introspect } from '../utils/introspect'
// import axios, { AxiosError } from 'axios'
// import { print } from 'graphql'
import { gql } from 'graphql-tag'
// import { config } from 'dotenv'
// import { join } from 'path'

// const production: boolean = process.env.NODE_ENV === 'production'
// const envPath: string = join( process.cwd() , `${ production ? '.env' : '.env.dev'}` )
// const { error } = config( { path: envPath } )
// if ( error ) {
//     throw new Error( `
//         Error!
//             Failed to load environment variables from ${envPath}
//     ` )
// }

// const endpoint: string = process.env.SCALARS_API || process.env.SCALARS_ENDPOINT || ''
// const clientId: string = process.env.SCALARS_CLIENT_ID || ''
const endpoint: string = 'https://app.scalars.co/rfand82vt2/api'
const clientId: string = '1dc47a10-af42-11eb-8847-b1b62795d90c'

// if ( !endpoint )
//     throw new Error( `
//         Error!
//             Make sure you specified your scalars API endpoint at ${envPath}
//             as SCALARS_API or SCALARS_ENDPOINT
//     ` )
// if ( !clientId )
//     throw new Error( `
//         Error!
//             Make sure you specified your scalars client id at ${envPath}
//              as SCALARS_CLIENT_ID
//     ` )

// const operation = gql`
//     query getProfile($where: ProfileWhereUniqueInput!) {
//         profile(where: $where ) {
//             id
//         }
//     }
// `

// axios
//     .post(
//         'https://app.scalars.co/rfand82vt2/api',
//         {
//             query: print( operation ),
//             variables: {
//                 where: {
//                     email: 'luis@madrov.com'
//                 }
//             }
//         },
//         {
//             headers: {
//                 'Authorization': `client_id ${clientId}`
//             }
//         }
//     )
//     .then( res => console.log( Object.keys( res ) ) )
//     .catch( ( err: Error | AxiosError ) => {
//         if ( axios.isAxiosError( err ) ) {
//             console.log( 'AXIOS ERROR' )
//             console.log( 'The error: ', err.response )
//         }
//         else {
//             console.log( 'STOCK ERROR' )
//             console.log()
//         }
//     } )

introspect( { endpoint, clientId } ).then( () => {
    console.log( `
    Introspection completed!!
        Thanks for using scalars client!
        On your code you need to create an instance of the client like this:
            const client = new ScalarsClient()
        Happy codding!!
        Your friendly neighbors Luis Danilo JG and Madrov team ❤️
    ` )
} )
