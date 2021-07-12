import { IFaq, IProfile, IRegistration, ProfileSelect, ScalarsClient } from '../../dist/index'
// import { gql } from '@apollo/client'

const client: ScalarsClient = new ScalarsClient()



const idRegex: RegExp = new RegExp( `[0-9a-fA-F]{16}` )
const dateRegex: RegExp = new RegExp( `[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]\\.[0-9]{3}Z` )
const emailRegex: RegExp = new RegExp( `[a-zA-Z]+@[a-zA-Z]+\.+` )

describe( `Registration`, () => {
    test( `Should read registration`, ( done ) => {
        client.query
            .registration(
                {
                    id: true, email: true, name: true
                },
                { id: 'hey' }
            )
            .then( ( res: IRegistration ) => {
                expect( res ).toEqual( expect.objectContaining( {
                    id: expect.anything(),
                    email: expect.anything(),
                    name: expect.anything()
                } ) )
            } )
            .catch( err => {
                console.log( err )
            } )
            .finally( done )
    } )
    test( `Should create registration`, ( done ) => {

    } )
    test( `Should update registration`, ( done ) => {

    } )
    test( `Should delete registration`, ( done ) => {

    } )
} )

describe( `Faq`, () => {
    test( `Should read faq`, ( done ) => {
        client.query
            .faq(
                {
                    id: true, answer: true, question: true
                },
                { id: 'Q00' }
            )
            .then( ( res: IFaq ) => {
                expect( res ).toEqual( expect.objectContaining( {
                    id: expect.anything(),
                    answer: expect.anything(),
                    question: expect.anything()
                } ) )
            } )
            .catch( err => {
                console.log( err )
            } )
            .finally( done )
    } )
    test( `Should create faq`, ( done ) => {

    } )
    test( `Should update faq`, ( done )=> {

    } )
    test( `Should delete faq`, ( done ) => {

    } )
} )

describe( `Answers`, () => {
    test( `Should read answer`, ( done ) => {

    } )
    test( `Should create answer`, ( done ) => {

    } )
    test( `Should update answer`, ( done ) => {

    } )
    test( `Should delete answer`, ( done ) => {

    } )
} )

describe( `Skill`, () => {
    test( `Should read skill`, ( done )=>{

    } )
    test( `Should create skill`, ( done ) => {

    } )
    test( `Should update skill`, ( done ) => {

    } )
    test( `Should delete skill`, ( done ) => {

    } )
} )

describe( `Interest`, () => {
    test( `Should read interest`, ( done ) => {

    } )
    test( `Should create interest`, ( done ) => {

    } )
    test( `Should update interest`, ( done ) => {

    } )
    test( `Should delete interest`, ( done ) => {

    } )
} )

describe( `Profile`, () => {
    test( `Should read profile`, ( done ) => {
        // 1st
        client
            .doQuery(
                `query profile($where: ProfileWhereUniqueInput!) { profile(where: $where) { id } }`,
             { where: { email: 'luis@madrov.com' } }
            )
            .then( ( res: Record<'profile', any> ) => {
                console.log( res.profile )
            } )
            .catch( err => {
                console.log( err )
            } )
            .finally( done )
        // 2nd
        const profileSelect: ProfileSelect = {
                id: true, email: true, description: true, phone: true,
                sentConnections: {
                    id: true, createdAt: true, updatedAt: true, status: true,
                    sender: {
                        id: true, email: true, interests: true,
                        user: {
                            name: true, id: true, createdAt: true
                        }
                    },
                    receiver: {
                        id: true, email: true, interests: true,
                        user: {
                            name: true, id: true, createdAt: true,
                        }
                    }
                },
                founder_projects: {
                    name: true,
                    founders: {
                        email: true
                    },
                    requests: {
                        id: true, status: true, createdAt: true,
                        invitee: {
                            email: true
                        },
                        inviter: {
                            email: true
                        },
                        project: {
                            name: true
                        }
                    }
                },
                receivedConnections: {
                    id: true, createdAt: true, updatedAt: true, status: true,
                    sender: {
                        id: true, email: true, interests: true,
                        user: {
                            name: true, id: true, createdAt: true
                        }
                    },
                    receiver: {
                        id: true, email: true, interests: true,
                        user: {
                            name: true, id: true, createdAt: true
                        }
                    }
                },
                user: { username: true }
            }
            client.query
            .profile(
                profileSelect,
                { email: 'andres@madrov.com' }
            )
            .then ( ( res: IProfile ) => {
                console.log( res )
                expect( res ).toEqual( expect.objectContaining( {
                    id: expect.stringMatching( idRegex ),
                    email: expect.stringContaining(`andres`),
                    description: expect.stringContaining(`Desarrollador Backend`),
                    phone: null,
                    sentConnections: expect.arrayContaining( [expect.objectContaining( {
                        id: expect.stringMatching( idRegex ),
                        createdAt: expect.stringMatching( dateRegex ),
                        updatedAt: expect.stringMatching( dateRegex ),
                        status: expect.anything(),
                        sender: expect.objectContaining( {
                            id: expect.stringMatching( idRegex ),
                            email: expect.stringMatching( emailRegex ),
                            user: expect.objectContaining( {
                                name: expect.anything(),
                                id: expect.stringMatching( idRegex ),
                                createdAt: expect.stringMatching( dateRegex ),
                            } )
                        } ),
                        receiver: expect.objectContaining( {
                            id: expect.stringMatching( idRegex ),
                            email: expect.stringMatching( emailRegex ),
                            user: expect.objectContaining( {
                                name: expect.anything(),
                                id: expect.stringMatching( idRegex ),
                                createdAt: expect.stringMatching( dateRegex )
                            } )
                        } )
                    } )] ),
                    founder_projects: expect.arrayContaining( [expect.objectContaining( {
                        name: expect.anything(),
                        founders: expect.arrayContaining( [expect.objectContaining( {
                            email: expect.stringMatching( emailRegex )
                        } )] ),
                        requests: expect.arrayContaining([expect.objectContaining( {
                            id: expect.stringMatching( idRegex ),
                            status: expect.anything(),
                            createdAt: expect.stringMatching( dateRegex ),
                            invitee: expect.objectContaining( {
                                email: expect.stringMatching( emailRegex )
                            } ),
                            inviter: expect.objectContaining( {
                                email: expect.stringMatching( emailRegex )
                            } ),
                            project: expect.objectContaining( {
                                name: expect.anything()
                            } )
                        } )] )
                    } )] ),
                    // receivedConnection: expect.arrayContaining( [expect.objectContaining( {
                    //     id: expect.stringMatching( idRegex ),
                    //     createdAt: expect.stringMatching( dateRegex ),
                    //     updatedAt: expect.stringMatching( dateRegex ),
                    //     status: expect.anything(),
                    //     sender: expect.objectContaining( {
                    //         id: expect.stringMatching( idRegex ),
                    //         email: expect.stringMatching( emailRegex ),
                    //         user: expect.objectContaining( {
                    //             name: expect.anything(),
                    //             id: expect.stringMatching( idRegex ),
                    //             createdAt: expect.stringMatching( dateRegex ),
                    //         } )
                    //     } ),
                    //     receiver: expect.objectContaining( {
                    //         id: expect.stringMatching( idRegex ),
                    //         email: expect.stringMatching( emailRegex ),
                    //         user: expect.objectContaining( {
                    //             name: expect.anything(),
                    //             id: expect.stringMatching( idRegex ),
                    //             createdAt: expect.stringMatching( dateRegex )
                    //         } )
                    //     } )
                    // } )] )
                } ) )
            } )
            .catch( err => {
                console.log( err )
            })
            .finally( done )
    } )
    test( `Should create profile`, ( done ) => {

    } )
    test( `Should update profile`, ( done ) => {

    } )
    test( `Should delete profile`, ( done ) => {

    } )
} )

describe( `Chat`, () => {
    test( `Should read chat`, ( done ) => {

    } )
    test( `Should create chat`, ( done ) => {

    } )
    test( `Should update chat`, ( done ) => {

    } )
    test( `Should delete chat`, ( done ) => {

    } )
} )

describe( `Message`, () => {
    test( `Should read message`, ( done ) => {

    } )
    test( `Should create message`, ( done ) => {

    } )
    test( `Should update message`, ( done ) => {

    } )
    test( `Should delete message`, ( done ) => {

    } )
} )

describe( `Connection`, () => {
    test( `Should read connection`, ( done ) => {

    } )
    test( `Should create connection`, ( done ) => {

    } )
    test( `Should update connection`, ( done ) => {

    } )
    test( `Should delete connection`, ( done ) => {

    } )
} )

describe( `Project`, () => {
    test( `Should read project`, ( done ) => {

    } )
    test( `Should create project`, ( done ) => {

    } )
    test( `Should update project`, ( done ) => {

    } )
    test( `Should delete project`, ( done ) => {

    } )
} )

describe( `Request`, () => {
    test( `Should read request`, ( done ) => {

    } )
    test( `Should create request`, ( done ) => {

    } )
    test( `Should update request`, ( done ) => {

    } )
    test( `Should delete request`, ( done ) => {

    } )
} )

describe( `Comment`, () => {
    test( `Should read comment`, ( done ) => {

    } )
    test( `Should create comment`, ( done ) => {

    } )
    test( `Should update comment`, ( done ) => {

    } )
    test( `Should delete comment`, ( done ) => {

    } )
} )
