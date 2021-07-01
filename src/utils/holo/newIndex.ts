/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    AnswerWhereUniqueInput,
    Answer,
    AnswerWhereInput,
    Scalars,
    AnswerOrderInput,
    AnswerCreateInput,
    AnswerUpdateInput,
    AppclientWhereUniqueInput,
    Appclient,
    AppclientWhereInput,
    AppclientOrderInput,
    AppclientCreateInput,
    AppclientUpdateInput,
    AssetsconfigWhereUniqueInput,
    Assetsconfig,
    AssetsconfigWhereInput,
    AssetsconfigOrderInput,
    AssetsconfigCreateInput,
    AssetsconfigUpdateInput,
    AuthcodegrantWhereUniqueInput,
    Authcodegrant,
    AuthcodegrantWhereInput,
    AuthcodegrantOrderInput,
    AuthcodegrantCreateInput,
    AuthcodegrantUpdateInput,
    AuthroleWhereUniqueInput,
    Authrole,
    AuthroleWhereInput,
    AuthroleOrderInput,
    AuthroleCreateInput,
    AuthroleUpdateInput,
    AuthsessionWhereUniqueInput,
    Authsession,
    AuthsessionWhereInput,
    AuthsessionOrderInput,
    AuthsessionCreateInput,
    AuthsessionUpdateInput,
    AuthuserWhereUniqueInput,
    Authuser,
    AuthuserWhereInput,
    AuthuserOrderInput,
    AuthuserCreateInput,
    AuthuserUpdateInput,
    ChatWhereUniqueInput,
    Chat,
    ChatWhereInput,
    ChatOrderInput,
    ChatCreateInput,
    ChatUpdateInput,
    CommentWhereUniqueInput,
    Comment,
    CommentWhereInput,
    CommentOrderInput,
    CommentCreateInput,
    CommentUpdateInput,
    ConnectionWhereUniqueInput,
    Connection,
    ConnectionWhereInput,
    ConnectionOrderInput,
    ConnectionCreateInput,
    ConnectionUpdateInput,
    CountryWhereUniqueInput,
    Country,
    CountryWhereInput,
    CountryOrderInput,
    CountryCreateInput,
    CountryUpdateInput,
    DatapermissionWhereUniqueInput,
    Datapermission,
    DatapermissionWhereInput,
    DatapermissionOrderInput,
    DatapermissionCreateInput,
    DatapermissionUpdateInput,
    DocumentfileWhereUniqueInput,
    Documentfile,
    DocumentfileWhereInput,
    DocumentfileOrderInput,
    DocumentfileCreateInput,
    DocumentfileUpdateInput,
    FaqWhereUniqueInput,
    Faq,
    FaqWhereInput,
    FaqOrderInput,
    FaqCreateInput,
    FaqUpdateInput,
    ImagefileWhereUniqueInput,
    Imagefile,
    ImagefileWhereInput,
    ImagefileOrderInput,
    ImagefileCreateInput,
    ImagefileUpdateInput,
    InterestWhereUniqueInput,
    Interest,
    InterestWhereInput,
    InterestOrderInput,
    InterestCreateInput,
    InterestUpdateInput,
    MessageWhereUniqueInput,
    Message,
    MessageWhereInput,
    MessageOrderInput,
    MessageCreateInput,
    MessageUpdateInput,
    MimetypeWhereUniqueInput,
    Mimetype,
    MimetypeWhereInput,
    MimetypeOrderInput,
    MimetypeCreateInput,
    MimetypeUpdateInput,
    ProfileWhereUniqueInput,
    Profile,
    ProfileWhereInput,
    ProfileOrderInput,
    ProfileCreateInput,
    ProfileUpdateInput,
    ProjectWhereUniqueInput,
    Project,
    ProjectWhereInput,
    ProjectOrderInput,
    ProjectCreateInput,
    ProjectUpdateInput,
    RegistrationWhereUniqueInput,
    Registration,
    RegistrationWhereInput,
    RegistrationOrderInput,
    RegistrationCreateInput,
    RegistrationUpdateInput,
    RequestWhereUniqueInput,
    Request,
    RequestWhereInput,
    RequestOrderInput,
    RequestCreateInput,
    RequestUpdateInput,
    SkillWhereUniqueInput,
    Skill,
    SkillWhereInput,
    SkillOrderInput,
    SkillCreateInput,
    SkillUpdateInput,
    SoundfileWhereUniqueInput,
    Soundfile,
    SoundfileWhereInput,
    SoundfileOrderInput,
    SoundfileCreateInput,
    SoundfileUpdateInput,
    TriggerWhereUniqueInput,
    Trigger,
    TriggerWhereInput,
    TriggerOrderInput,
    TriggerCreateInput,
    TriggerUpdateInput,
    VideofileWhereUniqueInput,
    Videofile,
    VideofileWhereInput,
    VideofileOrderInput,
    VideofileCreateInput,
    VideofileUpdateInput,
} from '../types'

import axios, { AxiosError } from 'axios'
import { DocumentNode, print } from 'graphql'
import { gql } from 'graphql-tag'

export type AnswerSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    answerArray?: boolean
    identifier?: RegistrationSelect
}
export type AppclientSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    client_id?: boolean
    client_secret?: boolean
    client_type?: null
    datapermissions?: null
    domains?: null
    grant_type?: null
    name?: boolean
    permissions?: boolean
    providers?: boolean
    redirect_uri?: null
    scopes?: null
    userPool?: boolean
}
export type AssetsconfigSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    compatibleMimes?: null
    compress?: boolean
    compressPercentage?: boolean
    description?: boolean
    label?: boolean
    mimeTypes?: null
    name?: boolean
}
export type AuthcodegrantSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    client?: AppclientSelect
    code?: boolean
    cognitoIdToken?: boolean
    redirectUri?: boolean
    user?: AuthuserSelect
}
export type AuthroleSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    authusers?: null
    createAt?: boolean
    datapermissions?: null
    default?: boolean
    description?: boolean
    name?: boolean
    permissions?: boolean
    updateAt?: boolean
    scopes?: null
}
export type AuthsessionSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    authuser?: AuthuserSelect
    cognitoIdToken?: boolean
    expiresIn?: boolean
    fromUrl?: boolean
    interchanges?: boolean
    ipAgent?: boolean
    sessionId?: boolean
    userAgent?: boolean
}
export type AuthuserSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    authrole?: AuthroleSelect
    email?: boolean
    isRoot?: boolean
    name?: boolean
    sessions?: null
    sub?: boolean
    username?: boolean
    notificationConfig?: boolean
    subscriptionConfig?: boolean
}
export type ChatSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    users?: null
    messages?: null
    type?: null
}
export type CommentSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    author?: ProfileSelect
    text?: boolean
    project?: ProjectSelect
}
export type ConnectionSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    sender?: ProfileSelect
    receiver?: ProfileSelect
    status?: null
}
export type CountrySelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    code?: boolean
}
export type DatapermissionSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    action?: null
    appclient?: AppclientSelect
    attributes?: null
    authrole?: AuthroleSelect
    entity?: boolean
    private?: boolean
    str?: boolean
}
export type DocumentfileSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    assetsConfig?: AssetsconfigSelect
    description?: boolean
    metainfo?: boolean
    mimeType?: MimetypeSelect
    name?: boolean
    url?: boolean
}
export type FaqSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    question?: boolean
    answer?: boolean
}
export type ImagefileSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    assetsConfig?: AssetsconfigSelect
    description?: boolean
    metainfo?: boolean
    mimeType?: MimetypeSelect
    name?: boolean
    url?: boolean
}
export type InterestSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
}
export type MessageSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    sender?: ProfileSelect
    text?: boolean
    type?: null
    seen?: null
    chat?: ChatSelect
}
export type MimetypeSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    compresible?: boolean
    description?: boolean
    extensions?: null
    name?: boolean
}
export type ProfileSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: AuthuserSelect
    avatar?: ImagefileSelect
    video?: VideofileSelect
    description?: boolean
    profession?: boolean
    profile_UsersFromChatFk?: null
    profile_SeenFromMessageFk?: null
    sentConnections?: null
    receivedConnections?: null
    linkedin?: boolean
    phone?: boolean
    skills?: boolean
    interests?: boolean
    feedback?: boolean
    invitations?: null
    requests?: null
    founder_projects?: null
    email?: boolean
    location?: boolean
}
export type ProjectSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    video?: VideofileSelect
    categories?: boolean
    requests?: null
    comments?: null
    founders?: null
    chat?: ChatSelect
    avatar?: ImagefileSelect
    location?: boolean
}
export type RegistrationSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    linkedin?: boolean
}
export type RequestSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    inviter?: ProfileSelect
    invitee?: ProfileSelect
    project?: ProjectSelect
    status?: null
}
export type SkillSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
}
export type SoundfileSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    assetsConfig?: AssetsconfigSelect
    description?: boolean
    metainfo?: boolean
    mimeType?: MimetypeSelect
    name?: boolean
    url?: boolean
}
export type TriggerSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    entity?: boolean
    resolvers?: null
    functions?: null
    actions?: null
}
export type VideofileSelect = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    assetsConfig?: AssetsconfigSelect
    description?: boolean
    metainfo?: boolean
    mimeType?: MimetypeSelect
    name?: boolean
    url?: boolean
}

const parseSelectFields = ( select: Record<string ,any> ): string => {
    let fields: string = ''
    Object.keys( select ).forEach( key => {
        if ( typeof select[key] === 'boolean' ) {
            fields = fields.concat( `${key} ` )
        }
        else {
            fields = fields.concat( `${key} { ${parseSelectFields( select[key] )}} ` )
        }
    } )
    return fields
}

const fillSelectedFields = ( operation: string, select: Record<string, any> ): DocumentNode => {
    return gql`${operation.replace( '#@@', parseSelectFields( select ) )}`
}

abstract class Service {
    protected _doQuery = ( query: DocumentNode, args: Record<string, any> ) => {
        console.log( `Doing query` )
        console.log( query )
    }
    protected doQuery = async ( query: DocumentNode, args: Record<string, any> ) => {
        try {
            const response = await axios.post(
                'https://app.scalars.co/rfand82vt2/api',
                {
                    query: print( query ),
                    variables: args
                },
                {
                    headers: {
                        'Authorization': 'client_id 1dc47a10-af42-11eb-8847-b1b62795d90c'
                    }
                }
            )
            console.log( response.data.data )
        }
        catch ( err: unknown ) {
            if ( axios.isAxiosError( err ) ) {
                console.log( `AXIOS ERROR` )
            }
            else {
                console.log( `STOCK ERROR` )
            }
        }
    }
    protected doMutation = ( mutation: DocumentNode, args: Record<string, any> ) => {
        console.log( 'Doing mutation...' )
        console.log( mutation )
    }
}

export class QueriesService extends Service {
    getAnswer (
        select: AnswerSelect,
        where: AnswerWhereUniqueInput,
    ): Partial<Answer> | void {
        const getAnswerQuery: string = `
            query getAnswer (
                $where: AnswerWhereUniqueInput!,
            ) {
                answer (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAnswerQuery, select ), {
            where,
        } )
    }
    getAnswers (
        select: AnswerSelect,
        where?: AnswerWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AnswerOrderInput,
    ): Array<Partial<Answer>> | void {
        const getAnswersQuery: string = `
            query getAnswers (
                $where: AnswerWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AnswerOrderInput,
            ) {
                answers (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAnswersQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAppclient (
        select: AppclientSelect,
        where: AppclientWhereUniqueInput,
    ): Partial<Appclient> | void {
        const getAppclientQuery: string = `
            query getAppclient (
                $where: AppclientWhereUniqueInput!,
            ) {
                appclient (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAppclientQuery, select ), {
            where,
        } )
    }
    getAppclients (
        select: AppclientSelect,
        where?: AppclientWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AppclientOrderInput,
    ): Array<Partial<Appclient>> | void {
        const getAppclientsQuery: string = `
            query getAppclients (
                $where: AppclientWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AppclientOrderInput,
            ) {
                appclients (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAppclientsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAssetsconfig (
        select: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
    ): Partial<Assetsconfig> | void {
        const getAssetsconfigQuery: string = `
            query getAssetsconfig (
                $where: AssetsconfigWhereUniqueInput!,
            ) {
                assetsconfig (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAssetsconfigQuery, select ), {
            where,
        } )
    }
    getAssetsconfigs (
        select: AssetsconfigSelect,
        where?: AssetsconfigWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AssetsconfigOrderInput,
    ): Array<Partial<Assetsconfig>> | void {
        const getAssetsconfigsQuery: string = `
            query getAssetsconfigs (
                $where: AssetsconfigWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AssetsconfigOrderInput,
            ) {
                assetsconfigs (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAssetsconfigsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAuthcodegrant (
        select: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
    ): Partial<Authcodegrant> | void {
        const getAuthcodegrantQuery: string = `
            query getAuthcodegrant (
                $where: AuthcodegrantWhereUniqueInput!,
            ) {
                authcodegrant (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthcodegrantQuery, select ), {
            where,
        } )
    }
    getAuthcodegrants (
        select: AuthcodegrantSelect,
        where?: AuthcodegrantWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthcodegrantOrderInput,
    ): Array<Partial<Authcodegrant>> | void {
        const getAuthcodegrantsQuery: string = `
            query getAuthcodegrants (
                $where: AuthcodegrantWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AuthcodegrantOrderInput,
            ) {
                authcodegrants (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthcodegrantsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAuthrole (
        select: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
    ): Partial<Authrole> | void {
        const getAuthroleQuery: string = `
            query getAuthrole (
                $where: AuthroleWhereUniqueInput!,
            ) {
                authrole (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthroleQuery, select ), {
            where,
        } )
    }
    getAuthroles (
        select: AuthroleSelect,
        where?: AuthroleWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthroleOrderInput,
    ): Array<Partial<Authrole>> | void {
        const getAuthrolesQuery: string = `
            query getAuthroles (
                $where: AuthroleWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AuthroleOrderInput,
            ) {
                authroles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthrolesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAuthsession (
        select: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
    ): Partial<Authsession> | void {
        const getAuthsessionQuery: string = `
            query getAuthsession (
                $where: AuthsessionWhereUniqueInput!,
            ) {
                authsession (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthsessionQuery, select ), {
            where,
        } )
    }
    getAuthsessions (
        select: AuthsessionSelect,
        where?: AuthsessionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthsessionOrderInput,
    ): Array<Partial<Authsession>> | void {
        const getAuthsessionsQuery: string = `
            query getAuthsessions (
                $where: AuthsessionWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AuthsessionOrderInput,
            ) {
                authsessions (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthsessionsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getAuthuser (
        select: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
    ): Partial<Authuser> | void {
        const getAuthuserQuery: string = `
            query getAuthuser (
                $where: AuthuserWhereUniqueInput!,
            ) {
                authuser (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthuserQuery, select ), {
            where,
        } )
    }
    getAuthusers (
        select: AuthuserSelect,
        where?: AuthuserWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthuserOrderInput,
    ): Array<Partial<Authuser>> | void {
        const getAuthusersQuery: string = `
            query getAuthusers (
                $where: AuthuserWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: AuthuserOrderInput,
            ) {
                authusers (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getAuthusersQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getChat (
        select: ChatSelect,
        where: ChatWhereUniqueInput,
    ): Partial<Chat> | void {
        const getChatQuery: string = `
            query getChat (
                $where: ChatWhereUniqueInput!,
            ) {
                chat (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getChatQuery, select ), {
            where,
        } )
    }
    getChats (
        select: ChatSelect,
        where?: ChatWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ChatOrderInput,
    ): Array<Partial<Chat>> | void {
        const getChatsQuery: string = `
            query getChats (
                $where: ChatWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: ChatOrderInput,
            ) {
                chats (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getChatsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getComment (
        select: CommentSelect,
        where: CommentWhereUniqueInput,
    ): Partial<Comment> | void {
        const getCommentQuery: string = `
            query getComment (
                $where: CommentWhereUniqueInput!,
            ) {
                comment (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getCommentQuery, select ), {
            where,
        } )
    }
    getComments (
        select: CommentSelect,
        where?: CommentWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: CommentOrderInput,
    ): Array<Partial<Comment>> | void {
        const getCommentsQuery: string = `
            query getComments (
                $where: CommentWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: CommentOrderInput,
            ) {
                comments (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getCommentsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getConnection (
        select: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
    ): Partial<Connection> | void {
        const getConnectionQuery: string = `
            query getConnection (
                $where: ConnectionWhereUniqueInput!,
            ) {
                connection (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getConnectionQuery, select ), {
            where,
        } )
    }
    getConnections (
        select: ConnectionSelect,
        where?: ConnectionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ConnectionOrderInput,
    ): Array<Partial<Connection>> | void {
        const getConnectionsQuery: string = `
            query getConnections (
                $where: ConnectionWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: ConnectionOrderInput,
            ) {
                connections (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getConnectionsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getCountry (
        select: CountrySelect,
        where: CountryWhereUniqueInput,
    ): Partial<Country> | void {
        const getCountryQuery: string = `
            query getCountry (
                $where: CountryWhereUniqueInput!,
            ) {
                country (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getCountryQuery, select ), {
            where,
        } )
    }
    getCountries (
        select: CountrySelect,
        where?: CountryWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: CountryOrderInput,
    ): Array<Partial<Country>> | void {
        const getCountriesQuery: string = `
            query getCountries (
                $where: CountryWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: CountryOrderInput,
            ) {
                countries (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getCountriesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getDatapermission (
        select: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
    ): Partial<Datapermission> | void {
        const getDatapermissionQuery: string = `
            query getDatapermission (
                $where: DatapermissionWhereUniqueInput!,
            ) {
                datapermission (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getDatapermissionQuery, select ), {
            where,
        } )
    }
    getDatapermissions (
        select: DatapermissionSelect,
        where?: DatapermissionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: DatapermissionOrderInput,
    ): Array<Partial<Datapermission>> | void {
        const getDatapermissionsQuery: string = `
            query getDatapermissions (
                $where: DatapermissionWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: DatapermissionOrderInput,
            ) {
                datapermissions (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getDatapermissionsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getDocumentfile (
        select: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
    ): Partial<Documentfile> | void {
        const getDocumentfileQuery: string = `
            query getDocumentfile (
                $where: DocumentfileWhereUniqueInput!,
            ) {
                documentfile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getDocumentfileQuery, select ), {
            where,
        } )
    }
    getDocumentfiles (
        select: DocumentfileSelect,
        where?: DocumentfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: DocumentfileOrderInput,
    ): Array<Partial<Documentfile>> | void {
        const getDocumentfilesQuery: string = `
            query getDocumentfiles (
                $where: DocumentfileWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: DocumentfileOrderInput,
            ) {
                documentfiles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getDocumentfilesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getFaq (
        select: FaqSelect,
        where: FaqWhereUniqueInput,
    ): Partial<Faq> | void {
        const getFaqQuery: string = `
            query getFaq (
                $where: FaqWhereUniqueInput!,
            ) {
                faq (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getFaqQuery, select ), {
            where,
        } )
    }
    getFaqs (
        select: FaqSelect,
        where?: FaqWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: FaqOrderInput,
    ): Array<Partial<Faq>> | void {
        const getFaqsQuery: string = `
            query getFaqs (
                $where: FaqWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: FaqOrderInput,
            ) {
                faqs (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getFaqsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getImagefile (
        select: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
    ): Partial<Imagefile> | void {
        const getImagefileQuery: string = `
            query getImagefile (
                $where: ImagefileWhereUniqueInput!,
            ) {
                imagefile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getImagefileQuery, select ), {
            where,
        } )
    }
    getImagefiles (
        select: ImagefileSelect,
        where?: ImagefileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ImagefileOrderInput,
    ): Array<Partial<Imagefile>> | void {
        const getImagefilesQuery: string = `
            query getImagefiles (
                $where: ImagefileWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: ImagefileOrderInput,
            ) {
                imagefiles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getImagefilesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getInterest (
        select: InterestSelect,
        where: InterestWhereUniqueInput,
    ): Partial<Interest> | void {
        const getInterestQuery: string = `
            query getInterest (
                $where: InterestWhereUniqueInput!,
            ) {
                interest (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getInterestQuery, select ), {
            where,
        } )
    }
    getInterests (
        select: InterestSelect,
        where?: InterestWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: InterestOrderInput,
    ): Array<Partial<Interest>> | void {
        const getInterestsQuery: string = `
            query getInterests (
                $where: InterestWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: InterestOrderInput,
            ) {
                interests (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getInterestsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getMessage (
        select: MessageSelect,
        where: MessageWhereUniqueInput,
    ): Partial<Message> | void {
        const getMessageQuery: string = `
            query getMessage (
                $where: MessageWhereUniqueInput!,
            ) {
                message (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getMessageQuery, select ), {
            where,
        } )
    }
    getMessages (
        select: MessageSelect,
        where?: MessageWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: MessageOrderInput,
    ): Array<Partial<Message>> | void {
        const getMessagesQuery: string = `
            query getMessages (
                $where: MessageWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: MessageOrderInput,
            ) {
                messages (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getMessagesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getMimetype (
        select: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
    ): Partial<Mimetype> | void {
        const getMimetypeQuery: string = `
            query getMimetype (
                $where: MimetypeWhereUniqueInput!,
            ) {
                mimetype (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getMimetypeQuery, select ), {
            where,
        } )
    }
    getMimetypes (
        select: MimetypeSelect,
        where?: MimetypeWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: MimetypeOrderInput,
    ): Array<Partial<Mimetype>> | void {
        const getMimetypesQuery: string = `
            query getMimetypes (
                $where: MimetypeWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: MimetypeOrderInput,
            ) {
                mimetypes (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getMimetypesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getProfile (
        select: ProfileSelect,
        where: ProfileWhereUniqueInput,
    ): Partial<Profile> | void {
        const getProfileQuery: string = `
            query getProfile (
                $where: ProfileWhereUniqueInput!,
            ) {
                profile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getProfileQuery, select ), {
            where,
        } )
    }
    getProfiles (
        select: ProfileSelect,
        where?: ProfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ProfileOrderInput,
    ): Array<Partial<Profile>> | void {
        const getProfilesQuery: string = `
            query getProfiles (
                $where: ProfileWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: ProfileOrderInput,
            ) {
                profiles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getProfilesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getProject (
        select: ProjectSelect,
        where: ProjectWhereUniqueInput,
    ): Partial<Project> | void {
        const getProjectQuery: string = `
            query getProject (
                $where: ProjectWhereUniqueInput!,
            ) {
                project (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getProjectQuery, select ), {
            where,
        } )
    }
    getProjects (
        select: ProjectSelect,
        where?: ProjectWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ProjectOrderInput,
    ): Array<Partial<Project>> | void {
        const getProjectsQuery: string = `
            query getProjects (
                $where: ProjectWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: ProjectOrderInput,
            ) {
                projects (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getProjectsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getRegistration (
        select: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
    ): Partial<Registration> | void {
        const getRegistrationQuery: string = `
            query getRegistration (
                $where: RegistrationWhereUniqueInput!,
            ) {
                registration (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getRegistrationQuery, select ), {
            where,
        } )
    }
    getRegistrations (
        select: RegistrationSelect,
        where?: RegistrationWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: RegistrationOrderInput,
    ): Array<Partial<Registration>> | void {
        const getRegistrationsQuery: string = `
            query getRegistrations (
                $where: RegistrationWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: RegistrationOrderInput,
            ) {
                registrations (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getRegistrationsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getRequest (
        select: RequestSelect,
        where: RequestWhereUniqueInput,
    ): Partial<Request> | void {
        const getRequestQuery: string = `
            query getRequest (
                $where: RequestWhereUniqueInput!,
            ) {
                request (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getRequestQuery, select ), {
            where,
        } )
    }
    getRequests (
        select: RequestSelect,
        where?: RequestWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: RequestOrderInput,
    ): Array<Partial<Request>> | void {
        const getRequestsQuery: string = `
            query getRequests (
                $where: RequestWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: RequestOrderInput,
            ) {
                requests (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getRequestsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getSkill (
        select: SkillSelect,
        where: SkillWhereUniqueInput,
    ): Partial<Skill> | void {
        const getSkillQuery: string = `
            query getSkill (
                $where: SkillWhereUniqueInput!,
            ) {
                skill (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getSkillQuery, select ), {
            where,
        } )
    }
    getSkills (
        select: SkillSelect,
        where?: SkillWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: SkillOrderInput,
    ): Array<Partial<Skill>> | void {
        const getSkillsQuery: string = `
            query getSkills (
                $where: SkillWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: SkillOrderInput,
            ) {
                skills (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getSkillsQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getSoundfile (
        select: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
    ): Partial<Soundfile> | void {
        const getSoundfileQuery: string = `
            query getSoundfile (
                $where: SoundfileWhereUniqueInput!,
            ) {
                soundfile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getSoundfileQuery, select ), {
            where,
        } )
    }
    getSoundfiles (
        select: SoundfileSelect,
        where?: SoundfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: SoundfileOrderInput,
    ): Array<Partial<Soundfile>> | void {
        const getSoundfilesQuery: string = `
            query getSoundfiles (
                $where: SoundfileWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: SoundfileOrderInput,
            ) {
                soundfiles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getSoundfilesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getTrigger (
        select: TriggerSelect,
        where: TriggerWhereUniqueInput,
    ): Partial<Trigger> | void {
        const getTriggerQuery: string = `
            query getTrigger (
                $where: TriggerWhereUniqueInput!,
            ) {
                trigger (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getTriggerQuery, select ), {
            where,
        } )
    }
    getTriggers (
        select: TriggerSelect,
        where?: TriggerWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: TriggerOrderInput,
    ): Array<Partial<Trigger>> | void {
        const getTriggersQuery: string = `
            query getTriggers (
                $where: TriggerWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: TriggerOrderInput,
            ) {
                triggers (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getTriggersQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
    getVideofile (
        select: VideofileSelect,
        where: VideofileWhereUniqueInput,
    ): Partial<Videofile> | void {
        const getVideofileQuery: string = `
            query getVideofile (
                $where: VideofileWhereUniqueInput!,
            ) {
                videofile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getVideofileQuery, select ), {
            where,
        } )
    }
    getVideofiles (
        select: VideofileSelect,
        where?: VideofileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: VideofileOrderInput,
    ): Array<Partial<Videofile>> | void {
        const getVideofilesQuery: string = `
            query getVideofiles (
                $where: VideofileWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: VideofileOrderInput,
            ) {
                videofiles (
                    where: $where,
                    first: $first,
                    last: $last,
                    before: $before,
                    after: $after,
                    orderBy: $orderBy,
                ) {
                    #@@
                }
            }
        `
        this.doQuery( fillSelectedFields( getVideofilesQuery, select ), {
            where,
            first,
            last,
            before,
            after,
            orderBy,
        } )
    }
}

export class MutationsService extends Service {
    CreateAnswer (
        select: AnswerSelect,
        data: AnswerCreateInput,
    ): Partial<Answer> | void {
        const CreateAnswerMutation: string = `
            mutation CreateAnswer (
                $data: AnswerCreateInput!,
            ) {
                createAnswer (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAnswerMutation, select ), {
            data,
        } )
    }
    UpdateAnswer (
        select: AnswerSelect,
        where: AnswerWhereUniqueInput,
        data: AnswerUpdateInput,
    ): Partial<Answer> | void {
        const UpdateAnswerMutation: string = `
            mutation UpdateAnswer (
                $where: AnswerWhereUniqueInput!,
                $data: AnswerUpdateInput!,
            ) {
                updateAnswer (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAnswerMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAnswer (
        select: AnswerSelect,
        where: AnswerWhereUniqueInput,
    ): Partial<Answer> | void {
        const DeleteAnswerMutation: string = `
            mutation DeleteAnswer (
                $where: AnswerWhereUniqueInput!,
            ) {
                deleteAnswer (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAnswerMutation, select ), {
            where,
        } )
    }
    CreateAppclient (
        select: AppclientSelect,
        data: AppclientCreateInput,
    ): Partial<Appclient> | void {
        const CreateAppclientMutation: string = `
            mutation CreateAppclient (
                $data: AppclientCreateInput!,
            ) {
                createAppclient (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAppclientMutation, select ), {
            data,
        } )
    }
    UpdateAppclient (
        select: AppclientSelect,
        where: AppclientWhereUniqueInput,
        data: AppclientUpdateInput,
    ): Partial<Appclient> | void {
        const UpdateAppclientMutation: string = `
            mutation UpdateAppclient (
                $where: AppclientWhereUniqueInput!,
                $data: AppclientUpdateInput!,
            ) {
                updateAppclient (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAppclientMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAppclient (
        select: AppclientSelect,
        where: AppclientWhereUniqueInput,
    ): Partial<Appclient> | void {
        const DeleteAppclientMutation: string = `
            mutation DeleteAppclient (
                $where: AppclientWhereUniqueInput!,
            ) {
                deleteAppclient (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAppclientMutation, select ), {
            where,
        } )
    }
    CreateAssetsconfig (
        select: AssetsconfigSelect,
        data: AssetsconfigCreateInput,
    ): Partial<Assetsconfig> | void {
        const CreateAssetsconfigMutation: string = `
            mutation CreateAssetsconfig (
                $data: AssetsconfigCreateInput!,
            ) {
                createAssetsconfig (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAssetsconfigMutation, select ), {
            data,
        } )
    }
    UpdateAssetsconfig (
        select: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
        data: AssetsconfigUpdateInput,
    ): Partial<Assetsconfig> | void {
        const UpdateAssetsconfigMutation: string = `
            mutation UpdateAssetsconfig (
                $where: AssetsconfigWhereUniqueInput!,
                $data: AssetsconfigUpdateInput!,
            ) {
                updateAssetsconfig (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAssetsconfigMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAssetsconfig (
        select: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
    ): Partial<Assetsconfig> | void {
        const DeleteAssetsconfigMutation: string = `
            mutation DeleteAssetsconfig (
                $where: AssetsconfigWhereUniqueInput!,
            ) {
                deleteAssetsconfig (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAssetsconfigMutation, select ), {
            where,
        } )
    }
    CreateAuthcodegrant (
        select: AuthcodegrantSelect,
        data: AuthcodegrantCreateInput,
    ): Partial<Authcodegrant> | void {
        const CreateAuthcodegrantMutation: string = `
            mutation CreateAuthcodegrant (
                $data: AuthcodegrantCreateInput!,
            ) {
                createAuthcodegrant (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAuthcodegrantMutation, select ), {
            data,
        } )
    }
    UpdateAuthcodegrant (
        select: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
        data: AuthcodegrantUpdateInput,
    ): Partial<Authcodegrant> | void {
        const UpdateAuthcodegrantMutation: string = `
            mutation UpdateAuthcodegrant (
                $where: AuthcodegrantWhereUniqueInput!,
                $data: AuthcodegrantUpdateInput!,
            ) {
                updateAuthcodegrant (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAuthcodegrantMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAuthcodegrant (
        select: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
    ): Partial<Authcodegrant> | void {
        const DeleteAuthcodegrantMutation: string = `
            mutation DeleteAuthcodegrant (
                $where: AuthcodegrantWhereUniqueInput!,
            ) {
                deleteAuthcodegrant (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAuthcodegrantMutation, select ), {
            where,
        } )
    }
    CreateAuthrole (
        select: AuthroleSelect,
        data: AuthroleCreateInput,
    ): Partial<Authrole> | void {
        const CreateAuthroleMutation: string = `
            mutation CreateAuthrole (
                $data: AuthroleCreateInput!,
            ) {
                createAuthrole (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAuthroleMutation, select ), {
            data,
        } )
    }
    UpdateAuthrole (
        select: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
        data: AuthroleUpdateInput,
    ): Partial<Authrole> | void {
        const UpdateAuthroleMutation: string = `
            mutation UpdateAuthrole (
                $where: AuthroleWhereUniqueInput!,
                $data: AuthroleUpdateInput!,
            ) {
                updateAuthrole (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAuthroleMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAuthrole (
        select: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
    ): Partial<Authrole> | void {
        const DeleteAuthroleMutation: string = `
            mutation DeleteAuthrole (
                $where: AuthroleWhereUniqueInput!,
            ) {
                deleteAuthrole (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAuthroleMutation, select ), {
            where,
        } )
    }
    CreateAuthsession (
        select: AuthsessionSelect,
        data: AuthsessionCreateInput,
    ): Partial<Authsession> | void {
        const CreateAuthsessionMutation: string = `
            mutation CreateAuthsession (
                $data: AuthsessionCreateInput!,
            ) {
                createAuthsession (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAuthsessionMutation, select ), {
            data,
        } )
    }
    UpdateAuthsession (
        select: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
        data: AuthsessionUpdateInput,
    ): Partial<Authsession> | void {
        const UpdateAuthsessionMutation: string = `
            mutation UpdateAuthsession (
                $where: AuthsessionWhereUniqueInput!,
                $data: AuthsessionUpdateInput!,
            ) {
                updateAuthsession (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAuthsessionMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAuthsession (
        select: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
    ): Partial<Authsession> | void {
        const DeleteAuthsessionMutation: string = `
            mutation DeleteAuthsession (
                $where: AuthsessionWhereUniqueInput!,
            ) {
                deleteAuthsession (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAuthsessionMutation, select ), {
            where,
        } )
    }
    CreateAuthuser (
        select: AuthuserSelect,
        data: AuthuserCreateInput,
    ): Partial<Authuser> | void {
        const CreateAuthuserMutation: string = `
            mutation CreateAuthuser (
                $data: AuthuserCreateInput!,
            ) {
                createAuthuser (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateAuthuserMutation, select ), {
            data,
        } )
    }
    UpdateAuthuser (
        select: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
        data: AuthuserUpdateInput,
    ): Partial<Authuser> | void {
        const UpdateAuthuserMutation: string = `
            mutation UpdateAuthuser (
                $where: AuthuserWhereUniqueInput!,
                $data: AuthuserUpdateInput!,
            ) {
                updateAuthuser (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateAuthuserMutation, select ), {
            where,
            data,
        } )
    }
    DeleteAuthuser (
        select: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
    ): Partial<Authuser> | void {
        const DeleteAuthuserMutation: string = `
            mutation DeleteAuthuser (
                $where: AuthuserWhereUniqueInput!,
            ) {
                deleteAuthuser (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteAuthuserMutation, select ), {
            where,
        } )
    }
    CreateChat (
        select: ChatSelect,
        data: ChatCreateInput,
    ): Partial<Chat> | void {
        const CreateChatMutation: string = `
            mutation CreateChat (
                $data: ChatCreateInput!,
            ) {
                createChat (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateChatMutation, select ), {
            data,
        } )
    }
    UpdateChat (
        select: ChatSelect,
        where: ChatWhereUniqueInput,
        data: ChatUpdateInput,
    ): Partial<Chat> | void {
        const UpdateChatMutation: string = `
            mutation UpdateChat (
                $where: ChatWhereUniqueInput!,
                $data: ChatUpdateInput!,
            ) {
                updateChat (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateChatMutation, select ), {
            where,
            data,
        } )
    }
    DeleteChat (
        select: ChatSelect,
        where: ChatWhereUniqueInput,
    ): Partial<Chat> | void {
        const DeleteChatMutation: string = `
            mutation DeleteChat (
                $where: ChatWhereUniqueInput!,
            ) {
                deleteChat (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteChatMutation, select ), {
            where,
        } )
    }
    CreateComment (
        select: CommentSelect,
        data: CommentCreateInput,
    ): Partial<Comment> | void {
        const CreateCommentMutation: string = `
            mutation CreateComment (
                $data: CommentCreateInput!,
            ) {
                createComment (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateCommentMutation, select ), {
            data,
        } )
    }
    UpdateComment (
        select: CommentSelect,
        where: CommentWhereUniqueInput,
        data: CommentUpdateInput,
    ): Partial<Comment> | void {
        const UpdateCommentMutation: string = `
            mutation UpdateComment (
                $where: CommentWhereUniqueInput!,
                $data: CommentUpdateInput!,
            ) {
                updateComment (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateCommentMutation, select ), {
            where,
            data,
        } )
    }
    DeleteComment (
        select: CommentSelect,
        where: CommentWhereUniqueInput,
    ): Partial<Comment> | void {
        const DeleteCommentMutation: string = `
            mutation DeleteComment (
                $where: CommentWhereUniqueInput!,
            ) {
                deleteComment (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteCommentMutation, select ), {
            where,
        } )
    }
    CreateConnection (
        select: ConnectionSelect,
        data: ConnectionCreateInput,
    ): Partial<Connection> | void {
        const CreateConnectionMutation: string = `
            mutation CreateConnection (
                $data: ConnectionCreateInput!,
            ) {
                createConnection (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateConnectionMutation, select ), {
            data,
        } )
    }
    UpdateConnection (
        select: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
        data: ConnectionUpdateInput,
    ): Partial<Connection> | void {
        const UpdateConnectionMutation: string = `
            mutation UpdateConnection (
                $where: ConnectionWhereUniqueInput!,
                $data: ConnectionUpdateInput!,
            ) {
                updateConnection (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateConnectionMutation, select ), {
            where,
            data,
        } )
    }
    DeleteConnection (
        select: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
    ): Partial<Connection> | void {
        const DeleteConnectionMutation: string = `
            mutation DeleteConnection (
                $where: ConnectionWhereUniqueInput!,
            ) {
                deleteConnection (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteConnectionMutation, select ), {
            where,
        } )
    }
    CreateCountry (
        select: CountrySelect,
        data: CountryCreateInput,
    ): Partial<Country> | void {
        const CreateCountryMutation: string = `
            mutation CreateCountry (
                $data: CountryCreateInput!,
            ) {
                createCountry (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateCountryMutation, select ), {
            data,
        } )
    }
    UpdateCountry (
        select: CountrySelect,
        where: CountryWhereUniqueInput,
        data: CountryUpdateInput,
    ): Partial<Country> | void {
        const UpdateCountryMutation: string = `
            mutation UpdateCountry (
                $where: CountryWhereUniqueInput!,
                $data: CountryUpdateInput!,
            ) {
                updateCountry (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateCountryMutation, select ), {
            where,
            data,
        } )
    }
    DeleteCountry (
        select: CountrySelect,
        where: CountryWhereUniqueInput,
    ): Partial<Country> | void {
        const DeleteCountryMutation: string = `
            mutation DeleteCountry (
                $where: CountryWhereUniqueInput!,
            ) {
                deleteCountry (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteCountryMutation, select ), {
            where,
        } )
    }
    CreateDatapermission (
        select: DatapermissionSelect,
        data: DatapermissionCreateInput,
    ): Partial<Datapermission> | void {
        const CreateDatapermissionMutation: string = `
            mutation CreateDatapermission (
                $data: DatapermissionCreateInput!,
            ) {
                createDatapermission (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateDatapermissionMutation, select ), {
            data,
        } )
    }
    UpdateDatapermission (
        select: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
        data: DatapermissionUpdateInput,
    ): Partial<Datapermission> | void {
        const UpdateDatapermissionMutation: string = `
            mutation UpdateDatapermission (
                $where: DatapermissionWhereUniqueInput!,
                $data: DatapermissionUpdateInput!,
            ) {
                updateDatapermission (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateDatapermissionMutation, select ), {
            where,
            data,
        } )
    }
    DeleteDatapermission (
        select: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
    ): Partial<Datapermission> | void {
        const DeleteDatapermissionMutation: string = `
            mutation DeleteDatapermission (
                $where: DatapermissionWhereUniqueInput!,
            ) {
                deleteDatapermission (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteDatapermissionMutation, select ), {
            where,
        } )
    }
    CreateDocumentfile (
        select: DocumentfileSelect,
        data: DocumentfileCreateInput,
    ): Partial<Documentfile> | void {
        const CreateDocumentfileMutation: string = `
            mutation CreateDocumentfile (
                $data: DocumentfileCreateInput!,
            ) {
                createDocumentfile (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateDocumentfileMutation, select ), {
            data,
        } )
    }
    UpdateDocumentfile (
        select: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
        data: DocumentfileUpdateInput,
    ): Partial<Documentfile> | void {
        const UpdateDocumentfileMutation: string = `
            mutation UpdateDocumentfile (
                $where: DocumentfileWhereUniqueInput!,
                $data: DocumentfileUpdateInput!,
            ) {
                updateDocumentfile (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateDocumentfileMutation, select ), {
            where,
            data,
        } )
    }
    DeleteDocumentfile (
        select: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
    ): Partial<Documentfile> | void {
        const DeleteDocumentfileMutation: string = `
            mutation DeleteDocumentfile (
                $where: DocumentfileWhereUniqueInput!,
            ) {
                deleteDocumentfile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteDocumentfileMutation, select ), {
            where,
        } )
    }
    CreateFaq (
        select: FaqSelect,
        data: FaqCreateInput,
    ): Partial<Faq> | void {
        const CreateFaqMutation: string = `
            mutation CreateFaq (
                $data: FaqCreateInput!,
            ) {
                createFaq (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateFaqMutation, select ), {
            data,
        } )
    }
    UpdateFaq (
        select: FaqSelect,
        where: FaqWhereUniqueInput,
        data: FaqUpdateInput,
    ): Partial<Faq> | void {
        const UpdateFaqMutation: string = `
            mutation UpdateFaq (
                $where: FaqWhereUniqueInput!,
                $data: FaqUpdateInput!,
            ) {
                updateFaq (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateFaqMutation, select ), {
            where,
            data,
        } )
    }
    DeleteFaq (
        select: FaqSelect,
        where: FaqWhereUniqueInput,
    ): Partial<Faq> | void {
        const DeleteFaqMutation: string = `
            mutation DeleteFaq (
                $where: FaqWhereUniqueInput!,
            ) {
                deleteFaq (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteFaqMutation, select ), {
            where,
        } )
    }
    CreateImagefile (
        select: ImagefileSelect,
        data: ImagefileCreateInput,
    ): Partial<Imagefile> | void {
        const CreateImagefileMutation: string = `
            mutation CreateImagefile (
                $data: ImagefileCreateInput!,
            ) {
                createImagefile (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateImagefileMutation, select ), {
            data,
        } )
    }
    UpdateImagefile (
        select: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
        data: ImagefileUpdateInput,
    ): Partial<Imagefile> | void {
        const UpdateImagefileMutation: string = `
            mutation UpdateImagefile (
                $where: ImagefileWhereUniqueInput!,
                $data: ImagefileUpdateInput!,
            ) {
                updateImagefile (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateImagefileMutation, select ), {
            where,
            data,
        } )
    }
    DeleteImagefile (
        select: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
    ): Partial<Imagefile> | void {
        const DeleteImagefileMutation: string = `
            mutation DeleteImagefile (
                $where: ImagefileWhereUniqueInput!,
            ) {
                deleteImagefile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteImagefileMutation, select ), {
            where,
        } )
    }
    CreateInterest (
        select: InterestSelect,
        data: InterestCreateInput,
    ): Partial<Interest> | void {
        const CreateInterestMutation: string = `
            mutation CreateInterest (
                $data: InterestCreateInput!,
            ) {
                createInterest (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateInterestMutation, select ), {
            data,
        } )
    }
    UpdateInterest (
        select: InterestSelect,
        where: InterestWhereUniqueInput,
        data: InterestUpdateInput,
    ): Partial<Interest> | void {
        const UpdateInterestMutation: string = `
            mutation UpdateInterest (
                $where: InterestWhereUniqueInput!,
                $data: InterestUpdateInput!,
            ) {
                updateInterest (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateInterestMutation, select ), {
            where,
            data,
        } )
    }
    DeleteInterest (
        select: InterestSelect,
        where: InterestWhereUniqueInput,
    ): Partial<Interest> | void {
        const DeleteInterestMutation: string = `
            mutation DeleteInterest (
                $where: InterestWhereUniqueInput!,
            ) {
                deleteInterest (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteInterestMutation, select ), {
            where,
        } )
    }
    CreateMessage (
        select: MessageSelect,
        data: MessageCreateInput,
    ): Partial<Message> | void {
        const CreateMessageMutation: string = `
            mutation CreateMessage (
                $data: MessageCreateInput!,
            ) {
                createMessage (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateMessageMutation, select ), {
            data,
        } )
    }
    UpdateMessage (
        select: MessageSelect,
        where: MessageWhereUniqueInput,
        data: MessageUpdateInput,
    ): Partial<Message> | void {
        const UpdateMessageMutation: string = `
            mutation UpdateMessage (
                $where: MessageWhereUniqueInput!,
                $data: MessageUpdateInput!,
            ) {
                updateMessage (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateMessageMutation, select ), {
            where,
            data,
        } )
    }
    DeleteMessage (
        select: MessageSelect,
        where: MessageWhereUniqueInput,
    ): Partial<Message> | void {
        const DeleteMessageMutation: string = `
            mutation DeleteMessage (
                $where: MessageWhereUniqueInput!,
            ) {
                deleteMessage (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteMessageMutation, select ), {
            where,
        } )
    }
    CreateMimetype (
        select: MimetypeSelect,
        data: MimetypeCreateInput,
    ): Partial<Mimetype> | void {
        const CreateMimetypeMutation: string = `
            mutation CreateMimetype (
                $data: MimetypeCreateInput!,
            ) {
                createMimetype (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateMimetypeMutation, select ), {
            data,
        } )
    }
    UpdateMimetype (
        select: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
        data: MimetypeUpdateInput,
    ): Partial<Mimetype> | void {
        const UpdateMimetypeMutation: string = `
            mutation UpdateMimetype (
                $where: MimetypeWhereUniqueInput!,
                $data: MimetypeUpdateInput!,
            ) {
                updateMimetype (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateMimetypeMutation, select ), {
            where,
            data,
        } )
    }
    DeleteMimetype (
        select: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
    ): Partial<Mimetype> | void {
        const DeleteMimetypeMutation: string = `
            mutation DeleteMimetype (
                $where: MimetypeWhereUniqueInput!,
            ) {
                deleteMimetype (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteMimetypeMutation, select ), {
            where,
        } )
    }
    CreateProfile (
        select: ProfileSelect,
        data: ProfileCreateInput,
    ): Partial<Profile> | void {
        const CreateProfileMutation: string = `
            mutation CreateProfile (
                $data: ProfileCreateInput!,
            ) {
                createProfile (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateProfileMutation, select ), {
            data,
        } )
    }
    UpdateProfile (
        select: ProfileSelect,
        where: ProfileWhereUniqueInput,
        data: ProfileUpdateInput,
    ): Partial<Profile> | void {
        const UpdateProfileMutation: string = `
            mutation UpdateProfile (
                $where: ProfileWhereUniqueInput!,
                $data: ProfileUpdateInput!,
            ) {
                updateProfile (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateProfileMutation, select ), {
            where,
            data,
        } )
    }
    DeleteProfile (
        select: ProfileSelect,
        where: ProfileWhereUniqueInput,
    ): Partial<Profile> | void {
        const DeleteProfileMutation: string = `
            mutation DeleteProfile (
                $where: ProfileWhereUniqueInput!,
            ) {
                deleteProfile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteProfileMutation, select ), {
            where,
        } )
    }
    CreateProject (
        select: ProjectSelect,
        data: ProjectCreateInput,
    ): Partial<Project> | void {
        const CreateProjectMutation: string = `
            mutation CreateProject (
                $data: ProjectCreateInput!,
            ) {
                createProject (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateProjectMutation, select ), {
            data,
        } )
    }
    UpdateProject (
        select: ProjectSelect,
        where: ProjectWhereUniqueInput,
        data: ProjectUpdateInput,
    ): Partial<Project> | void {
        const UpdateProjectMutation: string = `
            mutation UpdateProject (
                $where: ProjectWhereUniqueInput!,
                $data: ProjectUpdateInput!,
            ) {
                updateProject (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateProjectMutation, select ), {
            where,
            data,
        } )
    }
    DeleteProject (
        select: ProjectSelect,
        where: ProjectWhereUniqueInput,
    ): Partial<Project> | void {
        const DeleteProjectMutation: string = `
            mutation DeleteProject (
                $where: ProjectWhereUniqueInput!,
            ) {
                deleteProject (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteProjectMutation, select ), {
            where,
        } )
    }
    CreateRegistration (
        select: RegistrationSelect,
        data: RegistrationCreateInput,
    ): Partial<Registration> | void {
        const CreateRegistrationMutation: string = `
            mutation CreateRegistration (
                $data: RegistrationCreateInput!,
            ) {
                createRegistration (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateRegistrationMutation, select ), {
            data,
        } )
    }
    UpdateRegistration (
        select: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
        data: RegistrationUpdateInput,
    ): Partial<Registration> | void {
        const UpdateRegistrationMutation: string = `
            mutation UpdateRegistration (
                $where: RegistrationWhereUniqueInput!,
                $data: RegistrationUpdateInput!,
            ) {
                updateRegistration (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateRegistrationMutation, select ), {
            where,
            data,
        } )
    }
    DeleteRegistration (
        select: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
    ): Partial<Registration> | void {
        const DeleteRegistrationMutation: string = `
            mutation DeleteRegistration (
                $where: RegistrationWhereUniqueInput!,
            ) {
                deleteRegistration (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteRegistrationMutation, select ), {
            where,
        } )
    }
    CreateRequest (
        select: RequestSelect,
        data: RequestCreateInput,
    ): Partial<Request> | void {
        const CreateRequestMutation: string = `
            mutation CreateRequest (
                $data: RequestCreateInput!,
            ) {
                createRequest (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateRequestMutation, select ), {
            data,
        } )
    }
    UpdateRequest (
        select: RequestSelect,
        where: RequestWhereUniqueInput,
        data: RequestUpdateInput,
    ): Partial<Request> | void {
        const UpdateRequestMutation: string = `
            mutation UpdateRequest (
                $where: RequestWhereUniqueInput!,
                $data: RequestUpdateInput!,
            ) {
                updateRequest (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateRequestMutation, select ), {
            where,
            data,
        } )
    }
    DeleteRequest (
        select: RequestSelect,
        where: RequestWhereUniqueInput,
    ): Partial<Request> | void {
        const DeleteRequestMutation: string = `
            mutation DeleteRequest (
                $where: RequestWhereUniqueInput!,
            ) {
                deleteRequest (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteRequestMutation, select ), {
            where,
        } )
    }
    CreateSkill (
        select: SkillSelect,
        data: SkillCreateInput,
    ): Partial<Skill> | void {
        const CreateSkillMutation: string = `
            mutation CreateSkill (
                $data: SkillCreateInput!,
            ) {
                createSkill (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateSkillMutation, select ), {
            data,
        } )
    }
    UpdateSkill (
        select: SkillSelect,
        where: SkillWhereUniqueInput,
        data: SkillUpdateInput,
    ): Partial<Skill> | void {
        const UpdateSkillMutation: string = `
            mutation UpdateSkill (
                $where: SkillWhereUniqueInput!,
                $data: SkillUpdateInput!,
            ) {
                updateSkill (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateSkillMutation, select ), {
            where,
            data,
        } )
    }
    DeleteSkill (
        select: SkillSelect,
        where: SkillWhereUniqueInput,
    ): Partial<Skill> | void {
        const DeleteSkillMutation: string = `
            mutation DeleteSkill (
                $where: SkillWhereUniqueInput!,
            ) {
                deleteSkill (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteSkillMutation, select ), {
            where,
        } )
    }
    CreateSoundfile (
        select: SoundfileSelect,
        data: SoundfileCreateInput,
    ): Partial<Soundfile> | void {
        const CreateSoundfileMutation: string = `
            mutation CreateSoundfile (
                $data: SoundfileCreateInput!,
            ) {
                createSoundfile (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateSoundfileMutation, select ), {
            data,
        } )
    }
    UpdateSoundfile (
        select: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
        data: SoundfileUpdateInput,
    ): Partial<Soundfile> | void {
        const UpdateSoundfileMutation: string = `
            mutation UpdateSoundfile (
                $where: SoundfileWhereUniqueInput!,
                $data: SoundfileUpdateInput!,
            ) {
                updateSoundfile (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateSoundfileMutation, select ), {
            where,
            data,
        } )
    }
    DeleteSoundfile (
        select: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
    ): Partial<Soundfile> | void {
        const DeleteSoundfileMutation: string = `
            mutation DeleteSoundfile (
                $where: SoundfileWhereUniqueInput!,
            ) {
                deleteSoundfile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteSoundfileMutation, select ), {
            where,
        } )
    }
    CreateTrigger (
        select: TriggerSelect,
        data: TriggerCreateInput,
    ): Partial<Trigger> | void {
        const CreateTriggerMutation: string = `
            mutation CreateTrigger (
                $data: TriggerCreateInput!,
            ) {
                createTrigger (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateTriggerMutation, select ), {
            data,
        } )
    }
    UpdateTrigger (
        select: TriggerSelect,
        where: TriggerWhereUniqueInput,
        data: TriggerUpdateInput,
    ): Partial<Trigger> | void {
        const UpdateTriggerMutation: string = `
            mutation UpdateTrigger (
                $where: TriggerWhereUniqueInput!,
                $data: TriggerUpdateInput!,
            ) {
                updateTrigger (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateTriggerMutation, select ), {
            where,
            data,
        } )
    }
    DeleteTrigger (
        select: TriggerSelect,
        where: TriggerWhereUniqueInput,
    ): Partial<Trigger> | void {
        const DeleteTriggerMutation: string = `
            mutation DeleteTrigger (
                $where: TriggerWhereUniqueInput!,
            ) {
                deleteTrigger (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteTriggerMutation, select ), {
            where,
        } )
    }
    CreateVideofile (
        select: VideofileSelect,
        data: VideofileCreateInput,
    ): Partial<Videofile> | void {
        const CreateVideofileMutation: string = `
            mutation CreateVideofile (
                $data: VideofileCreateInput!,
            ) {
                createVideofile (
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( CreateVideofileMutation, select ), {
            data,
        } )
    }
    UpdateVideofile (
        select: VideofileSelect,
        where: VideofileWhereUniqueInput,
        data: VideofileUpdateInput,
    ): Partial<Videofile> | void {
        const UpdateVideofileMutation: string = `
            mutation UpdateVideofile (
                $where: VideofileWhereUniqueInput!,
                $data: VideofileUpdateInput!,
            ) {
                updateVideofile (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( UpdateVideofileMutation, select ), {
            where,
            data,
        } )
    }
    DeleteVideofile (
        select: VideofileSelect,
        where: VideofileWhereUniqueInput,
    ): Partial<Videofile> | void {
        const DeleteVideofileMutation: string = `
            mutation DeleteVideofile (
                $where: VideofileWhereUniqueInput!,
            ) {
                deleteVideofile (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        this.doMutation( fillSelectedFields( DeleteVideofileMutation, select ), {
            where,
        } )
    }
}

export class ScalarsClient {
    private readonly queriesService: QueriesService
    private readonly mutationsService: MutationsService

    constructor() {
        this.queriesService = new QueriesService()
        this.mutationsService = new MutationsService()
    }

    get queries () {
        return this.queriesService
    }

    get mutations () {
        return this.mutationsService
    }
}

