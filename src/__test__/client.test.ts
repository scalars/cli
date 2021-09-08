// @ts-ignore
import { Profile, ProfileSelect, ScalarsClient, ScalarsClientConfig } from '../../dist/index'
import { faqSeeds, registrationSeeds } from './client.seeds'

const client: ScalarsClient = new ScalarsClient( { endpoint: '', authorization: ''} as ScalarsClientConfig )

const idRegex: RegExp = new RegExp( `[0-9a-fA-F]{16}` )
const dateRegex: RegExp = new RegExp( `[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]\\.[0-9]{3}Z` )
const emailRegex: RegExp = new RegExp( `[a-zA-Z]+@[a-zA-Z]+.+` )
const { objectContaining, stringContaining, stringMatching, arrayContaining } = expect
const { floor, random } = Math

describe( `Registration`, () => {
    const { createRegistration, updateRegistration } = registrationSeeds
    describe( `Should read multiple and single registrations`, () => {
        let registrationId: string = ''
        test( `Should read registrations`, ( done ) => {
            client.query
                .registrations( {
                    select: { id: true }
                } )
                .then( ( res: Array<any> ) => {
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
                .registration( {
                    select: { email: true, name: true, createdAt: true, updatedAt: true, linkedin: true },
                    where: { id: registrationId }
                } )
                .then( ( res: any ) => {
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
                .createRegistration( {
                    select: { id: true },
                    data: {
                        email: createRegistration.email,
                        name: createRegistration.name,
                        linkedin: createRegistration.linkedin
                    }
                } )
                .then( ( res: any ) => {
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
                .updateRegistration( {
                    select: { id: true, name: true, email: true, linkedin: true, createdAt: true, updatedAt: true },
                    where: { id: registrationId },
                    data: { email: updateRegistration.email, name: updateRegistration.name }
                } )
                .then( ( res: any ) => {
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
                .deleteRegistration( {
                    select: { id: true, name: true, email: true, createdAt: true, linkedin: true, updatedAt: true },
                    where: { id: registrationId }
                } )
                .then( ( res: any ) => {
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
        test( `Should read faqs`, ( done ) => {
            client.query
                .faqs( {
                    select: { id: true }
                } )
                .then( ( res: Array<any> ) => {
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
                .faq( {
                    select: { answer: true, question: true, createdAt: true, updatedAt: true },
                    where: { id: faqId }
                } )
                .then( ( res: any ) => {
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
                .createFaq( {
                    select: {
                        id: true
                    },
                    data: {
                        question: createFaq.question,
                        answer: createFaq.answer
                    }
                } )
                .then ( ( res: any ) => {
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
                .updateFaq( {
                    select: { id: true, question: true, answer: true, createdAt: true, updatedAt: true },
                    where: { id: faqId },
                    data: { question: updateFaq.question }
                } )
                .then( ( res: any ) => {
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
                .deleteFaq( {
                    select: { id: true, answer: true, question: true, createdAt: true, updatedAt: true },
                    where: { id: faqId }
                } )
                .then( ( res: any ) => {
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

describe( `Profile`, () => {
    test( `Should read profile`, ( done ) => {
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
            .profiles( {
                select: profileSelect,
                where: { user: { username: '+573145463091' } }
            } )
            .then ( ( res: Array<any> ) => {
                console.log( res )
                done()
            } )
            .catch( ( err: unknown ) => {
                console.log( err )
            } )
    } )
    test.todo( `Should create profile`)
    test.todo( `Should update profile`)
    test.todo( `Should delete profile`)
} )

describe( `Chat`, () => {
    test.todo( `Should read chat`)
    test.todo( `Should create chat`)
    test.todo( `Should update chat`)
    test.todo( `Should delete chat`)
} )

describe( `Message`, () => {
    test.todo( `Should read message`)
    test.todo( `Should create message`)
    test.todo( `Should update message`)
    test.todo( `Should delete message`)
} )

describe( `Connection`, () => {
    test.todo( `Should read connection`)
    test.todo( `Should create connection`)
    test.todo( `Should update connection`)
    test.todo( `Should delete connection`)
} )

describe( `Project`, () => {
    test.todo( `Should read project`)
    test.todo( `Should create project`)
    test.todo( `Should update project`)
    test.todo( `Should delete project`)
} )

describe( `Request`, () => {
    test.todo( `Should read request`)
    test.todo( `Should create request`)
    test.todo( `Should update request`)
    test.todo( `Should delete request`)
} )

describe( `Comment`, () => {
    test.todo( `Should read comment` )
    test.todo( `Should create comment`)
    test.todo( `Should update comment`)
    test.todo( `Should delete comment`)
} )
