import { IFaq, IProfile, IRegistration, ProfileSelect, ScalarsClient } from '../../dist/index'
import { faqSeeds, registrationSeeds } from './client.seeds'

const client: ScalarsClient = new ScalarsClient()

const idRegex: RegExp = new RegExp( `[0-9a-fA-F]{16}` )
const dateRegex: RegExp = new RegExp( `[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]\\.[0-9]{3}Z` )
const emailRegex: RegExp = new RegExp( `[a-zA-Z]+@[a-zA-Z]+.+` )
const { objectContaining, stringContaining, anything, stringMatching, arrayContaining } = expect
const { floor, random } = Math

describe( `Registration`, () => {
    const { createRegistration, updateRegistration } = registrationSeeds
    describe( `Should read multiple and single registrations`, () => {
        let registrationId: string = ''
        test( `Should read registrations`, ( done ) => {
            client.query
                .registrations(
                    { id: true }
                )
                .then( ( res: Array<IRegistration> ) => {
                    expect( res ).toEqual( arrayContaining( [objectContaining( {
                        id: stringMatching( idRegex ),
                    } )] ) )
                    registrationId = res[floor( random() * res.length )].id || ''
                    done()
                } )
                .catch( ( err: unknown ) => {
                    console.log( err )
                } )
        } )
        test( `Should read registration`, ( done ) => {
            expect( registrationId ).toEqual( stringMatching( idRegex ) )
            client.query
                .registration(
                    { email: true, name: true, createdAt: true, updatedAt: true, linkedin: true },
                    { id: registrationId }
                )
                .then( ( res: IRegistration ) => {
                    expect( res ).toEqual( objectContaining( {
                        email: stringMatching( emailRegex ),
                        name: stringContaining( '' ),
                        createdAt: stringMatching( dateRegex ),
                        updatedAt: stringMatching( dateRegex ),
                        linkedin: stringContaining( '' )
                    } ) )
                    done()
                } )
                .catch( ( err: unknown ) => console.log( err ) )
        } )
    } )
    describe( `Should create, update and delete registration`, () => {
        let registrationId: string = ''
        test( `Should create registration`, ( done ) => {
            client.mutation
                .createRegistration(
                    { id: true },
                    {
                        email: createRegistration.email,
                        name: createRegistration.name,
                        linkedin: createRegistration.linkedin
                    }
                )
                .then( ( res: IRegistration ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringMatching( idRegex )
                    } ) )
                    registrationId = res.id || ''
                    done()
                } )
                .catch( ( err: unknown ) => console.log( err ) )
        } )
        test( `Should update registration`, ( done ) => {
            expect( registrationId ).toEqual( stringMatching( idRegex ) )
            client.mutation
                .updateRegistration(
                    { id: true, name: true, email: true, linkedin: true, createdAt: true, updatedAt: true },
                    { id: registrationId },
                    { email: updateRegistration.email, name: updateRegistration.name }
                )
                .then( ( res: IRegistration ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringContaining( registrationId ),
                        name: stringContaining( updateRegistration.name ),
                        email: stringContaining( updateRegistration.email ),
                        linkedin: stringContaining( createRegistration.linkedin ),
                        createdAt: stringMatching( dateRegex ),
                        updatedAt: stringMatching( dateRegex )
                    } ) )
                    done()
                } )
                .catch( ( err:unknown ) => console.log( err ) )
        } )
        test( `Should delete registration`, ( done ) => {
            expect( registrationId ).toEqual( stringMatching( idRegex ) )
            client.mutation
                .deleteRegistration(
                    { id: true, name: true, email: true, createdAt: true, linkedin:true, updatedAt: true },
                    { id: registrationId }
                )
                .then( ( res: IRegistration ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringContaining( registrationId ),
                        name: stringContaining( updateRegistration.name ),
                        email: stringContaining( updateRegistration.email ),
                        createdAt: stringMatching( dateRegex ),
                        linkedin: stringContaining( createRegistration.linkedin ),
                        updatedAt: stringMatching( dateRegex )
                    } ) )
                    done()
                } )
                .catch( ( err:unknown ) => console.log( err ) )
        } )
    } )
} )

describe( `Faq`, () => {
    const { createFaq, updateFaq } = faqSeeds
    describe( `Should read multiple and single faqs`, ()  => {
        let faqId: string = ''
        test(  `Should read faqs`, ( done ) => {
            client.query
                .faqs(
                    { id: true }
                )
                .then( ( res: Array<IFaq> ) => {
                    expect( res ).toEqual( arrayContaining( [objectContaining( {
                        id: stringMatching( idRegex )
                    } )] ) )
                    faqId = res[floor( random() * res.length )].id || ''
                    done()
                } )
                .catch( ( err: unknown ) => {
                    console.log( err )
                } )
        } )
        test( `Should read faq`, ( done ) => {
            expect( faqId ).toEqual( stringMatching( idRegex ) )
            client.query
                .faq(
                    { answer: true, question: true, createdAt: true, updatedAt: true },
                    { id: faqId }
                )
                .then( ( res: IFaq ) => {
                    expect( res ).toEqual( objectContaining( {
                        answer: stringContaining( '' ),
                        question: stringContaining( '' ),
                        createdAt: stringMatching( dateRegex ),
                        updatedAt: stringMatching( dateRegex )
                    } ) )
                    done()
                } )
                .catch( ( err: unknown ) => console.log( err ) )
        } )
    } )
    describe( `Should create, update and delete faq`, () => {
        let faqId: string = ''
        test( `Should create faq`, ( done ) => {
            client.mutation
                .createFaq(
                    {
                        id: true
                    },
                    {
                        question: createFaq.question,
                        answer: createFaq.answer
                    }
                )
                .then ( ( res: IFaq ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringMatching( idRegex )
                    } ) )
                    faqId = res.id || ''
                    done()
                } )
                .catch( ( err:unknown ) => console.log( err ) )
        } )
        test( `Should update faq`, ( done ) => {
            expect( faqId ).toEqual( stringMatching( idRegex ) )
            client.mutation
                .updateFaq(
                    { id: true, question: true, answer: true, createdAt: true, updatedAt: true },
                    { id: faqId },
                    { question: updateFaq.question }
                )
                .then( ( res: IFaq ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringContaining( faqId ),
                        question: stringContaining( updateFaq.question ),
                        answer: stringContaining( createFaq.answer ),
                        createdAt: stringMatching( dateRegex ),
                        updatedAt: stringMatching( dateRegex )
                    } ) )
                    done()
                } )
                .catch( ( err: unknown ) => console.log( err ) )
        } )
        test( `Should delete faq`, ( done ) => {
            expect( faqId ).toEqual( stringMatching( idRegex ) )
            client.mutation
                .deleteFaq(
                    { id: true, answer: true, question: true, createdAt: true, updatedAt: true },
                    { id: faqId }
                )
                .then( ( res: IFaq ) => {
                    expect( res ).toEqual( objectContaining( {
                        id: stringContaining( faqId ),
                        question: stringContaining( updateFaq.question ),
                        answer: stringContaining( createFaq.answer ),
                        createdAt: stringMatching( dateRegex ),
                        updatedAt: stringMatching( dateRegex )
                    } ) )
                    done()
                } )
                .catch( ( err:unknown ) => console.log( err ) )
        } )
    } )
} )

describe( `Answers`, () => {
    test( `Should read answer`, ( done ) => {
        done()
    } )
    test( `Should create answer`, ( done ) => {
        done()
    } )
    test( `Should update answer`, ( done ) => {
        done()
    } )
    test( `Should delete answer`, ( done ) => {
        done()
    } )
} )

describe( `Skill`, () => {
    test( `Should read skill`, ( done )=>{
        done()
    } )
    test( `Should create skill`, ( done ) => {
        done()
    } )
    test( `Should update skill`, ( done ) => {
        done()
    } )
    test( `Should delete skill`, ( done ) => {
        done()
    } )
} )

describe( `Interest`, () => {
    test( `Should read interest`, ( done ) => {
        done()
    } )
    test( `Should create interest`, ( done ) => {
        done()
    } )
    test( `Should update interest`, ( done ) => {
        done()
    } )
    test( `Should delete interest`, ( done ) => {
        done()
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
            .catch( ( err: unknown ) => {
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
                    email: expect.stringContaining( `andres` ),
                    description: expect.stringContaining( `Desarrollador Backend` ),
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
                        requests: expect.arrayContaining( [expect.objectContaining( {
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
            .catch( ( err: unknown ) => {
                console.log( err )
            } )
            .finally( done )
    } )
    test( `Should create profile`, ( done ) => {
        done()
    } )
    test( `Should update profile`, ( done ) => {
        done()
    } )
    test( `Should delete profile`, ( done ) => {
        done()
    } )
} )

describe( `Chat`, () => {
    test( `Should read chat`, ( done ) => {
        done()
    } )
    test( `Should create chat`, ( done ) => {
        done()
    } )
    test( `Should update chat`, ( done ) => {
        done()
    } )
    test( `Should delete chat`, ( done ) => {
        done()
    } )
} )

describe( `Message`, () => {
    test( `Should read message`, ( done ) => {
        done()
    } )
    test( `Should create message`, ( done ) => {
        done()
    } )
    test( `Should update message`, ( done ) => {
        done()
    } )
    test( `Should delete message`, ( done ) => {
        done()
    } )
} )

describe( `Connection`, () => {
    test( `Should read connection`, ( done ) => {
        done()
    } )
    test( `Should create connection`, ( done ) => {
        done()
    } )
    test( `Should update connection`, ( done ) => {
        done()
    } )
    test( `Should delete connection`, ( done ) => {
        done()
    } )
} )

describe( `Project`, () => {
    test( `Should read project`, ( done ) => {
        done()
    } )
    test( `Should create project`, ( done ) => {
        done()
    } )
    test( `Should update project`, ( done ) => {
        done()
    } )
    test( `Should delete project`, ( done ) => {
        done()
    } )
} )

describe( `Request`, () => {
    test( `Should read request`, ( done ) => {
        done()
    } )
    test( `Should create request`, ( done ) => {
        done()
    } )
    test( `Should update request`, ( done ) => {
        done()
    } )
    test( `Should delete request`, ( done ) => {
        done()
    } )
} )

describe( `Comment`, () => {
    test( `Should read comment`, ( done ) => {
        done()
    } )
    test( `Should create comment`, ( done ) => {
        done()
    } )
    test( `Should update comment`, ( done ) => {
        done()
    } )
    test( `Should delete comment`, ( done ) => {
        done()
    } )
} )
