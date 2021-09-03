import { DocumentNode } from 'graphql'
import { ApolloClient, ApolloLink, FetchPolicy, NormalizedCacheObject, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { gql } from 'graphql-tag'
import fetch from 'node-fetch'
import { config } from 'dotenv'
import { join } from 'path'

let currentEndpoint: string = 'wololo';
const prod: boolean = process.env.NODE_ENV === 'production';
const { error, parsed } = config( { path: join( process.cwd(), `${prod ? '.env.prod' : '.env.dev'}` ) } );

if ( !error && parsed && parsed.SCALARS_ENDPOINT ) {
    // Environment variables loaded successfully
    currentEndpoint = parsed.SCALARS_ENDPOINT as string;
} else {
    console.info( `ScalarsClientError: Couldn't load endpoint` );
}

// Service

interface ApolloOptions {
    fetchPolicy?: FetchPolicy
}

export enum ClientType {
    CLIENT = 'explicit', // THIS WILL REPLACE IMPLICIT
    COOKIE = 'cookie', // THIS WILL REPLACE CODE
}

export interface ClientOptions {
    client?: ClientType
    apolloOptions?: ApolloOptions
}

interface MutationApolloOptions {
    fetchPolicy?: Extract<FetchPolicy, 'no-cache'>
}

export interface MutationClientOptions {
    client?: ClientType
    auth?: boolean
    apolloOptions?: MutationApolloOptions
}

export class Service {
    private readonly scalarsApiClientManager: ScalarsClientManager

    constructor ( config: ScalarsClientConfig ) {
        this.scalarsApiClientManager = new ScalarsClientManager(
            `${currentEndpoint}/api/v1`,
            config.authorization
        )
    }

    async doQuery<T, U> (
        query: DocumentNode,
        variables?: U,
        clientOptions?: ClientOptions
    ): Promise<T> {
        const client: ApolloClient<NormalizedCacheObject> = this.scalarsApiClientManager.getClient( clientOptions?.client )
        try {
            const response = await client.query( {
                fetchPolicy: 'network-only',
                query,
                variables,
                ...clientOptions?.apolloOptions
            } )
            return Service.getResponse<T>( response as any )
        }
        catch ( error ) {
            return Service.getResponse<T>( { error } as any );
        }
    }

    async doMutation<T, U> (
       mutation: DocumentNode,
        variables?: U,
        clientOptions?: MutationClientOptions
    ): Promise<T> {
        const client: ApolloClient<NormalizedCacheObject> = this.scalarsApiClientManager.getClient( clientOptions?.client )
        try {
            const response = await client.mutate( {
                mutation,
                variables,
                ...clientOptions?.apolloOptions
            } )
            return Service.getResponse<T>( response as any )
        }
        catch ( error ) {
            return Service.getResponse<T>( { error } as any );
        }
    }

    private static getResponse<T> ( { data, error }: { data: T, error: T } ): T {
        if ( data ) {
            return data;
        }
        throw error;
    }
}

// DefaultServices

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO-8601 encoded UTC date string */
  DateTime: any;
  /** Email format */
  Email: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Json` scalar type represents Json values. */
  Json: any;
  /** Formats from Phone number or mobile number. This data type accept digits with a standard, 7 digits for phone and 11 - 13 digits for mobile number. */
  Phone: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** Url format */
  Url: any;
};





export enum Accesstype {
  List = 'LIST',
  All = 'ALL',
  Private = 'PRIVATE'
}

export enum Actiontype {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE'
}

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  answerArray?: Maybe<Scalars['Json']>;
  identifier?: Maybe<Registration>;
};

export type AnswerConnection = {
  __typename?: 'AnswerConnection';
  totalCount: Scalars['Int'];
};

export type AnswerCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  answerArray?: Maybe<Scalars['Json']>;
  identifier?: Maybe<RegistrationCreateOneInput>;
};

export type AnswerOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  answerArray?: Maybe<OrderByEnum>;
};

export type AnswerUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  answerArray?: Maybe<Scalars['Json']>;
  identifier?: Maybe<RegistrationUpdateOneInput>;
};

export type AnswerWhereInput = {
  OR?: Maybe<Array<AnswerWhereInput>>;
  AND?: Maybe<Array<AnswerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  answerArray_object?: Maybe<Scalars['Json']>;
  identifier?: Maybe<RegistrationWhereInput>;
};

export type AnswerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Appclient = {
  __typename?: 'Appclient';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id: Scalars['String'];
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions: Array<Datapermission>;
  domains?: Maybe<Array<Scalars['String']>>;
  grant_type?: Maybe<Granttype>;
  name: Scalars['String'];
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<Array<Scalars['String']>>;
  scopes?: Maybe<Array<Clientscope>>;
  userPool?: Maybe<Scalars['Json']>;
};


export type AppclientDatapermissionsArgs = {
  orderBy?: Maybe<DatapermissionOrderInput>;
  where?: Maybe<DatapermissionWhereInput>;
};

export type AppclientConnection = {
  __typename?: 'AppclientConnection';
  totalCount: Scalars['Int'];
};

export type AppclientCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<DatapermissionCreateManyWithoutAppclientInput>;
  domains?: Maybe<StringListFieldCreateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<StringListFieldCreateInput>;
  scopes?: Maybe<ClientscopeListFieldCreateInput>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientCreateOneInput = {
  create?: Maybe<AppclientCreateInput>;
  connect?: Maybe<AppclientWhereUniqueInput>;
};

export type AppclientOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  client_id?: Maybe<OrderByEnum>;
  client_secret?: Maybe<OrderByEnum>;
  client_type?: Maybe<OrderByEnum>;
  domains?: Maybe<OrderByEnum>;
  grant_type?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  permissions?: Maybe<OrderByEnum>;
  providers?: Maybe<OrderByEnum>;
  redirect_uri?: Maybe<OrderByEnum>;
  scopes?: Maybe<OrderByEnum>;
  userPool?: Maybe<OrderByEnum>;
};

export type AppclientUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<DatapermissionUpdateManyWithoutAppclientInput>;
  domains?: Maybe<StringListFieldUpdateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<StringListFieldUpdateInput>;
  scopes?: Maybe<ClientscopeListFieldUpdateInput>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientUpdateOneInput = {
  create?: Maybe<AppclientCreateInput>;
  connect?: Maybe<AppclientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AppclientWhereInput = {
  OR?: Maybe<Array<AppclientWhereInput>>;
  AND?: Maybe<Array<AppclientWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  client_id?: Maybe<Scalars['String']>;
  client_id_eq?: Maybe<Scalars['String']>;
  client_id_neq?: Maybe<Scalars['String']>;
  client_id_contains?: Maybe<Scalars['String']>;
  client_id_notcontains?: Maybe<Scalars['String']>;
  client_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  client_secret?: Maybe<Scalars['String']>;
  client_secret_eq?: Maybe<Scalars['String']>;
  client_secret_neq?: Maybe<Scalars['String']>;
  client_secret_contains?: Maybe<Scalars['String']>;
  client_secret_notcontains?: Maybe<Scalars['String']>;
  client_secret_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  client_type?: Maybe<Clienttype>;
  client_type_eq?: Maybe<Clienttype>;
  client_type_neq?: Maybe<Clienttype>;
  client_type_contains?: Maybe<Scalars['String']>;
  client_type_notcontains?: Maybe<Scalars['String']>;
  datapermissions?: Maybe<FilterDatapermission>;
  domains?: Maybe<FilterScalarStringList>;
  grant_type?: Maybe<Granttype>;
  grant_type_eq?: Maybe<Granttype>;
  grant_type_neq?: Maybe<Granttype>;
  grant_type_contains?: Maybe<Scalars['String']>;
  grant_type_notcontains?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissions_object?: Maybe<Scalars['Json']>;
  providers_object?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<FilterScalarStringList>;
  scopes?: Maybe<FilterScalarClientscopeList>;
  userPool_object?: Maybe<Scalars['Json']>;
};

export type AppclientWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  client_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Assetsconfig = {
  __typename?: 'Assetsconfig';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes: Array<Mimetype>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes: Array<Mimetype>;
  name?: Maybe<Scalars['String']>;
};


export type AssetsconfigCompatibleMimesArgs = {
  orderBy?: Maybe<MimetypeOrderInput>;
  where?: Maybe<MimetypeWhereInput>;
};


export type AssetsconfigMimeTypesArgs = {
  orderBy?: Maybe<MimetypeOrderInput>;
  where?: Maybe<MimetypeWhereInput>;
};

export type AssetsconfigConnection = {
  __typename?: 'AssetsconfigConnection';
  totalCount: Scalars['Int'];
};

export type AssetsconfigCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes?: Maybe<MimetypeCreateManyInput>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes?: Maybe<MimetypeCreateManyInput>;
  name?: Maybe<Scalars['String']>;
};

export type AssetsconfigCreateOneInput = {
  create?: Maybe<AssetsconfigCreateInput>;
  connect?: Maybe<AssetsconfigWhereUniqueInput>;
};

export type AssetsconfigOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  compress?: Maybe<OrderByEnum>;
  compressPercentage?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  label?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
};

export type AssetsconfigUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compatibleMimes?: Maybe<MimetypeUpdateManyInput>;
  compress?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeTypes?: Maybe<MimetypeUpdateManyInput>;
  name?: Maybe<Scalars['String']>;
};

export type AssetsconfigUpdateOneInput = {
  create?: Maybe<AssetsconfigCreateInput>;
  connect?: Maybe<AssetsconfigWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetsconfigWhereInput = {
  OR?: Maybe<Array<AssetsconfigWhereInput>>;
  AND?: Maybe<Array<AssetsconfigWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  compatibleMimes?: Maybe<FilterMimetype>;
  compress?: Maybe<Scalars['Boolean']>;
  compress_eq?: Maybe<Scalars['Boolean']>;
  compress_neq?: Maybe<Scalars['Boolean']>;
  compressPercentage?: Maybe<Scalars['Float']>;
  compressPercentage_eq?: Maybe<Scalars['Float']>;
  compressPercentage_neq?: Maybe<Scalars['Float']>;
  compressPercentage_gt?: Maybe<Scalars['Float']>;
  compressPercentage_gte?: Maybe<Scalars['Float']>;
  compressPercentage_lt?: Maybe<Scalars['Float']>;
  compressPercentage_lte?: Maybe<Scalars['Float']>;
  compressPercentage_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  compressPercentage_between?: Maybe<BetweenFilterFloat>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label?: Maybe<Scalars['String']>;
  label_eq?: Maybe<Scalars['String']>;
  label_neq?: Maybe<Scalars['String']>;
  label_contains?: Maybe<Scalars['String']>;
  label_notcontains?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  mimeTypes?: Maybe<FilterMimetype>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetsconfigWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Authcodegrant = {
  __typename?: 'Authcodegrant';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<Appclient>;
  code: Scalars['String'];
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<Authuser>;
};

export type AuthcodegrantConnection = {
  __typename?: 'AuthcodegrantConnection';
  totalCount: Scalars['Int'];
};

export type AuthcodegrantCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<AppclientCreateOneInput>;
  code?: Maybe<Scalars['String']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<AuthuserCreateOneInput>;
};

export type AuthcodegrantOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  code?: Maybe<OrderByEnum>;
  cognitoIdToken?: Maybe<OrderByEnum>;
  redirectUri?: Maybe<OrderByEnum>;
};

export type AuthcodegrantUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client?: Maybe<AppclientUpdateOneInput>;
  code?: Maybe<Scalars['String']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  redirectUri?: Maybe<Scalars['String']>;
  user?: Maybe<AuthuserUpdateOneInput>;
};

export type AuthcodegrantWhereInput = {
  OR?: Maybe<Array<AuthcodegrantWhereInput>>;
  AND?: Maybe<Array<AuthcodegrantWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  client?: Maybe<AppclientWhereInput>;
  code?: Maybe<Scalars['String']>;
  code_eq?: Maybe<Scalars['String']>;
  code_neq?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_notcontains?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  cognitoIdToken_eq?: Maybe<Scalars['String']>;
  cognitoIdToken_neq?: Maybe<Scalars['String']>;
  cognitoIdToken_contains?: Maybe<Scalars['String']>;
  cognitoIdToken_notcontains?: Maybe<Scalars['String']>;
  cognitoIdToken_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  redirectUri?: Maybe<Scalars['String']>;
  redirectUri_eq?: Maybe<Scalars['String']>;
  redirectUri_neq?: Maybe<Scalars['String']>;
  redirectUri_contains?: Maybe<Scalars['String']>;
  redirectUri_notcontains?: Maybe<Scalars['String']>;
  redirectUri_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<AuthuserWhereInput>;
};

export type AuthcodegrantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
};

export type Authrole = {
  __typename?: 'Authrole';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers: Array<Authuser>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions: Array<Datapermission>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  scopes?: Maybe<Array<Rolescope>>;
  users: Array<Authuser>;
};


export type AuthroleAuthusersArgs = {
  orderBy?: Maybe<AuthuserOrderInput>;
  where?: Maybe<AuthuserWhereInput>;
};


export type AuthroleDatapermissionsArgs = {
  orderBy?: Maybe<DatapermissionOrderInput>;
  where?: Maybe<DatapermissionWhereInput>;
};


export type AuthroleUsersArgs = {
  orderBy?: Maybe<AuthuserOrderInput>;
  where?: Maybe<AuthuserWhereInput>;
};

export type AuthroleConnection = {
  __typename?: 'AuthroleConnection';
  totalCount: Scalars['Int'];
};

export type AuthroleCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserCreateManyWithoutAuthroleInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionCreateManyWithoutAuthroleInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  scopes?: Maybe<RolescopeListFieldCreateInput>;
  users?: Maybe<AuthuserCreateManyWithoutRolesInput>;
};

export type AuthroleCreateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<AuthroleCreateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<AuthroleWhereUniqueInput>>>;
};

export type AuthroleCreateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
};

export type AuthroleCreateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserCreateManyInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionCreateManyInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  scopes?: Maybe<RolescopeListFieldCreateInput>;
};

export type AuthroleOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  createAt?: Maybe<OrderByEnum>;
  default?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  permissions?: Maybe<OrderByEnum>;
  updateAt?: Maybe<OrderByEnum>;
  scopes?: Maybe<OrderByEnum>;
};

export type AuthroleUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserUpdateManyWithoutAuthroleInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionUpdateManyWithoutAuthroleInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  scopes?: Maybe<RolescopeListFieldUpdateInput>;
  users?: Maybe<AuthuserUpdateManyWithoutRolesInput>;
};

export type AuthroleUpdateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<AuthroleUpdateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<AuthroleWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthroleWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthroleWhereUniqueInput>>>;
};

export type AuthroleUpdateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthroleUpdateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authusers?: Maybe<AuthuserUpdateManyInput>;
  createAt?: Maybe<Scalars['DateTime']>;
  datapermissions?: Maybe<DatapermissionUpdateManyInput>;
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  scopes?: Maybe<RolescopeListFieldUpdateInput>;
};

export type AuthroleWhereInput = {
  OR?: Maybe<Array<AuthroleWhereInput>>;
  AND?: Maybe<Array<AuthroleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authusers?: Maybe<FilterAuthuser>;
  createAt?: Maybe<Scalars['DateTime']>;
  createAt_eq?: Maybe<Scalars['DateTime']>;
  createAt_neq?: Maybe<Scalars['DateTime']>;
  createAt_gt?: Maybe<Scalars['DateTime']>;
  createAt_gte?: Maybe<Scalars['DateTime']>;
  createAt_lt?: Maybe<Scalars['DateTime']>;
  createAt_lte?: Maybe<Scalars['DateTime']>;
  createAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createAt_between?: Maybe<BetweenFilterDateTime>;
  datapermissions?: Maybe<FilterDatapermission>;
  default?: Maybe<Scalars['Boolean']>;
  default_eq?: Maybe<Scalars['Boolean']>;
  default_neq?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissions_object?: Maybe<Scalars['Json']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  updateAt_eq?: Maybe<Scalars['DateTime']>;
  updateAt_neq?: Maybe<Scalars['DateTime']>;
  updateAt_gt?: Maybe<Scalars['DateTime']>;
  updateAt_gte?: Maybe<Scalars['DateTime']>;
  updateAt_lt?: Maybe<Scalars['DateTime']>;
  updateAt_lte?: Maybe<Scalars['DateTime']>;
  updateAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updateAt_between?: Maybe<BetweenFilterDateTime>;
  scopes?: Maybe<FilterScalarRolescopeList>;
  users?: Maybe<FilterAuthuser>;
};

export type AuthroleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Authsession = {
  __typename?: 'Authsession';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser: Authuser;
  cognitoIdToken: Scalars['String'];
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId: Scalars['String'];
  userAgent?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
};

export type AuthsessionConnection = {
  __typename?: 'AuthsessionConnection';
  totalCount: Scalars['Int'];
};

export type AuthsessionCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser?: Maybe<AuthuserCreateOneInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
};

export type AuthsessionCreateManyInput = {
  create?: Maybe<Array<Maybe<AuthsessionCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionCreateManyWithoutAuthuserInput = {
  create?: Maybe<Array<Maybe<AuthsessionCreateWithoutAuthuserInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionCreateWithoutAuthuserInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
};

export type AuthsessionOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  cognitoIdToken?: Maybe<OrderByEnum>;
  expiresIn?: Maybe<OrderByEnum>;
  fromUrl?: Maybe<OrderByEnum>;
  interchanges?: Maybe<OrderByEnum>;
  ipAgent?: Maybe<OrderByEnum>;
  sessionId?: Maybe<OrderByEnum>;
  userAgent?: Maybe<OrderByEnum>;
  appId?: Maybe<OrderByEnum>;
};

export type AuthsessionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authuser?: Maybe<AuthuserUpdateOneInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
};

export type AuthsessionUpdateManyInput = {
  create?: Maybe<Array<Maybe<AuthsessionCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionUpdateManyWithoutAuthuserInput = {
  create?: Maybe<Array<Maybe<AuthsessionUpdateWithoutAuthuserInput>>>;
  connect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthsessionWhereUniqueInput>>>;
};

export type AuthsessionUpdateWithoutAuthuserInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  fromUrl?: Maybe<Scalars['String']>;
  interchanges?: Maybe<Scalars['String']>;
  ipAgent?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
};

export type AuthsessionWhereInput = {
  OR?: Maybe<Array<AuthsessionWhereInput>>;
  AND?: Maybe<Array<AuthsessionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authuser?: Maybe<AuthuserWhereInput>;
  cognitoIdToken?: Maybe<Scalars['String']>;
  cognitoIdToken_eq?: Maybe<Scalars['String']>;
  cognitoIdToken_neq?: Maybe<Scalars['String']>;
  cognitoIdToken_contains?: Maybe<Scalars['String']>;
  cognitoIdToken_notcontains?: Maybe<Scalars['String']>;
  cognitoIdToken_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  expiresIn_eq?: Maybe<Scalars['DateTime']>;
  expiresIn_neq?: Maybe<Scalars['DateTime']>;
  expiresIn_gt?: Maybe<Scalars['DateTime']>;
  expiresIn_gte?: Maybe<Scalars['DateTime']>;
  expiresIn_lt?: Maybe<Scalars['DateTime']>;
  expiresIn_lte?: Maybe<Scalars['DateTime']>;
  expiresIn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  expiresIn_between?: Maybe<BetweenFilterDateTime>;
  fromUrl?: Maybe<Scalars['String']>;
  fromUrl_eq?: Maybe<Scalars['String']>;
  fromUrl_neq?: Maybe<Scalars['String']>;
  fromUrl_contains?: Maybe<Scalars['String']>;
  fromUrl_notcontains?: Maybe<Scalars['String']>;
  fromUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  interchanges?: Maybe<Scalars['String']>;
  interchanges_eq?: Maybe<Scalars['String']>;
  interchanges_neq?: Maybe<Scalars['String']>;
  interchanges_contains?: Maybe<Scalars['String']>;
  interchanges_notcontains?: Maybe<Scalars['String']>;
  interchanges_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ipAgent?: Maybe<Scalars['String']>;
  ipAgent_eq?: Maybe<Scalars['String']>;
  ipAgent_neq?: Maybe<Scalars['String']>;
  ipAgent_contains?: Maybe<Scalars['String']>;
  ipAgent_notcontains?: Maybe<Scalars['String']>;
  ipAgent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sessionId?: Maybe<Scalars['String']>;
  sessionId_eq?: Maybe<Scalars['String']>;
  sessionId_neq?: Maybe<Scalars['String']>;
  sessionId_contains?: Maybe<Scalars['String']>;
  sessionId_notcontains?: Maybe<Scalars['String']>;
  sessionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userAgent?: Maybe<Scalars['String']>;
  userAgent_eq?: Maybe<Scalars['String']>;
  userAgent_neq?: Maybe<Scalars['String']>;
  userAgent_contains?: Maybe<Scalars['String']>;
  userAgent_notcontains?: Maybe<Scalars['String']>;
  userAgent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  appId?: Maybe<Scalars['String']>;
  appId_eq?: Maybe<Scalars['String']>;
  appId_neq?: Maybe<Scalars['String']>;
  appId_contains?: Maybe<Scalars['String']>;
  appId_notcontains?: Maybe<Scalars['String']>;
  appId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthsessionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  sessionId?: Maybe<Scalars['String']>;
};

export type Authuser = {
  __typename?: 'Authuser';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<Authrole>;
  email: Scalars['Email'];
  isRoot?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  sessions: Array<Authsession>;
  sub: Scalars['String'];
  username: Scalars['String'];
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
  roles: Array<Authrole>;
};


export type AuthuserSessionsArgs = {
  orderBy?: Maybe<AuthsessionOrderInput>;
  where?: Maybe<AuthsessionWhereInput>;
};


export type AuthuserRolesArgs = {
  orderBy?: Maybe<AuthroleOrderInput>;
  where?: Maybe<AuthroleWhereInput>;
};

export type AuthuserConnection = {
  __typename?: 'AuthuserConnection';
  totalCount: Scalars['Int'];
};

export type AuthuserCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionCreateManyWithoutAuthuserInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
  roles?: Maybe<AuthroleCreateManyWithoutUsersInput>;
};

export type AuthuserCreateManyInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserCreateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateWithoutAuthroleInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserCreateManyWithoutRolesInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateWithoutRolesInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserCreateOneInput = {
  create?: Maybe<AuthuserCreateInput>;
  connect?: Maybe<AuthuserWhereUniqueInput>;
};

export type AuthuserCreateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionCreateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
  roles?: Maybe<AuthroleCreateManyWithoutUsersInput>;
};

export type AuthuserCreateWithoutRolesInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionCreateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
};

export type AuthuserOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  email?: Maybe<OrderByEnum>;
  isRoot?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  sub?: Maybe<OrderByEnum>;
  username?: Maybe<OrderByEnum>;
  notificationConfig?: Maybe<OrderByEnum>;
  subscriptionConfig?: Maybe<OrderByEnum>;
};

export type AuthuserUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionUpdateManyWithoutAuthuserInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
  roles?: Maybe<AuthroleUpdateManyWithoutUsersInput>;
};

export type AuthuserUpdateManyInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserUpdateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<AuthuserUpdateWithoutAuthroleInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserUpdateManyWithoutRolesInput = {
  create?: Maybe<Array<Maybe<AuthuserUpdateWithoutRolesInput>>>;
  connect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<AuthuserWhereUniqueInput>>>;
};

export type AuthuserUpdateOneInput = {
  create?: Maybe<AuthuserCreateInput>;
  connect?: Maybe<AuthuserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthuserUpdateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionUpdateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
  roles?: Maybe<AuthroleUpdateManyWithoutUsersInput>;
};

export type AuthuserUpdateWithoutRolesInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  email?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<AuthsessionUpdateManyInput>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  notificationConfig?: Maybe<Scalars['Json']>;
  subscriptionConfig?: Maybe<Scalars['Json']>;
};

export type AuthuserWhereInput = {
  OR?: Maybe<Array<AuthuserWhereInput>>;
  AND?: Maybe<Array<AuthuserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  authrole?: Maybe<AuthroleWhereInput>;
  email?: Maybe<Scalars['Email']>;
  email_eq?: Maybe<Scalars['Email']>;
  email_neq?: Maybe<Scalars['Email']>;
  email_contains?: Maybe<Scalars['Email']>;
  email_notcontains?: Maybe<Scalars['Email']>;
  isRoot?: Maybe<Scalars['Boolean']>;
  isRoot_eq?: Maybe<Scalars['Boolean']>;
  isRoot_neq?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sessions?: Maybe<FilterAuthsession>;
  sub?: Maybe<Scalars['String']>;
  sub_eq?: Maybe<Scalars['String']>;
  sub_neq?: Maybe<Scalars['String']>;
  sub_contains?: Maybe<Scalars['String']>;
  sub_notcontains?: Maybe<Scalars['String']>;
  sub_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  username?: Maybe<Scalars['String']>;
  username_eq?: Maybe<Scalars['String']>;
  username_neq?: Maybe<Scalars['String']>;
  username_contains?: Maybe<Scalars['String']>;
  username_notcontains?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notificationConfig_object?: Maybe<Scalars['Json']>;
  subscriptionConfig_object?: Maybe<Scalars['Json']>;
  roles?: Maybe<FilterAuthrole>;
};

export type AuthuserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['Email']>;
  name?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type BetweenFilterDateTime = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};

export type BetweenFilterFloat = {
  from?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['Float']>;
};

export type BetweenFilterInt = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users: Array<Profile>;
  messages: Array<Message>;
  type?: Maybe<Chattype>;
  project?: Maybe<Project>;
};


export type ChatUsersArgs = {
  orderBy?: Maybe<ProfileOrderInput>;
  where?: Maybe<ProfileWhereInput>;
};


export type ChatMessagesArgs = {
  orderBy?: Maybe<MessageOrderInput>;
  where?: Maybe<MessageWhereInput>;
};

export type ChatConnection = {
  __typename?: 'ChatConnection';
  totalCount: Scalars['Int'];
};

export type ChatCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<ProfileCreateManyWithoutProfile_UsersfromchatfkInput>;
  messages?: Maybe<MessageCreateManyWithoutChatInput>;
  type?: Maybe<Chattype>;
  project?: Maybe<ProjectCreateOneWithoutChatInput>;
};

export type ChatCreateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<ChatCreateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<ChatWhereUniqueInput>>>;
};

export type ChatCreateOneInput = {
  create?: Maybe<ChatCreateInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
};

export type ChatCreateOneWithoutProjectInput = {
  create?: Maybe<ChatCreateWithoutProjectInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
};

export type ChatCreateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<ProfileCreateManyWithoutProfile_UsersfromchatfkInput>;
  messages?: Maybe<MessageCreateManyInput>;
  type?: Maybe<Chattype>;
};

export type ChatCreateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageCreateManyInput>;
  type?: Maybe<Chattype>;
  project?: Maybe<ProjectCreateOneInput>;
};

export type ChatOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  type?: Maybe<OrderByEnum>;
};

export type ChatUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<ProfileUpdateManyWithoutProfile_UsersfromchatfkInput>;
  messages?: Maybe<MessageUpdateManyWithoutChatInput>;
  type?: Maybe<Chattype>;
  project?: Maybe<ProjectUpdateOneWithoutChatInput>;
};

export type ChatUpdateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<ChatUpdateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<ChatWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ChatWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ChatWhereUniqueInput>>>;
};

export type ChatUpdateOneInput = {
  create?: Maybe<ChatCreateInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ChatUpdateOneWithoutProjectInput = {
  create?: Maybe<ChatUpdateWithoutProjectInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ChatUpdateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<ProfileUpdateManyWithoutProfile_UsersfromchatfkInput>;
  messages?: Maybe<MessageUpdateManyInput>;
  type?: Maybe<Chattype>;
};

export type ChatUpdateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageUpdateManyInput>;
  type?: Maybe<Chattype>;
  project?: Maybe<ProjectUpdateOneInput>;
};

export type ChatWhereInput = {
  OR?: Maybe<Array<ChatWhereInput>>;
  AND?: Maybe<Array<ChatWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  users?: Maybe<FilterProfile>;
  messages?: Maybe<FilterMessage>;
  type?: Maybe<Chattype>;
  type_eq?: Maybe<Chattype>;
  type_neq?: Maybe<Chattype>;
  type_contains?: Maybe<Scalars['String']>;
  type_notcontains?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectWhereInput>;
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum Chattype {
  Private = 'PRIVATE',
  Group = 'GROUP'
}

export enum Clientscope {
  Registration = 'REGISTRATION',
  Login = 'LOGIN',
  Upload = 'UPLOAD'
}

export type ClientscopeListFieldCreateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
};

export type ClientscopeListFieldUpdateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
  add?: Maybe<Array<Maybe<Clientscope>>>;
  remove?: Maybe<Array<Maybe<Clientscope>>>;
};

export enum Clienttype {
  Public = 'PUBLIC',
  Confidential = 'CONFIDENTIAL'
}

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Profile>;
  text?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  totalCount: Scalars['Int'];
};

export type CommentCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<ProfileCreateOneInput>;
  text?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectCreateOneInput>;
};

export type CommentCreateManyInput = {
  create?: Maybe<Array<Maybe<CommentCreateInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
};

export type CommentCreateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<CommentCreateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
};

export type CommentCreateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<ProfileCreateOneInput>;
  text?: Maybe<Scalars['String']>;
};

export type CommentOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  text?: Maybe<OrderByEnum>;
};

export type CommentUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<ProfileUpdateOneInput>;
  text?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneInput>;
};

export type CommentUpdateManyInput = {
  create?: Maybe<Array<Maybe<CommentCreateInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
};

export type CommentUpdateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<CommentUpdateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
};

export type CommentUpdateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<ProfileUpdateOneInput>;
  text?: Maybe<Scalars['String']>;
};

export type CommentWhereInput = {
  OR?: Maybe<Array<CommentWhereInput>>;
  AND?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  author?: Maybe<ProfileWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_neq?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_notcontains?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  project?: Maybe<ProjectWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Connection = {
  __typename?: 'Connection';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<Profile>;
  receiver?: Maybe<Profile>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionConnection = {
  __typename?: 'ConnectionConnection';
  totalCount: Scalars['Int'];
};

export type ConnectionCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileCreateOneInput>;
  receiver?: Maybe<ProfileCreateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionCreateManyInput = {
  create?: Maybe<Array<Maybe<ConnectionCreateInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionCreateManyWithoutReceiverInput = {
  create?: Maybe<Array<Maybe<ConnectionCreateWithoutReceiverInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionCreateManyWithoutSenderInput = {
  create?: Maybe<Array<Maybe<ConnectionCreateWithoutSenderInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionCreateWithoutReceiverInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileCreateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionCreateWithoutSenderInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  receiver?: Maybe<ProfileCreateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  status?: Maybe<OrderByEnum>;
};

export type ConnectionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileUpdateOneInput>;
  receiver?: Maybe<ProfileUpdateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionUpdateManyInput = {
  create?: Maybe<Array<Maybe<ConnectionCreateInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionUpdateManyWithoutReceiverInput = {
  create?: Maybe<Array<Maybe<ConnectionUpdateWithoutReceiverInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionUpdateManyWithoutSenderInput = {
  create?: Maybe<Array<Maybe<ConnectionUpdateWithoutSenderInput>>>;
  connect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ConnectionWhereUniqueInput>>>;
};

export type ConnectionUpdateWithoutReceiverInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileUpdateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionUpdateWithoutSenderInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  receiver?: Maybe<ProfileUpdateOneInput>;
  status?: Maybe<Statusconnection>;
};

export type ConnectionWhereInput = {
  OR?: Maybe<Array<ConnectionWhereInput>>;
  AND?: Maybe<Array<ConnectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  sender?: Maybe<ProfileWhereInput>;
  receiver?: Maybe<ProfileWhereInput>;
  status?: Maybe<Statusconnection>;
  status_eq?: Maybe<Statusconnection>;
  status_neq?: Maybe<Statusconnection>;
  status_contains?: Maybe<Scalars['String']>;
  status_notcontains?: Maybe<Scalars['String']>;
};

export type ConnectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Datapermission = {
  __typename?: 'Datapermission';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action: Actiontype;
  appclient?: Maybe<Appclient>;
  attributes?: Maybe<Array<Scalars['Json']>>;
  authrole?: Maybe<Authrole>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<Array<Scalars['Json']>>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<Array<Scalars['String']>>;
};

export type DatapermissionConnection = {
  __typename?: 'DatapermissionConnection';
  totalCount: Scalars['Int'];
};

export type DatapermissionCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientCreateOneInput>;
  attributes?: Maybe<JsonListFieldCreateInput>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldCreateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldCreateInput>;
};

export type DatapermissionCreateManyInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionCreateManyWithoutAppclientInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateWithoutAppclientInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionCreateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateWithoutAuthroleInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionCreateWithoutAppclientInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  attributes?: Maybe<JsonListFieldCreateInput>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldCreateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldCreateInput>;
};

export type DatapermissionCreateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientCreateOneInput>;
  attributes?: Maybe<JsonListFieldCreateInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldCreateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldCreateInput>;
};

export type DatapermissionOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  action?: Maybe<OrderByEnum>;
  attributes?: Maybe<OrderByEnum>;
  entity?: Maybe<OrderByEnum>;
  private?: Maybe<OrderByEnum>;
  str?: Maybe<OrderByEnum>;
  access?: Maybe<OrderByEnum>;
  constraints?: Maybe<OrderByEnum>;
  resourcesOwner?: Maybe<OrderByEnum>;
  resources?: Maybe<OrderByEnum>;
};

export type DatapermissionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientUpdateOneInput>;
  attributes?: Maybe<JsonListFieldUpdateInput>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldUpdateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldUpdateInput>;
};

export type DatapermissionUpdateManyInput = {
  create?: Maybe<Array<Maybe<DatapermissionCreateInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionUpdateManyWithoutAppclientInput = {
  create?: Maybe<Array<Maybe<DatapermissionUpdateWithoutAppclientInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionUpdateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<DatapermissionUpdateWithoutAuthroleInput>>>;
  connect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<DatapermissionWhereUniqueInput>>>;
};

export type DatapermissionUpdateWithoutAppclientInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  attributes?: Maybe<JsonListFieldUpdateInput>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldUpdateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldUpdateInput>;
};

export type DatapermissionUpdateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientUpdateOneInput>;
  attributes?: Maybe<JsonListFieldUpdateInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  access?: Maybe<Accesstype>;
  constraints?: Maybe<JsonListFieldUpdateInput>;
  resourcesOwner?: Maybe<Scalars['Json']>;
  resources?: Maybe<StringListFieldUpdateInput>;
};

export type DatapermissionWhereInput = {
  OR?: Maybe<Array<DatapermissionWhereInput>>;
  AND?: Maybe<Array<DatapermissionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  action?: Maybe<Actiontype>;
  action_eq?: Maybe<Actiontype>;
  action_neq?: Maybe<Actiontype>;
  action_contains?: Maybe<Scalars['String']>;
  action_notcontains?: Maybe<Scalars['String']>;
  appclient?: Maybe<AppclientWhereInput>;
  attributes?: Maybe<FilterScalarJsonList>;
  authrole?: Maybe<AuthroleWhereInput>;
  entity?: Maybe<Scalars['String']>;
  entity_eq?: Maybe<Scalars['String']>;
  entity_neq?: Maybe<Scalars['String']>;
  entity_contains?: Maybe<Scalars['String']>;
  entity_notcontains?: Maybe<Scalars['String']>;
  entity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  private_object?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
  str_eq?: Maybe<Scalars['String']>;
  str_neq?: Maybe<Scalars['String']>;
  str_contains?: Maybe<Scalars['String']>;
  str_notcontains?: Maybe<Scalars['String']>;
  str_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  access?: Maybe<Accesstype>;
  access_eq?: Maybe<Accesstype>;
  access_neq?: Maybe<Accesstype>;
  access_contains?: Maybe<Scalars['String']>;
  access_notcontains?: Maybe<Scalars['String']>;
  constraints?: Maybe<FilterScalarJsonList>;
  resourcesOwner_object?: Maybe<Scalars['Json']>;
  resources?: Maybe<FilterScalarStringList>;
};

export type DatapermissionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Documentfile = {
  __typename?: 'Documentfile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileConnection = {
  __typename?: 'DocumentfileConnection';
  totalCount: Scalars['Int'];
};

export type DocumentfileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type DocumentfileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type DocumentfileWhereInput = {
  OR?: Maybe<Array<DocumentfileWhereInput>>;
  AND?: Maybe<Array<DocumentfileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metainfo_object?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type DocumentfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Faq = {
  __typename?: 'Faq';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type FaqConnection = {
  __typename?: 'FaqConnection';
  totalCount: Scalars['Int'];
};

export type FaqCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type FaqOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  question?: Maybe<OrderByEnum>;
  answer?: Maybe<OrderByEnum>;
};

export type FaqUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type FaqWhereInput = {
  OR?: Maybe<Array<FaqWhereInput>>;
  AND?: Maybe<Array<FaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  question?: Maybe<Scalars['String']>;
  question_eq?: Maybe<Scalars['String']>;
  question_neq?: Maybe<Scalars['String']>;
  question_contains?: Maybe<Scalars['String']>;
  question_notcontains?: Maybe<Scalars['String']>;
  question_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  answer?: Maybe<Scalars['String']>;
  answer_eq?: Maybe<Scalars['String']>;
  answer_neq?: Maybe<Scalars['String']>;
  answer_contains?: Maybe<Scalars['String']>;
  answer_notcontains?: Maybe<Scalars['String']>;
  answer_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FilterAuthrole = {
  some?: Maybe<AuthroleWhereInput>;
  every?: Maybe<AuthroleWhereInput>;
  none?: Maybe<AuthroleWhereInput>;
};

export type FilterAuthsession = {
  some?: Maybe<AuthsessionWhereInput>;
  every?: Maybe<AuthsessionWhereInput>;
  none?: Maybe<AuthsessionWhereInput>;
};

export type FilterAuthuser = {
  some?: Maybe<AuthuserWhereInput>;
  every?: Maybe<AuthuserWhereInput>;
  none?: Maybe<AuthuserWhereInput>;
};

export type FilterChat = {
  some?: Maybe<ChatWhereInput>;
  every?: Maybe<ChatWhereInput>;
  none?: Maybe<ChatWhereInput>;
};

export type FilterComment = {
  some?: Maybe<CommentWhereInput>;
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type FilterConnection = {
  some?: Maybe<ConnectionWhereInput>;
  every?: Maybe<ConnectionWhereInput>;
  none?: Maybe<ConnectionWhereInput>;
};

export type FilterDatapermission = {
  some?: Maybe<DatapermissionWhereInput>;
  every?: Maybe<DatapermissionWhereInput>;
  none?: Maybe<DatapermissionWhereInput>;
};

export type FilterMessage = {
  some?: Maybe<MessageWhereInput>;
  every?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
};

export type FilterMimetype = {
  some?: Maybe<MimetypeWhereInput>;
  every?: Maybe<MimetypeWhereInput>;
  none?: Maybe<MimetypeWhereInput>;
};

export type FilterProfile = {
  some?: Maybe<ProfileWhereInput>;
  every?: Maybe<ProfileWhereInput>;
  none?: Maybe<ProfileWhereInput>;
};

export type FilterProject = {
  some?: Maybe<ProjectWhereInput>;
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
};

export type FilterRequest = {
  some?: Maybe<RequestWhereInput>;
  every?: Maybe<RequestWhereInput>;
  none?: Maybe<RequestWhereInput>;
};

export type FilterScalarClientscopeList = {
  has?: Maybe<Array<Clientscope>>;
  hasNot?: Maybe<Array<Clientscope>>;
};

export type FilterScalarJsonList = {
  has?: Maybe<Array<Scalars['Json']>>;
  hasNot?: Maybe<Array<Scalars['Json']>>;
};

export type FilterScalarNotificationactiontypeList = {
  has?: Maybe<Array<Notificationactiontype>>;
  hasNot?: Maybe<Array<Notificationactiontype>>;
};

export type FilterScalarRolescopeList = {
  has?: Maybe<Array<Rolescope>>;
  hasNot?: Maybe<Array<Rolescope>>;
};

export type FilterScalarStringList = {
  has?: Maybe<Array<Scalars['String']>>;
  hasNot?: Maybe<Array<Scalars['String']>>;
};

export type FilterVideo = {
  some?: Maybe<VideoWhereInput>;
  every?: Maybe<VideoWhereInput>;
  none?: Maybe<VideoWhereInput>;
};

export enum Granttype {
  Implicit = 'IMPLICIT',
  Code = 'CODE',
  Credentials = 'CREDENTIALS'
}

export type Imagefile = {
  __typename?: 'Imagefile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileConnection = {
  __typename?: 'ImagefileConnection';
  totalCount: Scalars['Int'];
};

export type ImagefileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileCreateOneInput = {
  create?: Maybe<ImagefileCreateInput>;
  connect?: Maybe<ImagefileWhereUniqueInput>;
};

export type ImagefileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type ImagefileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type ImagefileUpdateOneInput = {
  create?: Maybe<ImagefileCreateInput>;
  connect?: Maybe<ImagefileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ImagefileWhereInput = {
  OR?: Maybe<Array<ImagefileWhereInput>>;
  AND?: Maybe<Array<ImagefileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metainfo_object?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type ImagefileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Interest = {
  __typename?: 'Interest';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type InterestConnection = {
  __typename?: 'InterestConnection';
  totalCount: Scalars['Int'];
};

export type InterestCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type InterestOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  code?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  icon?: Maybe<OrderByEnum>;
};

export type InterestUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type InterestWhereInput = {
  OR?: Maybe<Array<InterestWhereInput>>;
  AND?: Maybe<Array<InterestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  code?: Maybe<Scalars['String']>;
  code_eq?: Maybe<Scalars['String']>;
  code_neq?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_notcontains?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  icon_eq?: Maybe<Scalars['String']>;
  icon_neq?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_notcontains?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InterestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
};



export type JsonListFieldCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type JsonListFieldUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
  add?: Maybe<Array<Maybe<Scalars['Json']>>>;
  remove?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<Profile>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  seen: Array<Profile>;
  chat?: Maybe<Chat>;
};


export type MessageSeenArgs = {
  orderBy?: Maybe<ProfileOrderInput>;
  where?: Maybe<ProfileWhereInput>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  totalCount: Scalars['Int'];
};

export type MessageCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileCreateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  seen?: Maybe<ProfileCreateManyWithoutProfile_SeenfrommessagefkInput>;
  chat?: Maybe<ChatCreateOneInput>;
};

export type MessageCreateManyInput = {
  create?: Maybe<Array<Maybe<MessageCreateInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageCreateManyWithoutChatInput = {
  create?: Maybe<Array<Maybe<MessageCreateWithoutChatInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageCreateManyWithoutSeenInput = {
  create?: Maybe<Array<Maybe<MessageCreateWithoutSeenInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageCreateWithoutChatInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileCreateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  seen?: Maybe<ProfileCreateManyWithoutProfile_SeenfrommessagefkInput>;
};

export type MessageCreateWithoutSeenInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileCreateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  chat?: Maybe<ChatCreateOneInput>;
};

export type MessageOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  text?: Maybe<OrderByEnum>;
  type?: Maybe<OrderByEnum>;
};

export type MessageUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileUpdateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  seen?: Maybe<ProfileUpdateManyWithoutProfile_SeenfrommessagefkInput>;
  chat?: Maybe<ChatUpdateOneInput>;
};

export type MessageUpdateManyInput = {
  create?: Maybe<Array<Maybe<MessageCreateInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageUpdateManyWithoutChatInput = {
  create?: Maybe<Array<Maybe<MessageUpdateWithoutChatInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageUpdateManyWithoutSeenInput = {
  create?: Maybe<Array<Maybe<MessageUpdateWithoutSeenInput>>>;
  connect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<MessageWhereUniqueInput>>>;
};

export type MessageUpdateWithoutChatInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileUpdateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  seen?: Maybe<ProfileUpdateManyWithoutProfile_SeenfrommessagefkInput>;
};

export type MessageUpdateWithoutSeenInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender?: Maybe<ProfileUpdateOneInput>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Messagetype>;
  chat?: Maybe<ChatUpdateOneInput>;
};

export type MessageWhereInput = {
  OR?: Maybe<Array<MessageWhereInput>>;
  AND?: Maybe<Array<MessageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  sender?: Maybe<ProfileWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_neq?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_notcontains?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Messagetype>;
  type_eq?: Maybe<Messagetype>;
  type_neq?: Maybe<Messagetype>;
  type_contains?: Maybe<Scalars['String']>;
  type_notcontains?: Maybe<Scalars['String']>;
  seen?: Maybe<FilterProfile>;
  chat?: Maybe<ChatWhereInput>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum Messagetype {
  Default = 'DEFAULT',
  System = 'SYSTEM',
  Deleted = 'DELETED'
}

export type Mimetype = {
  __typename?: 'Mimetype';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeConnection = {
  __typename?: 'MimetypeConnection';
  totalCount: Scalars['Int'];
};

export type MimetypeCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<StringListFieldCreateInput>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeCreateManyInput = {
  create?: Maybe<Array<Maybe<MimetypeCreateInput>>>;
  connect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
};

export type MimetypeCreateOneInput = {
  create?: Maybe<MimetypeCreateInput>;
  connect?: Maybe<MimetypeWhereUniqueInput>;
};

export type MimetypeOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  compresible?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  extensions?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
};

export type MimetypeUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  compresible?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  extensions?: Maybe<StringListFieldUpdateInput>;
  name?: Maybe<Scalars['String']>;
};

export type MimetypeUpdateManyInput = {
  create?: Maybe<Array<Maybe<MimetypeCreateInput>>>;
  connect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<MimetypeWhereUniqueInput>>>;
};

export type MimetypeUpdateOneInput = {
  create?: Maybe<MimetypeCreateInput>;
  connect?: Maybe<MimetypeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type MimetypeWhereInput = {
  OR?: Maybe<Array<MimetypeWhereInput>>;
  AND?: Maybe<Array<MimetypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  compresible?: Maybe<Scalars['Boolean']>;
  compresible_eq?: Maybe<Scalars['Boolean']>;
  compresible_neq?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensions?: Maybe<FilterScalarStringList>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MimetypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTrigger: Trigger;
  updateTrigger: Trigger;
  deleteTrigger: Trigger;
  createAppclient: Appclient;
  updateAppclient: Appclient;
  deleteAppclient: Appclient;
  createAuthcodegrant: Authcodegrant;
  updateAuthcodegrant: Authcodegrant;
  deleteAuthcodegrant: Authcodegrant;
  createAuthrole: Authrole;
  updateAuthrole: Authrole;
  deleteAuthrole: Authrole;
  createAuthsession: Authsession;
  updateAuthsession: Authsession;
  deleteAuthsession: Authsession;
  createAuthuser: Authuser;
  updateAuthuser: Authuser;
  deleteAuthuser: Authuser;
  createDatapermission: Datapermission;
  updateDatapermission: Datapermission;
  deleteDatapermission: Datapermission;
  createAssetsconfig: Assetsconfig;
  updateAssetsconfig: Assetsconfig;
  deleteAssetsconfig: Assetsconfig;
  createDocumentfile: Documentfile;
  updateDocumentfile: Documentfile;
  deleteDocumentfile: Documentfile;
  createImagefile: Imagefile;
  updateImagefile: Imagefile;
  deleteImagefile: Imagefile;
  createMimetype: Mimetype;
  updateMimetype: Mimetype;
  deleteMimetype: Mimetype;
  createSoundfile: Soundfile;
  updateSoundfile: Soundfile;
  deleteSoundfile: Soundfile;
  createVideofile: Videofile;
  updateVideofile: Videofile;
  deleteVideofile: Videofile;
  createRegistration: Registration;
  updateRegistration: Registration;
  deleteRegistration: Registration;
  createFaq: Faq;
  updateFaq: Faq;
  deleteFaq: Faq;
  createAnswer: Answer;
  updateAnswer: Answer;
  deleteAnswer: Answer;
  createSkill: Skill;
  updateSkill: Skill;
  deleteSkill: Skill;
  createInterest: Interest;
  updateInterest: Interest;
  deleteInterest: Interest;
  createProfile: Profile;
  updateProfile: Profile;
  deleteProfile: Profile;
  createChat: Chat;
  updateChat: Chat;
  deleteChat: Chat;
  createMessage: Message;
  updateMessage: Message;
  deleteMessage: Message;
  createConnection: Connection;
  updateConnection: Connection;
  deleteConnection: Connection;
  createProject: Project;
  updateProject: Project;
  deleteProject: Project;
  createRequest: Request;
  updateRequest: Request;
  deleteRequest: Request;
  createComment: Comment;
  updateComment: Comment;
  deleteComment: Comment;
  createVideo: Video;
  updateVideo: Video;
  deleteVideo: Video;
};


export type MutationCreateTriggerArgs = {
  data: TriggerCreateInput;
};


export type MutationUpdateTriggerArgs = {
  where: TriggerWhereUniqueInput;
  data: TriggerUpdateInput;
};


export type MutationDeleteTriggerArgs = {
  where: TriggerWhereUniqueInput;
};


export type MutationCreateAppclientArgs = {
  data: AppclientCreateInput;
};


export type MutationUpdateAppclientArgs = {
  where: AppclientWhereUniqueInput;
  data: AppclientUpdateInput;
};


export type MutationDeleteAppclientArgs = {
  where: AppclientWhereUniqueInput;
};


export type MutationCreateAuthcodegrantArgs = {
  data: AuthcodegrantCreateInput;
};


export type MutationUpdateAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
  data: AuthcodegrantUpdateInput;
};


export type MutationDeleteAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
};


export type MutationCreateAuthroleArgs = {
  data: AuthroleCreateInput;
};


export type MutationUpdateAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
  data: AuthroleUpdateInput;
};


export type MutationDeleteAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
};


export type MutationCreateAuthsessionArgs = {
  data: AuthsessionCreateInput;
};


export type MutationUpdateAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
  data: AuthsessionUpdateInput;
};


export type MutationDeleteAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
};


export type MutationCreateAuthuserArgs = {
  data: AuthuserCreateInput;
};


export type MutationUpdateAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
  data: AuthuserUpdateInput;
};


export type MutationDeleteAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
};


export type MutationCreateDatapermissionArgs = {
  data: DatapermissionCreateInput;
};


export type MutationUpdateDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
  data: DatapermissionUpdateInput;
};


export type MutationDeleteDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
};


export type MutationCreateAssetsconfigArgs = {
  data: AssetsconfigCreateInput;
};


export type MutationUpdateAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
  data: AssetsconfigUpdateInput;
};


export type MutationDeleteAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
};


export type MutationCreateDocumentfileArgs = {
  data: DocumentfileCreateInput;
};


export type MutationUpdateDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
  data: DocumentfileUpdateInput;
};


export type MutationDeleteDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
};


export type MutationCreateImagefileArgs = {
  data: ImagefileCreateInput;
};


export type MutationUpdateImagefileArgs = {
  where: ImagefileWhereUniqueInput;
  data: ImagefileUpdateInput;
};


export type MutationDeleteImagefileArgs = {
  where: ImagefileWhereUniqueInput;
};


export type MutationCreateMimetypeArgs = {
  data: MimetypeCreateInput;
};


export type MutationUpdateMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
  data: MimetypeUpdateInput;
};


export type MutationDeleteMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
};


export type MutationCreateSoundfileArgs = {
  data: SoundfileCreateInput;
};


export type MutationUpdateSoundfileArgs = {
  where: SoundfileWhereUniqueInput;
  data: SoundfileUpdateInput;
};


export type MutationDeleteSoundfileArgs = {
  where: SoundfileWhereUniqueInput;
};


export type MutationCreateVideofileArgs = {
  data: VideofileCreateInput;
};


export type MutationUpdateVideofileArgs = {
  where: VideofileWhereUniqueInput;
  data: VideofileUpdateInput;
};


export type MutationDeleteVideofileArgs = {
  where: VideofileWhereUniqueInput;
};


export type MutationCreateRegistrationArgs = {
  data: RegistrationCreateInput;
};


export type MutationUpdateRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
  data: RegistrationUpdateInput;
};


export type MutationDeleteRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationUpdateFaqArgs = {
  where: FaqWhereUniqueInput;
  data: FaqUpdateInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationCreateAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationUpdateAnswerArgs = {
  where: AnswerWhereUniqueInput;
  data: AnswerUpdateInput;
};


export type MutationDeleteAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationUpdateSkillArgs = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationCreateInterestArgs = {
  data: InterestCreateInput;
};


export type MutationUpdateInterestArgs = {
  where: InterestWhereUniqueInput;
  data: InterestUpdateInput;
};


export type MutationDeleteInterestArgs = {
  where: InterestWhereUniqueInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationUpdateProfileArgs = {
  where: ProfileWhereUniqueInput;
  data: ProfileUpdateInput;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};


export type MutationUpdateChatArgs = {
  where: ChatWhereUniqueInput;
  data: ChatUpdateInput;
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationUpdateMessageArgs = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateInput;
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationCreateConnectionArgs = {
  data: ConnectionCreateInput;
};


export type MutationUpdateConnectionArgs = {
  where: ConnectionWhereUniqueInput;
  data: ConnectionUpdateInput;
};


export type MutationDeleteConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationCreateRequestArgs = {
  data: RequestCreateInput;
};


export type MutationUpdateRequestArgs = {
  where: RequestWhereUniqueInput;
  data: RequestUpdateInput;
};


export type MutationDeleteRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationUpdateCommentArgs = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationCreateVideoArgs = {
  data: VideoCreateInput;
};


export type MutationUpdateVideoArgs = {
  where: VideoWhereUniqueInput;
  data: VideoUpdateInput;
};


export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput;
};

export enum Notificationactiontype {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE'
}

export type NotificationactiontypeListFieldCreateInput = {
  set?: Maybe<Array<Maybe<Notificationactiontype>>>;
};

export type NotificationactiontypeListFieldUpdateInput = {
  set?: Maybe<Array<Maybe<Notificationactiontype>>>;
  add?: Maybe<Array<Maybe<Notificationactiontype>>>;
  remove?: Maybe<Array<Maybe<Notificationactiontype>>>;
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}


export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Authuser>;
  avatar?: Maybe<Imagefile>;
  video?: Maybe<Videofile>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk: Array<Chat>;
  profile_SeenFromMessageFk: Array<Message>;
  sentConnections: Array<Connection>;
  receivedConnections: Array<Connection>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations: Array<Request>;
  requests: Array<Request>;
  founder_projects: Array<Project>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos: Array<Video>;
};


export type ProfileProfile_UsersFromChatFkArgs = {
  orderBy?: Maybe<ChatOrderInput>;
  where?: Maybe<ChatWhereInput>;
};


export type ProfileProfile_SeenFromMessageFkArgs = {
  orderBy?: Maybe<MessageOrderInput>;
  where?: Maybe<MessageWhereInput>;
};


export type ProfileSentConnectionsArgs = {
  orderBy?: Maybe<ConnectionOrderInput>;
  where?: Maybe<ConnectionWhereInput>;
};


export type ProfileReceivedConnectionsArgs = {
  orderBy?: Maybe<ConnectionOrderInput>;
  where?: Maybe<ConnectionWhereInput>;
};


export type ProfileInvitationsArgs = {
  orderBy?: Maybe<RequestOrderInput>;
  where?: Maybe<RequestWhereInput>;
};


export type ProfileRequestsArgs = {
  orderBy?: Maybe<RequestOrderInput>;
  where?: Maybe<RequestWhereInput>;
};


export type ProfileFounder_ProjectsArgs = {
  orderBy?: Maybe<ProjectOrderInput>;
  where?: Maybe<ProjectWhereInput>;
};


export type ProfileVideosArgs = {
  orderBy?: Maybe<VideoOrderInput>;
  where?: Maybe<VideoWhereInput>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  totalCount: Scalars['Int'];
};

export type ProfileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  video?: Maybe<VideofileCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatCreateManyWithoutUsersInput>;
  profile_SeenFromMessageFk?: Maybe<MessageCreateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionCreateManyWithoutSenderInput>;
  receivedConnections?: Maybe<ConnectionCreateManyWithoutReceiverInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestCreateManyWithoutInviteeInput>;
  requests?: Maybe<RequestCreateManyWithoutInviterInput>;
  founder_projects?: Maybe<ProjectCreateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyWithoutProfileInput>;
};

export type ProfileCreateManyWithoutFounder_ProjectsInput = {
  create?: Maybe<Array<Maybe<ProfileCreateWithoutFounder_ProjectsInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileCreateManyWithoutProfile_SeenfrommessagefkInput = {
  create?: Maybe<Array<Maybe<ProfileCreateWithoutProfile_SeenfrommessagefkInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileCreateManyWithoutProfile_UsersfromchatfkInput = {
  create?: Maybe<Array<Maybe<ProfileCreateWithoutProfile_UsersfromchatfkInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileCreateOneInput = {
  create?: Maybe<ProfileCreateInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
};

export type ProfileCreateWithoutFounder_ProjectsInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  video?: Maybe<VideofileCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatCreateManyWithoutUsersInput>;
  profile_SeenFromMessageFk?: Maybe<MessageCreateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionCreateManyInput>;
  receivedConnections?: Maybe<ConnectionCreateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestCreateManyInput>;
  requests?: Maybe<RequestCreateManyInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyInput>;
};

export type ProfileCreateWithoutProfile_SeenfrommessagefkInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  video?: Maybe<VideofileCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatCreateManyWithoutUsersInput>;
  sentConnections?: Maybe<ConnectionCreateManyInput>;
  receivedConnections?: Maybe<ConnectionCreateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestCreateManyInput>;
  requests?: Maybe<RequestCreateManyInput>;
  founder_projects?: Maybe<ProjectCreateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyInput>;
};

export type ProfileCreateWithoutProfile_UsersfromchatfkInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  video?: Maybe<VideofileCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_SeenFromMessageFk?: Maybe<MessageCreateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionCreateManyInput>;
  receivedConnections?: Maybe<ConnectionCreateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestCreateManyInput>;
  requests?: Maybe<RequestCreateManyInput>;
  founder_projects?: Maybe<ProjectCreateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyInput>;
};

export type ProfileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  profession?: Maybe<OrderByEnum>;
  linkedin?: Maybe<OrderByEnum>;
  phone?: Maybe<OrderByEnum>;
  skills?: Maybe<OrderByEnum>;
  interests?: Maybe<OrderByEnum>;
  feedback?: Maybe<OrderByEnum>;
  email?: Maybe<OrderByEnum>;
  location?: Maybe<OrderByEnum>;
};

export type ProfileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  video?: Maybe<VideofileUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatUpdateManyWithoutUsersInput>;
  profile_SeenFromMessageFk?: Maybe<MessageUpdateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionUpdateManyWithoutSenderInput>;
  receivedConnections?: Maybe<ConnectionUpdateManyWithoutReceiverInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestUpdateManyWithoutInviteeInput>;
  requests?: Maybe<RequestUpdateManyWithoutInviterInput>;
  founder_projects?: Maybe<ProjectUpdateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyWithoutProfileInput>;
};

export type ProfileUpdateManyWithoutFounder_ProjectsInput = {
  create?: Maybe<Array<Maybe<ProfileUpdateWithoutFounder_ProjectsInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileUpdateManyWithoutProfile_SeenfrommessagefkInput = {
  create?: Maybe<Array<Maybe<ProfileUpdateWithoutProfile_SeenfrommessagefkInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileUpdateManyWithoutProfile_UsersfromchatfkInput = {
  create?: Maybe<Array<Maybe<ProfileUpdateWithoutProfile_UsersfromchatfkInput>>>;
  connect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProfileWhereUniqueInput>>>;
};

export type ProfileUpdateOneInput = {
  create?: Maybe<ProfileCreateInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProfileUpdateWithoutFounder_ProjectsInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  video?: Maybe<VideofileUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatUpdateManyWithoutUsersInput>;
  profile_SeenFromMessageFk?: Maybe<MessageUpdateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionUpdateManyInput>;
  receivedConnections?: Maybe<ConnectionUpdateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestUpdateManyInput>;
  requests?: Maybe<RequestUpdateManyInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyInput>;
};

export type ProfileUpdateWithoutProfile_SeenfrommessagefkInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  video?: Maybe<VideofileUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_UsersFromChatFk?: Maybe<ChatUpdateManyWithoutUsersInput>;
  sentConnections?: Maybe<ConnectionUpdateManyInput>;
  receivedConnections?: Maybe<ConnectionUpdateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestUpdateManyInput>;
  requests?: Maybe<RequestUpdateManyInput>;
  founder_projects?: Maybe<ProjectUpdateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyInput>;
};

export type ProfileUpdateWithoutProfile_UsersfromchatfkInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<AuthuserUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  video?: Maybe<VideofileUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  profile_SeenFromMessageFk?: Maybe<MessageUpdateManyWithoutSeenInput>;
  sentConnections?: Maybe<ConnectionUpdateManyInput>;
  receivedConnections?: Maybe<ConnectionUpdateManyInput>;
  linkedin?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['Json']>;
  interests?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  invitations?: Maybe<RequestUpdateManyInput>;
  requests?: Maybe<RequestUpdateManyInput>;
  founder_projects?: Maybe<ProjectUpdateManyWithoutFoundersInput>;
  email?: Maybe<Scalars['Email']>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyInput>;
};

export type ProfileWhereInput = {
  OR?: Maybe<Array<ProfileWhereInput>>;
  AND?: Maybe<Array<ProfileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  user?: Maybe<AuthuserWhereInput>;
  avatar?: Maybe<ImagefileWhereInput>;
  video?: Maybe<VideofileWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profession?: Maybe<Scalars['String']>;
  profession_eq?: Maybe<Scalars['String']>;
  profession_neq?: Maybe<Scalars['String']>;
  profession_contains?: Maybe<Scalars['String']>;
  profession_notcontains?: Maybe<Scalars['String']>;
  profession_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_UsersFromChatFk?: Maybe<FilterChat>;
  profile_SeenFromMessageFk?: Maybe<FilterMessage>;
  sentConnections?: Maybe<FilterConnection>;
  receivedConnections?: Maybe<FilterConnection>;
  linkedin?: Maybe<Scalars['String']>;
  linkedin_eq?: Maybe<Scalars['String']>;
  linkedin_neq?: Maybe<Scalars['String']>;
  linkedin_contains?: Maybe<Scalars['String']>;
  linkedin_notcontains?: Maybe<Scalars['String']>;
  linkedin_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_eq?: Maybe<Scalars['String']>;
  phone_neq?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_notcontains?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  skills_object?: Maybe<Scalars['Json']>;
  interests_object?: Maybe<Scalars['Json']>;
  feedback?: Maybe<Scalars['String']>;
  feedback_eq?: Maybe<Scalars['String']>;
  feedback_neq?: Maybe<Scalars['String']>;
  feedback_contains?: Maybe<Scalars['String']>;
  feedback_notcontains?: Maybe<Scalars['String']>;
  feedback_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  invitations?: Maybe<FilterRequest>;
  requests?: Maybe<FilterRequest>;
  founder_projects?: Maybe<FilterProject>;
  email?: Maybe<Scalars['Email']>;
  email_eq?: Maybe<Scalars['Email']>;
  email_neq?: Maybe<Scalars['Email']>;
  email_contains?: Maybe<Scalars['Email']>;
  email_notcontains?: Maybe<Scalars['Email']>;
  location_object?: Maybe<Scalars['Json']>;
  videos?: Maybe<FilterVideo>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['Email']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Videofile>;
  categories?: Maybe<Scalars['Json']>;
  requests: Array<Request>;
  comments: Array<Comment>;
  founders: Array<Profile>;
  chat?: Maybe<Chat>;
  avatar?: Maybe<Imagefile>;
  location?: Maybe<Scalars['Json']>;
  videos: Array<Video>;
};


export type ProjectRequestsArgs = {
  orderBy?: Maybe<RequestOrderInput>;
  where?: Maybe<RequestWhereInput>;
};


export type ProjectCommentsArgs = {
  orderBy?: Maybe<CommentOrderInput>;
  where?: Maybe<CommentWhereInput>;
};


export type ProjectFoundersArgs = {
  orderBy?: Maybe<ProfileOrderInput>;
  where?: Maybe<ProfileWhereInput>;
};


export type ProjectVideosArgs = {
  orderBy?: Maybe<VideoOrderInput>;
  where?: Maybe<VideoWhereInput>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  totalCount: Scalars['Int'];
};

export type ProjectCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileCreateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestCreateManyWithoutProjectInput>;
  comments?: Maybe<CommentCreateManyWithoutProjectInput>;
  founders?: Maybe<ProfileCreateManyWithoutFounder_ProjectsInput>;
  chat?: Maybe<ChatCreateOneWithoutProjectInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyWithoutProjectInput>;
};

export type ProjectCreateManyWithoutFoundersInput = {
  create?: Maybe<Array<Maybe<ProjectCreateWithoutFoundersInput>>>;
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
};

export type ProjectCreateOneInput = {
  create?: Maybe<ProjectCreateInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
};

export type ProjectCreateOneWithoutChatInput = {
  create?: Maybe<ProjectCreateWithoutChatInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
};

export type ProjectCreateWithoutChatInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileCreateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestCreateManyInput>;
  comments?: Maybe<CommentCreateManyInput>;
  founders?: Maybe<ProfileCreateManyWithoutFounder_ProjectsInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyInput>;
};

export type ProjectCreateWithoutFoundersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileCreateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestCreateManyInput>;
  comments?: Maybe<CommentCreateManyInput>;
  chat?: Maybe<ChatCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoCreateManyInput>;
};

export type ProjectOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  categories?: Maybe<OrderByEnum>;
  location?: Maybe<OrderByEnum>;
};

export type ProjectUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileUpdateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestUpdateManyWithoutProjectInput>;
  comments?: Maybe<CommentUpdateManyWithoutProjectInput>;
  founders?: Maybe<ProfileUpdateManyWithoutFounder_ProjectsInput>;
  chat?: Maybe<ChatUpdateOneWithoutProjectInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyWithoutProjectInput>;
};

export type ProjectUpdateManyWithoutFoundersInput = {
  create?: Maybe<Array<Maybe<ProjectUpdateWithoutFoundersInput>>>;
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
};

export type ProjectUpdateOneInput = {
  create?: Maybe<ProjectCreateInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateOneWithoutChatInput = {
  create?: Maybe<ProjectUpdateWithoutChatInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithoutChatInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileUpdateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestUpdateManyInput>;
  comments?: Maybe<CommentUpdateManyInput>;
  founders?: Maybe<ProfileUpdateManyWithoutFounder_ProjectsInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyInput>;
};

export type ProjectUpdateWithoutFoundersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<VideofileUpdateOneInput>;
  categories?: Maybe<Scalars['Json']>;
  requests?: Maybe<RequestUpdateManyInput>;
  comments?: Maybe<CommentUpdateManyInput>;
  chat?: Maybe<ChatUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  location?: Maybe<Scalars['Json']>;
  videos?: Maybe<VideoUpdateManyInput>;
};

export type ProjectWhereInput = {
  OR?: Maybe<Array<ProjectWhereInput>>;
  AND?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  video?: Maybe<VideofileWhereInput>;
  categories_object?: Maybe<Scalars['Json']>;
  requests?: Maybe<FilterRequest>;
  comments?: Maybe<FilterComment>;
  founders?: Maybe<FilterProfile>;
  chat?: Maybe<ChatWhereInput>;
  avatar?: Maybe<ImagefileWhereInput>;
  location_object?: Maybe<Scalars['Json']>;
  videos?: Maybe<FilterVideo>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  trigger: Trigger;
  triggers: Array<Trigger>;
  triggersConnection: TriggerConnection;
  appclient: Appclient;
  appclients: Array<Appclient>;
  appclientsConnection: AppclientConnection;
  authcodegrant: Authcodegrant;
  authcodegrants: Array<Authcodegrant>;
  authcodegrantsConnection: AuthcodegrantConnection;
  authrole: Authrole;
  authroles: Array<Authrole>;
  authrolesConnection: AuthroleConnection;
  authsession: Authsession;
  authsessions: Array<Authsession>;
  authsessionsConnection: AuthsessionConnection;
  authuser: Authuser;
  authusers: Array<Authuser>;
  authusersConnection: AuthuserConnection;
  datapermission: Datapermission;
  datapermissions: Array<Datapermission>;
  datapermissionsConnection: DatapermissionConnection;
  assetsconfig: Assetsconfig;
  assetsconfigs: Array<Assetsconfig>;
  assetsconfigsConnection: AssetsconfigConnection;
  documentfile: Documentfile;
  documentfiles: Array<Documentfile>;
  documentfilesConnection: DocumentfileConnection;
  imagefile: Imagefile;
  imagefiles: Array<Imagefile>;
  imagefilesConnection: ImagefileConnection;
  mimetype: Mimetype;
  mimetypes: Array<Mimetype>;
  mimetypesConnection: MimetypeConnection;
  soundfile: Soundfile;
  soundfiles: Array<Soundfile>;
  soundfilesConnection: SoundfileConnection;
  videofile: Videofile;
  videofiles: Array<Videofile>;
  videofilesConnection: VideofileConnection;
  registration: Registration;
  registrations: Array<Registration>;
  registrationsConnection: RegistrationConnection;
  faq: Faq;
  faqs: Array<Faq>;
  faqsConnection: FaqConnection;
  answer: Answer;
  answers: Array<Answer>;
  answersConnection: AnswerConnection;
  skill: Skill;
  skills: Array<Skill>;
  skillsConnection: SkillConnection;
  interest: Interest;
  interests: Array<Interest>;
  interestsConnection: InterestConnection;
  profile: Profile;
  profiles: Array<Profile>;
  profilesConnection: ProfileConnection;
  chat: Chat;
  chats: Array<Chat>;
  chatsConnection: ChatConnection;
  message: Message;
  messages: Array<Message>;
  messagesConnection: MessageConnection;
  connection: Connection;
  connections: Array<Connection>;
  connectionsConnection: ConnectionConnection;
  project: Project;
  projects: Array<Project>;
  projectsConnection: ProjectConnection;
  request: Request;
  requests: Array<Request>;
  requestsConnection: RequestConnection;
  comment: Comment;
  comments: Array<Comment>;
  commentsConnection: CommentConnection;
  video: Video;
  videos: Array<Video>;
  videosConnection: VideoConnection;
  videosCustomResolver: Array<VideoCustomType>;
};


export type QueryTriggerArgs = {
  where: TriggerWhereUniqueInput;
};


export type QueryTriggersArgs = {
  where?: Maybe<TriggerWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<TriggerOrderInput>;
};


export type QueryTriggersConnectionArgs = {
  where?: Maybe<TriggerWhereInput>;
};


export type QueryAppclientArgs = {
  where: AppclientWhereUniqueInput;
};


export type QueryAppclientsArgs = {
  where?: Maybe<AppclientWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AppclientOrderInput>;
};


export type QueryAppclientsConnectionArgs = {
  where?: Maybe<AppclientWhereInput>;
};


export type QueryAuthcodegrantArgs = {
  where: AuthcodegrantWhereUniqueInput;
};


export type QueryAuthcodegrantsArgs = {
  where?: Maybe<AuthcodegrantWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthcodegrantOrderInput>;
};


export type QueryAuthcodegrantsConnectionArgs = {
  where?: Maybe<AuthcodegrantWhereInput>;
};


export type QueryAuthroleArgs = {
  where: AuthroleWhereUniqueInput;
};


export type QueryAuthrolesArgs = {
  where?: Maybe<AuthroleWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthroleOrderInput>;
};


export type QueryAuthrolesConnectionArgs = {
  where?: Maybe<AuthroleWhereInput>;
};


export type QueryAuthsessionArgs = {
  where: AuthsessionWhereUniqueInput;
};


export type QueryAuthsessionsArgs = {
  where?: Maybe<AuthsessionWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthsessionOrderInput>;
};


export type QueryAuthsessionsConnectionArgs = {
  where?: Maybe<AuthsessionWhereInput>;
};


export type QueryAuthuserArgs = {
  where: AuthuserWhereUniqueInput;
};


export type QueryAuthusersArgs = {
  where?: Maybe<AuthuserWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AuthuserOrderInput>;
};


export type QueryAuthusersConnectionArgs = {
  where?: Maybe<AuthuserWhereInput>;
};


export type QueryDatapermissionArgs = {
  where: DatapermissionWhereUniqueInput;
};


export type QueryDatapermissionsArgs = {
  where?: Maybe<DatapermissionWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<DatapermissionOrderInput>;
};


export type QueryDatapermissionsConnectionArgs = {
  where?: Maybe<DatapermissionWhereInput>;
};


export type QueryAssetsconfigArgs = {
  where: AssetsconfigWhereUniqueInput;
};


export type QueryAssetsconfigsArgs = {
  where?: Maybe<AssetsconfigWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AssetsconfigOrderInput>;
};


export type QueryAssetsconfigsConnectionArgs = {
  where?: Maybe<AssetsconfigWhereInput>;
};


export type QueryDocumentfileArgs = {
  where: DocumentfileWhereUniqueInput;
};


export type QueryDocumentfilesArgs = {
  where?: Maybe<DocumentfileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<DocumentfileOrderInput>;
};


export type QueryDocumentfilesConnectionArgs = {
  where?: Maybe<DocumentfileWhereInput>;
};


export type QueryImagefileArgs = {
  where: ImagefileWhereUniqueInput;
};


export type QueryImagefilesArgs = {
  where?: Maybe<ImagefileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ImagefileOrderInput>;
};


export type QueryImagefilesConnectionArgs = {
  where?: Maybe<ImagefileWhereInput>;
};


export type QueryMimetypeArgs = {
  where: MimetypeWhereUniqueInput;
};


export type QueryMimetypesArgs = {
  where?: Maybe<MimetypeWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<MimetypeOrderInput>;
};


export type QueryMimetypesConnectionArgs = {
  where?: Maybe<MimetypeWhereInput>;
};


export type QuerySoundfileArgs = {
  where: SoundfileWhereUniqueInput;
};


export type QuerySoundfilesArgs = {
  where?: Maybe<SoundfileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<SoundfileOrderInput>;
};


export type QuerySoundfilesConnectionArgs = {
  where?: Maybe<SoundfileWhereInput>;
};


export type QueryVideofileArgs = {
  where: VideofileWhereUniqueInput;
};


export type QueryVideofilesArgs = {
  where?: Maybe<VideofileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<VideofileOrderInput>;
};


export type QueryVideofilesConnectionArgs = {
  where?: Maybe<VideofileWhereInput>;
};


export type QueryRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type QueryRegistrationsArgs = {
  where?: Maybe<RegistrationWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<RegistrationOrderInput>;
};


export type QueryRegistrationsConnectionArgs = {
  where?: Maybe<RegistrationWhereInput>;
};


export type QueryFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type QueryFaqsArgs = {
  where?: Maybe<FaqWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<FaqOrderInput>;
};


export type QueryFaqsConnectionArgs = {
  where?: Maybe<FaqWhereInput>;
};


export type QueryAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryAnswersArgs = {
  where?: Maybe<AnswerWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<AnswerOrderInput>;
};


export type QueryAnswersConnectionArgs = {
  where?: Maybe<AnswerWhereInput>;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


export type QuerySkillsArgs = {
  where?: Maybe<SkillWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<SkillOrderInput>;
};


export type QuerySkillsConnectionArgs = {
  where?: Maybe<SkillWhereInput>;
};


export type QueryInterestArgs = {
  where: InterestWhereUniqueInput;
};


export type QueryInterestsArgs = {
  where?: Maybe<InterestWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<InterestOrderInput>;
};


export type QueryInterestsConnectionArgs = {
  where?: Maybe<InterestWhereInput>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  where?: Maybe<ProfileWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ProfileOrderInput>;
};


export type QueryProfilesConnectionArgs = {
  where?: Maybe<ProfileWhereInput>;
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryChatsArgs = {
  where?: Maybe<ChatWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ChatOrderInput>;
};


export type QueryChatsConnectionArgs = {
  where?: Maybe<ChatWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<MessageOrderInput>;
};


export type QueryMessagesConnectionArgs = {
  where?: Maybe<MessageWhereInput>;
};


export type QueryConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type QueryConnectionsArgs = {
  where?: Maybe<ConnectionWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ConnectionOrderInput>;
};


export type QueryConnectionsConnectionArgs = {
  where?: Maybe<ConnectionWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<ProjectOrderInput>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
};


export type QueryRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type QueryRequestsArgs = {
  where?: Maybe<RequestWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<RequestOrderInput>;
};


export type QueryRequestsConnectionArgs = {
  where?: Maybe<RequestWhereInput>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<CommentOrderInput>;
};


export type QueryCommentsConnectionArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type QueryVideoArgs = {
  where: VideoWhereUniqueInput;
};


export type QueryVideosArgs = {
  where?: Maybe<VideoWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<VideoOrderInput>;
};


export type QueryVideosConnectionArgs = {
  where?: Maybe<VideoWhereInput>;
};


export type QueryVideosCustomResolverArgs = {
  where?: Maybe<VideoWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<VideoOrderInput>;
};

export type Registration = {
  __typename?: 'Registration';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  email?: Maybe<Scalars['Email']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type RegistrationConnection = {
  __typename?: 'RegistrationConnection';
  totalCount: Scalars['Int'];
};

export type RegistrationCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type RegistrationCreateOneInput = {
  create?: Maybe<RegistrationCreateInput>;
  connect?: Maybe<RegistrationWhereUniqueInput>;
};

export type RegistrationOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  email?: Maybe<OrderByEnum>;
  linkedin?: Maybe<OrderByEnum>;
};

export type RegistrationUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  linkedin?: Maybe<Scalars['String']>;
};

export type RegistrationUpdateOneInput = {
  create?: Maybe<RegistrationCreateInput>;
  connect?: Maybe<RegistrationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type RegistrationWhereInput = {
  OR?: Maybe<Array<RegistrationWhereInput>>;
  AND?: Maybe<Array<RegistrationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['Email']>;
  email_eq?: Maybe<Scalars['Email']>;
  email_neq?: Maybe<Scalars['Email']>;
  email_contains?: Maybe<Scalars['Email']>;
  email_notcontains?: Maybe<Scalars['Email']>;
  linkedin?: Maybe<Scalars['String']>;
  linkedin_eq?: Maybe<Scalars['String']>;
  linkedin_neq?: Maybe<Scalars['String']>;
  linkedin_contains?: Maybe<Scalars['String']>;
  linkedin_notcontains?: Maybe<Scalars['String']>;
  linkedin_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RegistrationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Request = {
  __typename?: 'Request';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<Profile>;
  invitee?: Maybe<Profile>;
  project?: Maybe<Project>;
  status?: Maybe<Statusrequest>;
};

export type RequestConnection = {
  __typename?: 'RequestConnection';
  totalCount: Scalars['Int'];
};

export type RequestCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileCreateOneInput>;
  invitee?: Maybe<ProfileCreateOneInput>;
  project?: Maybe<ProjectCreateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestCreateManyInput = {
  create?: Maybe<Array<Maybe<RequestCreateInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestCreateManyWithoutInviteeInput = {
  create?: Maybe<Array<Maybe<RequestCreateWithoutInviteeInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestCreateManyWithoutInviterInput = {
  create?: Maybe<Array<Maybe<RequestCreateWithoutInviterInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestCreateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<RequestCreateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestCreateWithoutInviteeInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileCreateOneInput>;
  project?: Maybe<ProjectCreateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestCreateWithoutInviterInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  invitee?: Maybe<ProfileCreateOneInput>;
  project?: Maybe<ProjectCreateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestCreateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileCreateOneInput>;
  invitee?: Maybe<ProfileCreateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  status?: Maybe<OrderByEnum>;
};

export type RequestUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileUpdateOneInput>;
  invitee?: Maybe<ProfileUpdateOneInput>;
  project?: Maybe<ProjectUpdateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestUpdateManyInput = {
  create?: Maybe<Array<Maybe<RequestCreateInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestUpdateManyWithoutInviteeInput = {
  create?: Maybe<Array<Maybe<RequestUpdateWithoutInviteeInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestUpdateManyWithoutInviterInput = {
  create?: Maybe<Array<Maybe<RequestUpdateWithoutInviterInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestUpdateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<RequestUpdateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<RequestWhereUniqueInput>>>;
};

export type RequestUpdateWithoutInviteeInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileUpdateOneInput>;
  project?: Maybe<ProjectUpdateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestUpdateWithoutInviterInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  invitee?: Maybe<ProfileUpdateOneInput>;
  project?: Maybe<ProjectUpdateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestUpdateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inviter?: Maybe<ProfileUpdateOneInput>;
  invitee?: Maybe<ProfileUpdateOneInput>;
  status?: Maybe<Statusrequest>;
};

export type RequestWhereInput = {
  OR?: Maybe<Array<RequestWhereInput>>;
  AND?: Maybe<Array<RequestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  inviter?: Maybe<ProfileWhereInput>;
  invitee?: Maybe<ProfileWhereInput>;
  project?: Maybe<ProjectWhereInput>;
  status?: Maybe<Statusrequest>;
  status_eq?: Maybe<Statusrequest>;
  status_neq?: Maybe<Statusrequest>;
  status_contains?: Maybe<Scalars['String']>;
  status_notcontains?: Maybe<Scalars['String']>;
};

export type RequestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum Rolescope {
  UploadAssets = 'UPLOAD_ASSETS'
}

export type RolescopeListFieldCreateInput = {
  set?: Maybe<Array<Maybe<Rolescope>>>;
};

export type RolescopeListFieldUpdateInput = {
  set?: Maybe<Array<Maybe<Rolescope>>>;
  add?: Maybe<Array<Maybe<Rolescope>>>;
  remove?: Maybe<Array<Maybe<Rolescope>>>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  totalCount: Scalars['Int'];
};

export type SkillCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type SkillOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  code?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  icon?: Maybe<OrderByEnum>;
};

export type SkillUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type SkillWhereInput = {
  OR?: Maybe<Array<SkillWhereInput>>;
  AND?: Maybe<Array<SkillWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  code?: Maybe<Scalars['String']>;
  code_eq?: Maybe<Scalars['String']>;
  code_neq?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_notcontains?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  icon_eq?: Maybe<Scalars['String']>;
  icon_neq?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_notcontains?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
};

export type Soundfile = {
  __typename?: 'Soundfile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileConnection = {
  __typename?: 'SoundfileConnection';
  totalCount: Scalars['Int'];
};

export type SoundfileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type SoundfileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type SoundfileWhereInput = {
  OR?: Maybe<Array<SoundfileWhereInput>>;
  AND?: Maybe<Array<SoundfileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metainfo_object?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type SoundfileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum Statusconnection {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export enum Statusrequest {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED'
}

export type StringListFieldCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringListFieldUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
  add?: Maybe<Array<Maybe<Scalars['String']>>>;
  remove?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Trigger = {
  __typename?: 'Trigger';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entity: Scalars['String'];
  resolvers?: Maybe<Array<Scalars['String']>>;
  functions?: Maybe<Array<Scalars['Json']>>;
  actions?: Maybe<Array<Notificationactiontype>>;
};

export type TriggerConnection = {
  __typename?: 'TriggerConnection';
  totalCount: Scalars['Int'];
};

export type TriggerCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entity?: Maybe<Scalars['String']>;
  resolvers?: Maybe<StringListFieldCreateInput>;
  functions?: Maybe<JsonListFieldCreateInput>;
  actions?: Maybe<NotificationactiontypeListFieldCreateInput>;
};

export type TriggerOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  entity?: Maybe<OrderByEnum>;
  resolvers?: Maybe<OrderByEnum>;
  functions?: Maybe<OrderByEnum>;
  actions?: Maybe<OrderByEnum>;
};

export type TriggerUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entity?: Maybe<Scalars['String']>;
  resolvers?: Maybe<StringListFieldUpdateInput>;
  functions?: Maybe<JsonListFieldUpdateInput>;
  actions?: Maybe<NotificationactiontypeListFieldUpdateInput>;
};

export type TriggerWhereInput = {
  OR?: Maybe<Array<TriggerWhereInput>>;
  AND?: Maybe<Array<TriggerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  entity?: Maybe<Scalars['String']>;
  entity_eq?: Maybe<Scalars['String']>;
  entity_neq?: Maybe<Scalars['String']>;
  entity_contains?: Maybe<Scalars['String']>;
  entity_notcontains?: Maybe<Scalars['String']>;
  entity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  resolvers?: Maybe<FilterScalarStringList>;
  functions?: Maybe<FilterScalarJsonList>;
  actions?: Maybe<FilterScalarNotificationactiontypeList>;
};

export type TriggerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};



export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<Videofile>;
  profile?: Maybe<Profile>;
  project?: Maybe<Project>;
  type?: Maybe<Videotype>;
  likes?: Maybe<Array<Scalars['String']>>;
  views?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  totalCount: Scalars['Int'];
};

export type VideoCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileCreateOneInput>;
  profile?: Maybe<ProfileCreateOneInput>;
  project?: Maybe<ProjectCreateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldCreateInput>;
  views?: Maybe<StringListFieldCreateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoCreateManyInput = {
  create?: Maybe<Array<Maybe<VideoCreateInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoCreateManyWithoutProfileInput = {
  create?: Maybe<Array<Maybe<VideoCreateWithoutProfileInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoCreateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<VideoCreateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoCreateWithoutProfileInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileCreateOneInput>;
  project?: Maybe<ProjectCreateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldCreateInput>;
  views?: Maybe<StringListFieldCreateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoCreateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileCreateOneInput>;
  profile?: Maybe<ProfileCreateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldCreateInput>;
  views?: Maybe<StringListFieldCreateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoCustomType = {
  __typename?: 'VideoCustomType';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<Videofile>;
  profile?: Maybe<Profile>;
  project?: Maybe<Project>;
  type?: Maybe<Videotype>;
  likes?: Maybe<Array<Scalars['String']>>;
  views?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Boolean']>;
  likesCount?: Maybe<Scalars['Int']>;
  view?: Maybe<Scalars['Boolean']>;
  viewsCount?: Maybe<Scalars['Int']>;
};

export type VideoOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  type?: Maybe<OrderByEnum>;
  likes?: Maybe<OrderByEnum>;
  views?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
};

export type VideoUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileUpdateOneInput>;
  profile?: Maybe<ProfileUpdateOneInput>;
  project?: Maybe<ProjectUpdateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldUpdateInput>;
  views?: Maybe<StringListFieldUpdateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoUpdateManyInput = {
  create?: Maybe<Array<Maybe<VideoCreateInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoUpdateManyWithoutProfileInput = {
  create?: Maybe<Array<Maybe<VideoUpdateWithoutProfileInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoUpdateManyWithoutProjectInput = {
  create?: Maybe<Array<Maybe<VideoUpdateWithoutProjectInput>>>;
  connect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
  delete?: Maybe<Array<Maybe<VideoWhereUniqueInput>>>;
};

export type VideoUpdateWithoutProfileInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileUpdateOneInput>;
  project?: Maybe<ProjectUpdateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldUpdateInput>;
  views?: Maybe<StringListFieldUpdateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoUpdateWithoutProjectInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  file?: Maybe<VideofileUpdateOneInput>;
  profile?: Maybe<ProfileUpdateOneInput>;
  type?: Maybe<Videotype>;
  likes?: Maybe<StringListFieldUpdateInput>;
  views?: Maybe<StringListFieldUpdateInput>;
  description?: Maybe<Scalars['String']>;
};

export type VideoWhereInput = {
  OR?: Maybe<Array<VideoWhereInput>>;
  AND?: Maybe<Array<VideoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  file?: Maybe<VideofileWhereInput>;
  profile?: Maybe<ProfileWhereInput>;
  project?: Maybe<ProjectWhereInput>;
  type?: Maybe<Videotype>;
  type_eq?: Maybe<Videotype>;
  type_neq?: Maybe<Videotype>;
  type_contains?: Maybe<Scalars['String']>;
  type_notcontains?: Maybe<Scalars['String']>;
  likes?: Maybe<FilterScalarStringList>;
  views?: Maybe<FilterScalarStringList>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VideoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Videofile = {
  __typename?: 'Videofile';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<Assetsconfig>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<Mimetype>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileConnection = {
  __typename?: 'VideofileConnection';
  totalCount: Scalars['Int'];
};

export type VideofileCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigCreateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeCreateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileCreateOneInput = {
  create?: Maybe<VideofileCreateInput>;
  connect?: Maybe<VideofileWhereUniqueInput>;
};

export type VideofileOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  description?: Maybe<OrderByEnum>;
  metainfo?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  url?: Maybe<OrderByEnum>;
};

export type VideofileUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  assetsConfig?: Maybe<AssetsconfigUpdateOneInput>;
  description?: Maybe<Scalars['String']>;
  metainfo?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeUpdateOneInput>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Url']>;
};

export type VideofileUpdateOneInput = {
  create?: Maybe<VideofileCreateInput>;
  connect?: Maybe<VideofileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type VideofileWhereInput = {
  OR?: Maybe<Array<VideofileWhereInput>>;
  AND?: Maybe<Array<VideofileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_eq?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_eq?: Maybe<Scalars['DateTime']>;
  updatedAt_neq?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_between?: Maybe<BetweenFilterDateTime>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_eq?: Maybe<Scalars['DateTime']>;
  createdAt_neq?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_between?: Maybe<BetweenFilterDateTime>;
  assetsConfig?: Maybe<AssetsconfigWhereInput>;
  description?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_notcontains?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metainfo_object?: Maybe<Scalars['Json']>;
  mimeType?: Maybe<MimetypeWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_notcontains?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['Url']>;
  url_eq?: Maybe<Scalars['Url']>;
  url_neq?: Maybe<Scalars['Url']>;
  url_contains?: Maybe<Scalars['Url']>;
  url_notcontains?: Maybe<Scalars['Url']>;
};

export type VideofileWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum Videotype {
  Principal = 'PRINCIPAL',
  Gallery = 'GALLERY'
}


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
        client_type?: boolean
        datapermissions?: DatapermissionSelect
        domains?: boolean
        grant_type?: boolean
        name?: boolean
        permissions?: boolean
        providers?: boolean
        redirect_uri?: boolean
        scopes?: boolean
        userPool?: boolean
    }
    export type AssetsconfigSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        compatibleMimes?: MimetypeSelect
        compress?: boolean
        compressPercentage?: boolean
        description?: boolean
        label?: boolean
        mimeTypes?: MimetypeSelect
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
        authusers?: AuthuserSelect
        createAt?: boolean
        datapermissions?: DatapermissionSelect
        default?: boolean
        description?: boolean
        name?: boolean
        permissions?: boolean
        updateAt?: boolean
        scopes?: boolean
        users?: AuthuserSelect
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
        appId?: boolean
    }
    export type AuthuserSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        authrole?: AuthroleSelect
        email?: boolean
        isRoot?: boolean
        name?: boolean
        sessions?: AuthsessionSelect
        sub?: boolean
        username?: boolean
        notificationConfig?: boolean
        subscriptionConfig?: boolean
        roles?: AuthroleSelect
    }
    export type ChatSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        name?: boolean
        users?: ProfileSelect
        messages?: MessageSelect
        type?: boolean
        project?: ProjectSelect
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
        status?: boolean
    }
    export type DatapermissionSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        action?: boolean
        appclient?: AppclientSelect
        attributes?: boolean
        authrole?: AuthroleSelect
        entity?: boolean
        private?: boolean
        str?: boolean
        access?: boolean
        constraints?: boolean
        resourcesOwner?: boolean
        resources?: boolean
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
        type?: boolean
        seen?: ProfileSelect
        chat?: ChatSelect
    }
    export type MimetypeSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        compresible?: boolean
        description?: boolean
        extensions?: boolean
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
        profile_UsersFromChatFk?: ChatSelect
        profile_SeenFromMessageFk?: MessageSelect
        sentConnections?: ConnectionSelect
        receivedConnections?: ConnectionSelect
        linkedin?: boolean
        phone?: boolean
        skills?: boolean
        interests?: boolean
        feedback?: boolean
        invitations?: RequestSelect
        requests?: RequestSelect
        founder_projects?: ProjectSelect
        email?: boolean
        location?: boolean
        videos?: VideoSelect
    }
    export type ProjectSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        name?: boolean
        description?: boolean
        video?: VideofileSelect
        categories?: boolean
        requests?: RequestSelect
        comments?: CommentSelect
        founders?: ProfileSelect
        chat?: ChatSelect
        avatar?: ImagefileSelect
        location?: boolean
        videos?: VideoSelect
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
        status?: boolean
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
        resolvers?: boolean
        functions?: boolean
        actions?: boolean
    }
    export type VideoSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        file?: VideofileSelect
        profile?: ProfileSelect
        project?: ProjectSelect
        type?: boolean
        likes?: boolean
        views?: boolean
        description?: boolean
    }
    export type VideoCustomTypeSelect = {
        id?: boolean
        updatedAt?: boolean
        createdAt?: boolean
        file?: VideofileSelect
        profile?: ProfileSelect
        project?: ProjectSelect
        type?: boolean
        likes?: boolean
        views?: boolean
        description?: boolean
        like?: boolean
        likesCount?: boolean
        view?: boolean
        viewsCount?: boolean
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

export class QueriesService extends Service {
        async answer ( args: {
        select?: AnswerSelect,
        where: AnswerWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Answer> {
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
        const { answer } = await this.doQuery<Record<'answer', Answer>, QueryAnswerArgs>(
            fillSelectedFields( getAnswerQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAnswerArgs,
            { ...args.clientOptions }
        )
        return answer
    }
        async answers ( args: {
        select?: AnswerSelect,
        where?: AnswerWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AnswerOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Answer>> {
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
        const { answers } = await this.doQuery<Record<'answers', Array<Answer>>, QueryAnswersArgs>(
            fillSelectedFields( getAnswersQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAnswersArgs,
            { ...args.clientOptions }
        )
        return answers
    }
        async appclient ( args: {
        select?: AppclientSelect,
        where: AppclientWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Appclient> {
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
        const { appclient } = await this.doQuery<Record<'appclient', Appclient>, QueryAppclientArgs>(
            fillSelectedFields( getAppclientQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAppclientArgs,
            { ...args.clientOptions }
        )
        return appclient
    }
        async appclients ( args: {
        select?: AppclientSelect,
        where?: AppclientWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AppclientOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Appclient>> {
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
        const { appclients } = await this.doQuery<Record<'appclients', Array<Appclient>>, QueryAppclientsArgs>(
            fillSelectedFields( getAppclientsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAppclientsArgs,
            { ...args.clientOptions }
        )
        return appclients
    }
        async assetsconfig ( args: {
        select?: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Assetsconfig> {
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
        const { assetsconfig } = await this.doQuery<Record<'assetsconfig', Assetsconfig>, QueryAssetsconfigArgs>(
            fillSelectedFields( getAssetsconfigQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAssetsconfigArgs,
            { ...args.clientOptions }
        )
        return assetsconfig
    }
        async assetsconfigs ( args: {
        select?: AssetsconfigSelect,
        where?: AssetsconfigWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AssetsconfigOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Assetsconfig>> {
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
        const { assetsconfigs } = await this.doQuery<Record<'assetsconfigs', Array<Assetsconfig>>, QueryAssetsconfigsArgs>(
            fillSelectedFields( getAssetsconfigsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAssetsconfigsArgs,
            { ...args.clientOptions }
        )
        return assetsconfigs
    }
        async authcodegrant ( args: {
        select?: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Authcodegrant> {
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
        const { authcodegrant } = await this.doQuery<Record<'authcodegrant', Authcodegrant>, QueryAuthcodegrantArgs>(
            fillSelectedFields( getAuthcodegrantQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthcodegrantArgs,
            { ...args.clientOptions }
        )
        return authcodegrant
    }
        async authcodegrants ( args: {
        select?: AuthcodegrantSelect,
        where?: AuthcodegrantWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthcodegrantOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Authcodegrant>> {
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
        const { authcodegrants } = await this.doQuery<Record<'authcodegrants', Array<Authcodegrant>>, QueryAuthcodegrantsArgs>(
            fillSelectedFields( getAuthcodegrantsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthcodegrantsArgs,
            { ...args.clientOptions }
        )
        return authcodegrants
    }
        async authrole ( args: {
        select?: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Authrole> {
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
        const { authrole } = await this.doQuery<Record<'authrole', Authrole>, QueryAuthroleArgs>(
            fillSelectedFields( getAuthroleQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthroleArgs,
            { ...args.clientOptions }
        )
        return authrole
    }
        async authroles ( args: {
        select?: AuthroleSelect,
        where?: AuthroleWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthroleOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Authrole>> {
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
        const { authroles } = await this.doQuery<Record<'authroles', Array<Authrole>>, QueryAuthrolesArgs>(
            fillSelectedFields( getAuthrolesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthrolesArgs,
            { ...args.clientOptions }
        )
        return authroles
    }
        async authsession ( args: {
        select?: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Authsession> {
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
        const { authsession } = await this.doQuery<Record<'authsession', Authsession>, QueryAuthsessionArgs>(
            fillSelectedFields( getAuthsessionQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthsessionArgs,
            { ...args.clientOptions }
        )
        return authsession
    }
        async authsessions ( args: {
        select?: AuthsessionSelect,
        where?: AuthsessionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthsessionOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Authsession>> {
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
        const { authsessions } = await this.doQuery<Record<'authsessions', Array<Authsession>>, QueryAuthsessionsArgs>(
            fillSelectedFields( getAuthsessionsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthsessionsArgs,
            { ...args.clientOptions }
        )
        return authsessions
    }
        async authuser ( args: {
        select?: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Authuser> {
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
        const { authuser } = await this.doQuery<Record<'authuser', Authuser>, QueryAuthuserArgs>(
            fillSelectedFields( getAuthuserQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthuserArgs,
            { ...args.clientOptions }
        )
        return authuser
    }
        async authusers ( args: {
        select?: AuthuserSelect,
        where?: AuthuserWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: AuthuserOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Authuser>> {
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
        const { authusers } = await this.doQuery<Record<'authusers', Array<Authuser>>, QueryAuthusersArgs>(
            fillSelectedFields( getAuthusersQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryAuthusersArgs,
            { ...args.clientOptions }
        )
        return authusers
    }
        async chat ( args: {
        select?: ChatSelect,
        where: ChatWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Chat> {
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
        const { chat } = await this.doQuery<Record<'chat', Chat>, QueryChatArgs>(
            fillSelectedFields( getChatQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryChatArgs,
            { ...args.clientOptions }
        )
        return chat
    }
        async chats ( args: {
        select?: ChatSelect,
        where?: ChatWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ChatOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Chat>> {
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
        const { chats } = await this.doQuery<Record<'chats', Array<Chat>>, QueryChatsArgs>(
            fillSelectedFields( getChatsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryChatsArgs,
            { ...args.clientOptions }
        )
        return chats
    }
        async comment ( args: {
        select?: CommentSelect,
        where: CommentWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Comment> {
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
        const { comment } = await this.doQuery<Record<'comment', Comment>, QueryCommentArgs>(
            fillSelectedFields( getCommentQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryCommentArgs,
            { ...args.clientOptions }
        )
        return comment
    }
        async comments ( args: {
        select?: CommentSelect,
        where?: CommentWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: CommentOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Comment>> {
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
        const { comments } = await this.doQuery<Record<'comments', Array<Comment>>, QueryCommentsArgs>(
            fillSelectedFields( getCommentsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryCommentsArgs,
            { ...args.clientOptions }
        )
        return comments
    }
        async connection ( args: {
        select?: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Connection> {
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
        const { connection } = await this.doQuery<Record<'connection', Connection>, QueryConnectionArgs>(
            fillSelectedFields( getConnectionQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryConnectionArgs,
            { ...args.clientOptions }
        )
        return connection
    }
        async connections ( args: {
        select?: ConnectionSelect,
        where?: ConnectionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ConnectionOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Connection>> {
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
        const { connections } = await this.doQuery<Record<'connections', Array<Connection>>, QueryConnectionsArgs>(
            fillSelectedFields( getConnectionsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryConnectionsArgs,
            { ...args.clientOptions }
        )
        return connections
    }
        async datapermission ( args: {
        select?: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Datapermission> {
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
        const { datapermission } = await this.doQuery<Record<'datapermission', Datapermission>, QueryDatapermissionArgs>(
            fillSelectedFields( getDatapermissionQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryDatapermissionArgs,
            { ...args.clientOptions }
        )
        return datapermission
    }
        async datapermissions ( args: {
        select?: DatapermissionSelect,
        where?: DatapermissionWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: DatapermissionOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Datapermission>> {
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
        const { datapermissions } = await this.doQuery<Record<'datapermissions', Array<Datapermission>>, QueryDatapermissionsArgs>(
            fillSelectedFields( getDatapermissionsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryDatapermissionsArgs,
            { ...args.clientOptions }
        )
        return datapermissions
    }
        async documentfile ( args: {
        select?: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Documentfile> {
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
        const { documentfile } = await this.doQuery<Record<'documentfile', Documentfile>, QueryDocumentfileArgs>(
            fillSelectedFields( getDocumentfileQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryDocumentfileArgs,
            { ...args.clientOptions }
        )
        return documentfile
    }
        async documentfiles ( args: {
        select?: DocumentfileSelect,
        where?: DocumentfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: DocumentfileOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Documentfile>> {
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
        const { documentfiles } = await this.doQuery<Record<'documentfiles', Array<Documentfile>>, QueryDocumentfilesArgs>(
            fillSelectedFields( getDocumentfilesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryDocumentfilesArgs,
            { ...args.clientOptions }
        )
        return documentfiles
    }
        async faq ( args: {
        select?: FaqSelect,
        where: FaqWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Faq> {
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
        const { faq } = await this.doQuery<Record<'faq', Faq>, QueryFaqArgs>(
            fillSelectedFields( getFaqQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryFaqArgs,
            { ...args.clientOptions }
        )
        return faq
    }
        async faqs ( args: {
        select?: FaqSelect,
        where?: FaqWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: FaqOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Faq>> {
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
        const { faqs } = await this.doQuery<Record<'faqs', Array<Faq>>, QueryFaqsArgs>(
            fillSelectedFields( getFaqsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryFaqsArgs,
            { ...args.clientOptions }
        )
        return faqs
    }
        async imagefile ( args: {
        select?: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Imagefile> {
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
        const { imagefile } = await this.doQuery<Record<'imagefile', Imagefile>, QueryImagefileArgs>(
            fillSelectedFields( getImagefileQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryImagefileArgs,
            { ...args.clientOptions }
        )
        return imagefile
    }
        async imagefiles ( args: {
        select?: ImagefileSelect,
        where?: ImagefileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ImagefileOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Imagefile>> {
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
        const { imagefiles } = await this.doQuery<Record<'imagefiles', Array<Imagefile>>, QueryImagefilesArgs>(
            fillSelectedFields( getImagefilesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryImagefilesArgs,
            { ...args.clientOptions }
        )
        return imagefiles
    }
        async interest ( args: {
        select?: InterestSelect,
        where: InterestWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Interest> {
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
        const { interest } = await this.doQuery<Record<'interest', Interest>, QueryInterestArgs>(
            fillSelectedFields( getInterestQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryInterestArgs,
            { ...args.clientOptions }
        )
        return interest
    }
        async interests ( args: {
        select?: InterestSelect,
        where?: InterestWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: InterestOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Interest>> {
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
        const { interests } = await this.doQuery<Record<'interests', Array<Interest>>, QueryInterestsArgs>(
            fillSelectedFields( getInterestsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryInterestsArgs,
            { ...args.clientOptions }
        )
        return interests
    }
        async message ( args: {
        select?: MessageSelect,
        where: MessageWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Message> {
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
        const { message } = await this.doQuery<Record<'message', Message>, QueryMessageArgs>(
            fillSelectedFields( getMessageQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryMessageArgs,
            { ...args.clientOptions }
        )
        return message
    }
        async messages ( args: {
        select?: MessageSelect,
        where?: MessageWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: MessageOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Message>> {
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
        const { messages } = await this.doQuery<Record<'messages', Array<Message>>, QueryMessagesArgs>(
            fillSelectedFields( getMessagesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryMessagesArgs,
            { ...args.clientOptions }
        )
        return messages
    }
        async mimetype ( args: {
        select?: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Mimetype> {
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
        const { mimetype } = await this.doQuery<Record<'mimetype', Mimetype>, QueryMimetypeArgs>(
            fillSelectedFields( getMimetypeQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryMimetypeArgs,
            { ...args.clientOptions }
        )
        return mimetype
    }
        async mimetypes ( args: {
        select?: MimetypeSelect,
        where?: MimetypeWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: MimetypeOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Mimetype>> {
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
        const { mimetypes } = await this.doQuery<Record<'mimetypes', Array<Mimetype>>, QueryMimetypesArgs>(
            fillSelectedFields( getMimetypesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryMimetypesArgs,
            { ...args.clientOptions }
        )
        return mimetypes
    }
        async profile ( args: {
        select?: ProfileSelect,
        where: ProfileWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Profile> {
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
        const { profile } = await this.doQuery<Record<'profile', Profile>, QueryProfileArgs>(
            fillSelectedFields( getProfileQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryProfileArgs,
            { ...args.clientOptions }
        )
        return profile
    }
        async profiles ( args: {
        select?: ProfileSelect,
        where?: ProfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ProfileOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Profile>> {
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
        const { profiles } = await this.doQuery<Record<'profiles', Array<Profile>>, QueryProfilesArgs>(
            fillSelectedFields( getProfilesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryProfilesArgs,
            { ...args.clientOptions }
        )
        return profiles
    }
        async project ( args: {
        select?: ProjectSelect,
        where: ProjectWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Project> {
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
        const { project } = await this.doQuery<Record<'project', Project>, QueryProjectArgs>(
            fillSelectedFields( getProjectQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryProjectArgs,
            { ...args.clientOptions }
        )
        return project
    }
        async projects ( args: {
        select?: ProjectSelect,
        where?: ProjectWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: ProjectOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Project>> {
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
        const { projects } = await this.doQuery<Record<'projects', Array<Project>>, QueryProjectsArgs>(
            fillSelectedFields( getProjectsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryProjectsArgs,
            { ...args.clientOptions }
        )
        return projects
    }
        async registration ( args: {
        select?: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Registration> {
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
        const { registration } = await this.doQuery<Record<'registration', Registration>, QueryRegistrationArgs>(
            fillSelectedFields( getRegistrationQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryRegistrationArgs,
            { ...args.clientOptions }
        )
        return registration
    }
        async registrations ( args: {
        select?: RegistrationSelect,
        where?: RegistrationWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: RegistrationOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Registration>> {
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
        const { registrations } = await this.doQuery<Record<'registrations', Array<Registration>>, QueryRegistrationsArgs>(
            fillSelectedFields( getRegistrationsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryRegistrationsArgs,
            { ...args.clientOptions }
        )
        return registrations
    }
        async request ( args: {
        select?: RequestSelect,
        where: RequestWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Request> {
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
        const { request } = await this.doQuery<Record<'request', Request>, QueryRequestArgs>(
            fillSelectedFields( getRequestQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryRequestArgs,
            { ...args.clientOptions }
        )
        return request
    }
        async requests ( args: {
        select?: RequestSelect,
        where?: RequestWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: RequestOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Request>> {
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
        const { requests } = await this.doQuery<Record<'requests', Array<Request>>, QueryRequestsArgs>(
            fillSelectedFields( getRequestsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryRequestsArgs,
            { ...args.clientOptions }
        )
        return requests
    }
        async skill ( args: {
        select?: SkillSelect,
        where: SkillWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Skill> {
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
        const { skill } = await this.doQuery<Record<'skill', Skill>, QuerySkillArgs>(
            fillSelectedFields( getSkillQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QuerySkillArgs,
            { ...args.clientOptions }
        )
        return skill
    }
        async skills ( args: {
        select?: SkillSelect,
        where?: SkillWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: SkillOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Skill>> {
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
        const { skills } = await this.doQuery<Record<'skills', Array<Skill>>, QuerySkillsArgs>(
            fillSelectedFields( getSkillsQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QuerySkillsArgs,
            { ...args.clientOptions }
        )
        return skills
    }
        async soundfile ( args: {
        select?: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Soundfile> {
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
        const { soundfile } = await this.doQuery<Record<'soundfile', Soundfile>, QuerySoundfileArgs>(
            fillSelectedFields( getSoundfileQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QuerySoundfileArgs,
            { ...args.clientOptions }
        )
        return soundfile
    }
        async soundfiles ( args: {
        select?: SoundfileSelect,
        where?: SoundfileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: SoundfileOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Soundfile>> {
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
        const { soundfiles } = await this.doQuery<Record<'soundfiles', Array<Soundfile>>, QuerySoundfilesArgs>(
            fillSelectedFields( getSoundfilesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QuerySoundfilesArgs,
            { ...args.clientOptions }
        )
        return soundfiles
    }
        async trigger ( args: {
        select?: TriggerSelect,
        where: TriggerWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Trigger> {
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
        const { trigger } = await this.doQuery<Record<'trigger', Trigger>, QueryTriggerArgs>(
            fillSelectedFields( getTriggerQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryTriggerArgs,
            { ...args.clientOptions }
        )
        return trigger
    }
        async triggers ( args: {
        select?: TriggerSelect,
        where?: TriggerWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: TriggerOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Trigger>> {
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
        const { triggers } = await this.doQuery<Record<'triggers', Array<Trigger>>, QueryTriggersArgs>(
            fillSelectedFields( getTriggersQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryTriggersArgs,
            { ...args.clientOptions }
        )
        return triggers
    }
        async video ( args: {
        select?: VideoSelect,
        where: VideoWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Video> {
        const getVideoQuery: string = `
            query getVideo (
                $where: VideoWhereUniqueInput!,
            ) {
                video (
                    where: $where,
                ) {
                    #@@
                }
            }
        `
        const { video } = await this.doQuery<Record<'video', Video>, QueryVideoArgs>(
            fillSelectedFields( getVideoQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryVideoArgs,
            { ...args.clientOptions }
        )
        return video
    }
        async videos ( args: {
        select?: VideoSelect,
        where?: VideoWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: VideoOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Video>> {
        const getVideosQuery: string = `
            query getVideos (
                $where: VideoWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: VideoOrderInput,
            ) {
                videos (
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
        const { videos } = await this.doQuery<Record<'videos', Array<Video>>, QueryVideosArgs>(
            fillSelectedFields( getVideosQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryVideosArgs,
            { ...args.clientOptions }
        )
        return videos
    }
        async videosCustomResolver ( args: {
        select?: VideoCustomTypeSelect,
        where?: VideoWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: VideoOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<VideoCustomType>> {
        const getVideosCustomResolverQuery: string = `
            query getVideosCustomResolver (
                $where: VideoWhereInput,
                $first: Int,
                $last: Int,
                $before: String,
                $after: String,
                $orderBy: VideoOrderInput,
            ) {
                videosCustomResolver (
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
        const { videosCustomResolver } = await this.doQuery<Record<'videosCustomResolver', Array<VideoCustomType>>, QueryVideosCustomResolverArgs>(
            fillSelectedFields( getVideosCustomResolverQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryVideosCustomResolverArgs,
            { ...args.clientOptions }
        )
        return videosCustomResolver
    }
        async videofile ( args: {
        select?: VideofileSelect,
        where: VideofileWhereUniqueInput,
        clientOptions?: ClientOptions
    } ): Promise<Videofile> {
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
        const { videofile } = await this.doQuery<Record<'videofile', Videofile>, QueryVideofileArgs>(
            fillSelectedFields( getVideofileQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryVideofileArgs,
            { ...args.clientOptions }
        )
        return videofile
    }
        async videofiles ( args: {
        select?: VideofileSelect,
        where?: VideofileWhereInput,
        first?: Scalars['Int'],
        last?: Scalars['Int'],
        before?: Scalars['String'],
        after?: Scalars['String'],
        orderBy?: VideofileOrderInput,
        clientOptions?: ClientOptions
    } ): Promise<Array<Videofile>> {
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
        const { videofiles } = await this.doQuery<Record<'videofiles', Array<Videofile>>, QueryVideofilesArgs>(
            fillSelectedFields( getVideofilesQuery, args.select || { id: true } ),
            Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as QueryVideofilesArgs,
            { ...args.clientOptions }
        )
        return videofiles
    }
}

export class MutationsService extends Service {
    async createAnswer ( args: {
        select?: AnswerSelect,
        data: AnswerCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Answer> {
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
            const { createAnswer } = await this.doMutation<Record<'createAnswer', Answer>, MutationCreateAnswerArgs>(
                fillSelectedFields( CreateAnswerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAnswerArgs,
                { ...args.clientOptions }
            )
            return createAnswer
        }
    async updateAnswer ( args: {
        select?: AnswerSelect,
        where: AnswerWhereUniqueInput,
        data: AnswerUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Answer> {
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
            const { updateAnswer } = await this.doMutation<Record<'updateAnswer', Answer>, MutationUpdateAnswerArgs>(
                fillSelectedFields( UpdateAnswerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAnswerArgs,
                { ...args.clientOptions }
            )
            return updateAnswer
        }
    async deleteAnswer ( args: {
        select?: AnswerSelect,
        where: AnswerWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Answer> {
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
            const { deleteAnswer } = await this.doMutation<Record<'deleteAnswer', Answer>, MutationDeleteAnswerArgs>(
                fillSelectedFields( DeleteAnswerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAnswerArgs,
                { ...args.clientOptions }
            )
            return deleteAnswer
        }
    async createAppclient ( args: {
        select?: AppclientSelect,
        data: AppclientCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Appclient> {
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
            const { createAppclient } = await this.doMutation<Record<'createAppclient', Appclient>, MutationCreateAppclientArgs>(
                fillSelectedFields( CreateAppclientMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAppclientArgs,
                { ...args.clientOptions }
            )
            return createAppclient
        }
    async updateAppclient ( args: {
        select?: AppclientSelect,
        where: AppclientWhereUniqueInput,
        data: AppclientUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Appclient> {
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
            const { updateAppclient } = await this.doMutation<Record<'updateAppclient', Appclient>, MutationUpdateAppclientArgs>(
                fillSelectedFields( UpdateAppclientMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAppclientArgs,
                { ...args.clientOptions }
            )
            return updateAppclient
        }
    async deleteAppclient ( args: {
        select?: AppclientSelect,
        where: AppclientWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Appclient> {
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
            const { deleteAppclient } = await this.doMutation<Record<'deleteAppclient', Appclient>, MutationDeleteAppclientArgs>(
                fillSelectedFields( DeleteAppclientMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAppclientArgs,
                { ...args.clientOptions }
            )
            return deleteAppclient
        }
    async createAssetsconfig ( args: {
        select?: AssetsconfigSelect,
        data: AssetsconfigCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Assetsconfig> {
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
            const { createAssetsconfig } = await this.doMutation<Record<'createAssetsconfig', Assetsconfig>, MutationCreateAssetsconfigArgs>(
                fillSelectedFields( CreateAssetsconfigMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAssetsconfigArgs,
                { ...args.clientOptions }
            )
            return createAssetsconfig
        }
    async updateAssetsconfig ( args: {
        select?: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
        data: AssetsconfigUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Assetsconfig> {
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
            const { updateAssetsconfig } = await this.doMutation<Record<'updateAssetsconfig', Assetsconfig>, MutationUpdateAssetsconfigArgs>(
                fillSelectedFields( UpdateAssetsconfigMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAssetsconfigArgs,
                { ...args.clientOptions }
            )
            return updateAssetsconfig
        }
    async deleteAssetsconfig ( args: {
        select?: AssetsconfigSelect,
        where: AssetsconfigWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Assetsconfig> {
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
            const { deleteAssetsconfig } = await this.doMutation<Record<'deleteAssetsconfig', Assetsconfig>, MutationDeleteAssetsconfigArgs>(
                fillSelectedFields( DeleteAssetsconfigMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAssetsconfigArgs,
                { ...args.clientOptions }
            )
            return deleteAssetsconfig
        }
    async createAuthcodegrant ( args: {
        select?: AuthcodegrantSelect,
        data: AuthcodegrantCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authcodegrant> {
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
            const { createAuthcodegrant } = await this.doMutation<Record<'createAuthcodegrant', Authcodegrant>, MutationCreateAuthcodegrantArgs>(
                fillSelectedFields( CreateAuthcodegrantMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAuthcodegrantArgs,
                { ...args.clientOptions }
            )
            return createAuthcodegrant
        }
    async updateAuthcodegrant ( args: {
        select?: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
        data: AuthcodegrantUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authcodegrant> {
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
            const { updateAuthcodegrant } = await this.doMutation<Record<'updateAuthcodegrant', Authcodegrant>, MutationUpdateAuthcodegrantArgs>(
                fillSelectedFields( UpdateAuthcodegrantMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAuthcodegrantArgs,
                { ...args.clientOptions }
            )
            return updateAuthcodegrant
        }
    async deleteAuthcodegrant ( args: {
        select?: AuthcodegrantSelect,
        where: AuthcodegrantWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authcodegrant> {
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
            const { deleteAuthcodegrant } = await this.doMutation<Record<'deleteAuthcodegrant', Authcodegrant>, MutationDeleteAuthcodegrantArgs>(
                fillSelectedFields( DeleteAuthcodegrantMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAuthcodegrantArgs,
                { ...args.clientOptions }
            )
            return deleteAuthcodegrant
        }
    async createAuthrole ( args: {
        select?: AuthroleSelect,
        data: AuthroleCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authrole> {
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
            const { createAuthrole } = await this.doMutation<Record<'createAuthrole', Authrole>, MutationCreateAuthroleArgs>(
                fillSelectedFields( CreateAuthroleMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAuthroleArgs,
                { ...args.clientOptions }
            )
            return createAuthrole
        }
    async updateAuthrole ( args: {
        select?: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
        data: AuthroleUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authrole> {
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
            const { updateAuthrole } = await this.doMutation<Record<'updateAuthrole', Authrole>, MutationUpdateAuthroleArgs>(
                fillSelectedFields( UpdateAuthroleMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAuthroleArgs,
                { ...args.clientOptions }
            )
            return updateAuthrole
        }
    async deleteAuthrole ( args: {
        select?: AuthroleSelect,
        where: AuthroleWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authrole> {
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
            const { deleteAuthrole } = await this.doMutation<Record<'deleteAuthrole', Authrole>, MutationDeleteAuthroleArgs>(
                fillSelectedFields( DeleteAuthroleMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAuthroleArgs,
                { ...args.clientOptions }
            )
            return deleteAuthrole
        }
    async createAuthsession ( args: {
        select?: AuthsessionSelect,
        data: AuthsessionCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authsession> {
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
            const { createAuthsession } = await this.doMutation<Record<'createAuthsession', Authsession>, MutationCreateAuthsessionArgs>(
                fillSelectedFields( CreateAuthsessionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAuthsessionArgs,
                { ...args.clientOptions }
            )
            return createAuthsession
        }
    async updateAuthsession ( args: {
        select?: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
        data: AuthsessionUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authsession> {
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
            const { updateAuthsession } = await this.doMutation<Record<'updateAuthsession', Authsession>, MutationUpdateAuthsessionArgs>(
                fillSelectedFields( UpdateAuthsessionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAuthsessionArgs,
                { ...args.clientOptions }
            )
            return updateAuthsession
        }
    async deleteAuthsession ( args: {
        select?: AuthsessionSelect,
        where: AuthsessionWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authsession> {
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
            const { deleteAuthsession } = await this.doMutation<Record<'deleteAuthsession', Authsession>, MutationDeleteAuthsessionArgs>(
                fillSelectedFields( DeleteAuthsessionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAuthsessionArgs,
                { ...args.clientOptions }
            )
            return deleteAuthsession
        }
    async createAuthuser ( args: {
        select?: AuthuserSelect,
        data: AuthuserCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authuser> {
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
            const { createAuthuser } = await this.doMutation<Record<'createAuthuser', Authuser>, MutationCreateAuthuserArgs>(
                fillSelectedFields( CreateAuthuserMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateAuthuserArgs,
                { ...args.clientOptions }
            )
            return createAuthuser
        }
    async updateAuthuser ( args: {
        select?: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
        data: AuthuserUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authuser> {
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
            const { updateAuthuser } = await this.doMutation<Record<'updateAuthuser', Authuser>, MutationUpdateAuthuserArgs>(
                fillSelectedFields( UpdateAuthuserMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateAuthuserArgs,
                { ...args.clientOptions }
            )
            return updateAuthuser
        }
    async deleteAuthuser ( args: {
        select?: AuthuserSelect,
        where: AuthuserWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Authuser> {
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
            const { deleteAuthuser } = await this.doMutation<Record<'deleteAuthuser', Authuser>, MutationDeleteAuthuserArgs>(
                fillSelectedFields( DeleteAuthuserMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteAuthuserArgs,
                { ...args.clientOptions }
            )
            return deleteAuthuser
        }
    async createChat ( args: {
        select?: ChatSelect,
        data: ChatCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Chat> {
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
            const { createChat } = await this.doMutation<Record<'createChat', Chat>, MutationCreateChatArgs>(
                fillSelectedFields( CreateChatMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateChatArgs,
                { ...args.clientOptions }
            )
            return createChat
        }
    async updateChat ( args: {
        select?: ChatSelect,
        where: ChatWhereUniqueInput,
        data: ChatUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Chat> {
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
            const { updateChat } = await this.doMutation<Record<'updateChat', Chat>, MutationUpdateChatArgs>(
                fillSelectedFields( UpdateChatMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateChatArgs,
                { ...args.clientOptions }
            )
            return updateChat
        }
    async deleteChat ( args: {
        select?: ChatSelect,
        where: ChatWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Chat> {
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
            const { deleteChat } = await this.doMutation<Record<'deleteChat', Chat>, MutationDeleteChatArgs>(
                fillSelectedFields( DeleteChatMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteChatArgs,
                { ...args.clientOptions }
            )
            return deleteChat
        }
    async createComment ( args: {
        select?: CommentSelect,
        data: CommentCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Comment> {
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
            const { createComment } = await this.doMutation<Record<'createComment', Comment>, MutationCreateCommentArgs>(
                fillSelectedFields( CreateCommentMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateCommentArgs,
                { ...args.clientOptions }
            )
            return createComment
        }
    async updateComment ( args: {
        select?: CommentSelect,
        where: CommentWhereUniqueInput,
        data: CommentUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Comment> {
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
            const { updateComment } = await this.doMutation<Record<'updateComment', Comment>, MutationUpdateCommentArgs>(
                fillSelectedFields( UpdateCommentMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateCommentArgs,
                { ...args.clientOptions }
            )
            return updateComment
        }
    async deleteComment ( args: {
        select?: CommentSelect,
        where: CommentWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Comment> {
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
            const { deleteComment } = await this.doMutation<Record<'deleteComment', Comment>, MutationDeleteCommentArgs>(
                fillSelectedFields( DeleteCommentMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteCommentArgs,
                { ...args.clientOptions }
            )
            return deleteComment
        }
    async createConnection ( args: {
        select?: ConnectionSelect,
        data: ConnectionCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Connection> {
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
            const { createConnection } = await this.doMutation<Record<'createConnection', Connection>, MutationCreateConnectionArgs>(
                fillSelectedFields( CreateConnectionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateConnectionArgs,
                { ...args.clientOptions }
            )
            return createConnection
        }
    async updateConnection ( args: {
        select?: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
        data: ConnectionUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Connection> {
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
            const { updateConnection } = await this.doMutation<Record<'updateConnection', Connection>, MutationUpdateConnectionArgs>(
                fillSelectedFields( UpdateConnectionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateConnectionArgs,
                { ...args.clientOptions }
            )
            return updateConnection
        }
    async deleteConnection ( args: {
        select?: ConnectionSelect,
        where: ConnectionWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Connection> {
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
            const { deleteConnection } = await this.doMutation<Record<'deleteConnection', Connection>, MutationDeleteConnectionArgs>(
                fillSelectedFields( DeleteConnectionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteConnectionArgs,
                { ...args.clientOptions }
            )
            return deleteConnection
        }
    async createDatapermission ( args: {
        select?: DatapermissionSelect,
        data: DatapermissionCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Datapermission> {
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
            const { createDatapermission } = await this.doMutation<Record<'createDatapermission', Datapermission>, MutationCreateDatapermissionArgs>(
                fillSelectedFields( CreateDatapermissionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateDatapermissionArgs,
                { ...args.clientOptions }
            )
            return createDatapermission
        }
    async updateDatapermission ( args: {
        select?: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
        data: DatapermissionUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Datapermission> {
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
            const { updateDatapermission } = await this.doMutation<Record<'updateDatapermission', Datapermission>, MutationUpdateDatapermissionArgs>(
                fillSelectedFields( UpdateDatapermissionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateDatapermissionArgs,
                { ...args.clientOptions }
            )
            return updateDatapermission
        }
    async deleteDatapermission ( args: {
        select?: DatapermissionSelect,
        where: DatapermissionWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Datapermission> {
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
            const { deleteDatapermission } = await this.doMutation<Record<'deleteDatapermission', Datapermission>, MutationDeleteDatapermissionArgs>(
                fillSelectedFields( DeleteDatapermissionMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteDatapermissionArgs,
                { ...args.clientOptions }
            )
            return deleteDatapermission
        }
    async createDocumentfile ( args: {
        select?: DocumentfileSelect,
        data: DocumentfileCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Documentfile> {
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
            const { createDocumentfile } = await this.doMutation<Record<'createDocumentfile', Documentfile>, MutationCreateDocumentfileArgs>(
                fillSelectedFields( CreateDocumentfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateDocumentfileArgs,
                { ...args.clientOptions }
            )
            return createDocumentfile
        }
    async updateDocumentfile ( args: {
        select?: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
        data: DocumentfileUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Documentfile> {
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
            const { updateDocumentfile } = await this.doMutation<Record<'updateDocumentfile', Documentfile>, MutationUpdateDocumentfileArgs>(
                fillSelectedFields( UpdateDocumentfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateDocumentfileArgs,
                { ...args.clientOptions }
            )
            return updateDocumentfile
        }
    async deleteDocumentfile ( args: {
        select?: DocumentfileSelect,
        where: DocumentfileWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Documentfile> {
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
            const { deleteDocumentfile } = await this.doMutation<Record<'deleteDocumentfile', Documentfile>, MutationDeleteDocumentfileArgs>(
                fillSelectedFields( DeleteDocumentfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteDocumentfileArgs,
                { ...args.clientOptions }
            )
            return deleteDocumentfile
        }
    async createFaq ( args: {
        select?: FaqSelect,
        data: FaqCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Faq> {
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
            const { createFaq } = await this.doMutation<Record<'createFaq', Faq>, MutationCreateFaqArgs>(
                fillSelectedFields( CreateFaqMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateFaqArgs,
                { ...args.clientOptions }
            )
            return createFaq
        }
    async updateFaq ( args: {
        select?: FaqSelect,
        where: FaqWhereUniqueInput,
        data: FaqUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Faq> {
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
            const { updateFaq } = await this.doMutation<Record<'updateFaq', Faq>, MutationUpdateFaqArgs>(
                fillSelectedFields( UpdateFaqMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateFaqArgs,
                { ...args.clientOptions }
            )
            return updateFaq
        }
    async deleteFaq ( args: {
        select?: FaqSelect,
        where: FaqWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Faq> {
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
            const { deleteFaq } = await this.doMutation<Record<'deleteFaq', Faq>, MutationDeleteFaqArgs>(
                fillSelectedFields( DeleteFaqMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteFaqArgs,
                { ...args.clientOptions }
            )
            return deleteFaq
        }
    async createImagefile ( args: {
        select?: ImagefileSelect,
        data: ImagefileCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Imagefile> {
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
            const { createImagefile } = await this.doMutation<Record<'createImagefile', Imagefile>, MutationCreateImagefileArgs>(
                fillSelectedFields( CreateImagefileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateImagefileArgs,
                { ...args.clientOptions }
            )
            return createImagefile
        }
    async updateImagefile ( args: {
        select?: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
        data: ImagefileUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Imagefile> {
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
            const { updateImagefile } = await this.doMutation<Record<'updateImagefile', Imagefile>, MutationUpdateImagefileArgs>(
                fillSelectedFields( UpdateImagefileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateImagefileArgs,
                { ...args.clientOptions }
            )
            return updateImagefile
        }
    async deleteImagefile ( args: {
        select?: ImagefileSelect,
        where: ImagefileWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Imagefile> {
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
            const { deleteImagefile } = await this.doMutation<Record<'deleteImagefile', Imagefile>, MutationDeleteImagefileArgs>(
                fillSelectedFields( DeleteImagefileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteImagefileArgs,
                { ...args.clientOptions }
            )
            return deleteImagefile
        }
    async createInterest ( args: {
        select?: InterestSelect,
        data: InterestCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Interest> {
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
            const { createInterest } = await this.doMutation<Record<'createInterest', Interest>, MutationCreateInterestArgs>(
                fillSelectedFields( CreateInterestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateInterestArgs,
                { ...args.clientOptions }
            )
            return createInterest
        }
    async updateInterest ( args: {
        select?: InterestSelect,
        where: InterestWhereUniqueInput,
        data: InterestUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Interest> {
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
            const { updateInterest } = await this.doMutation<Record<'updateInterest', Interest>, MutationUpdateInterestArgs>(
                fillSelectedFields( UpdateInterestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateInterestArgs,
                { ...args.clientOptions }
            )
            return updateInterest
        }
    async deleteInterest ( args: {
        select?: InterestSelect,
        where: InterestWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Interest> {
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
            const { deleteInterest } = await this.doMutation<Record<'deleteInterest', Interest>, MutationDeleteInterestArgs>(
                fillSelectedFields( DeleteInterestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteInterestArgs,
                { ...args.clientOptions }
            )
            return deleteInterest
        }
    async createMessage ( args: {
        select?: MessageSelect,
        data: MessageCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Message> {
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
            const { createMessage } = await this.doMutation<Record<'createMessage', Message>, MutationCreateMessageArgs>(
                fillSelectedFields( CreateMessageMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateMessageArgs,
                { ...args.clientOptions }
            )
            return createMessage
        }
    async updateMessage ( args: {
        select?: MessageSelect,
        where: MessageWhereUniqueInput,
        data: MessageUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Message> {
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
            const { updateMessage } = await this.doMutation<Record<'updateMessage', Message>, MutationUpdateMessageArgs>(
                fillSelectedFields( UpdateMessageMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateMessageArgs,
                { ...args.clientOptions }
            )
            return updateMessage
        }
    async deleteMessage ( args: {
        select?: MessageSelect,
        where: MessageWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Message> {
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
            const { deleteMessage } = await this.doMutation<Record<'deleteMessage', Message>, MutationDeleteMessageArgs>(
                fillSelectedFields( DeleteMessageMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteMessageArgs,
                { ...args.clientOptions }
            )
            return deleteMessage
        }
    async createMimetype ( args: {
        select?: MimetypeSelect,
        data: MimetypeCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Mimetype> {
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
            const { createMimetype } = await this.doMutation<Record<'createMimetype', Mimetype>, MutationCreateMimetypeArgs>(
                fillSelectedFields( CreateMimetypeMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateMimetypeArgs,
                { ...args.clientOptions }
            )
            return createMimetype
        }
    async updateMimetype ( args: {
        select?: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
        data: MimetypeUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Mimetype> {
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
            const { updateMimetype } = await this.doMutation<Record<'updateMimetype', Mimetype>, MutationUpdateMimetypeArgs>(
                fillSelectedFields( UpdateMimetypeMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateMimetypeArgs,
                { ...args.clientOptions }
            )
            return updateMimetype
        }
    async deleteMimetype ( args: {
        select?: MimetypeSelect,
        where: MimetypeWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Mimetype> {
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
            const { deleteMimetype } = await this.doMutation<Record<'deleteMimetype', Mimetype>, MutationDeleteMimetypeArgs>(
                fillSelectedFields( DeleteMimetypeMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteMimetypeArgs,
                { ...args.clientOptions }
            )
            return deleteMimetype
        }
    async createProfile ( args: {
        select?: ProfileSelect,
        data: ProfileCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Profile> {
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
            const { createProfile } = await this.doMutation<Record<'createProfile', Profile>, MutationCreateProfileArgs>(
                fillSelectedFields( CreateProfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateProfileArgs,
                { ...args.clientOptions }
            )
            return createProfile
        }
    async updateProfile ( args: {
        select?: ProfileSelect,
        where: ProfileWhereUniqueInput,
        data: ProfileUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Profile> {
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
            const { updateProfile } = await this.doMutation<Record<'updateProfile', Profile>, MutationUpdateProfileArgs>(
                fillSelectedFields( UpdateProfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateProfileArgs,
                { ...args.clientOptions }
            )
            return updateProfile
        }
    async deleteProfile ( args: {
        select?: ProfileSelect,
        where: ProfileWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Profile> {
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
            const { deleteProfile } = await this.doMutation<Record<'deleteProfile', Profile>, MutationDeleteProfileArgs>(
                fillSelectedFields( DeleteProfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteProfileArgs,
                { ...args.clientOptions }
            )
            return deleteProfile
        }
    async createProject ( args: {
        select?: ProjectSelect,
        data: ProjectCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Project> {
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
            const { createProject } = await this.doMutation<Record<'createProject', Project>, MutationCreateProjectArgs>(
                fillSelectedFields( CreateProjectMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateProjectArgs,
                { ...args.clientOptions }
            )
            return createProject
        }
    async updateProject ( args: {
        select?: ProjectSelect,
        where: ProjectWhereUniqueInput,
        data: ProjectUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Project> {
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
            const { updateProject } = await this.doMutation<Record<'updateProject', Project>, MutationUpdateProjectArgs>(
                fillSelectedFields( UpdateProjectMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateProjectArgs,
                { ...args.clientOptions }
            )
            return updateProject
        }
    async deleteProject ( args: {
        select?: ProjectSelect,
        where: ProjectWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Project> {
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
            const { deleteProject } = await this.doMutation<Record<'deleteProject', Project>, MutationDeleteProjectArgs>(
                fillSelectedFields( DeleteProjectMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteProjectArgs,
                { ...args.clientOptions }
            )
            return deleteProject
        }
    async createRegistration ( args: {
        select?: RegistrationSelect,
        data: RegistrationCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Registration> {
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
            const { createRegistration } = await this.doMutation<Record<'createRegistration', Registration>, MutationCreateRegistrationArgs>(
                fillSelectedFields( CreateRegistrationMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateRegistrationArgs,
                { ...args.clientOptions }
            )
            return createRegistration
        }
    async updateRegistration ( args: {
        select?: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
        data: RegistrationUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Registration> {
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
            const { updateRegistration } = await this.doMutation<Record<'updateRegistration', Registration>, MutationUpdateRegistrationArgs>(
                fillSelectedFields( UpdateRegistrationMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateRegistrationArgs,
                { ...args.clientOptions }
            )
            return updateRegistration
        }
    async deleteRegistration ( args: {
        select?: RegistrationSelect,
        where: RegistrationWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Registration> {
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
            const { deleteRegistration } = await this.doMutation<Record<'deleteRegistration', Registration>, MutationDeleteRegistrationArgs>(
                fillSelectedFields( DeleteRegistrationMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteRegistrationArgs,
                { ...args.clientOptions }
            )
            return deleteRegistration
        }
    async createRequest ( args: {
        select?: RequestSelect,
        data: RequestCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Request> {
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
            const { createRequest } = await this.doMutation<Record<'createRequest', Request>, MutationCreateRequestArgs>(
                fillSelectedFields( CreateRequestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateRequestArgs,
                { ...args.clientOptions }
            )
            return createRequest
        }
    async updateRequest ( args: {
        select?: RequestSelect,
        where: RequestWhereUniqueInput,
        data: RequestUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Request> {
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
            const { updateRequest } = await this.doMutation<Record<'updateRequest', Request>, MutationUpdateRequestArgs>(
                fillSelectedFields( UpdateRequestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateRequestArgs,
                { ...args.clientOptions }
            )
            return updateRequest
        }
    async deleteRequest ( args: {
        select?: RequestSelect,
        where: RequestWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Request> {
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
            const { deleteRequest } = await this.doMutation<Record<'deleteRequest', Request>, MutationDeleteRequestArgs>(
                fillSelectedFields( DeleteRequestMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteRequestArgs,
                { ...args.clientOptions }
            )
            return deleteRequest
        }
    async createSkill ( args: {
        select?: SkillSelect,
        data: SkillCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Skill> {
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
            const { createSkill } = await this.doMutation<Record<'createSkill', Skill>, MutationCreateSkillArgs>(
                fillSelectedFields( CreateSkillMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateSkillArgs,
                { ...args.clientOptions }
            )
            return createSkill
        }
    async updateSkill ( args: {
        select?: SkillSelect,
        where: SkillWhereUniqueInput,
        data: SkillUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Skill> {
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
            const { updateSkill } = await this.doMutation<Record<'updateSkill', Skill>, MutationUpdateSkillArgs>(
                fillSelectedFields( UpdateSkillMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateSkillArgs,
                { ...args.clientOptions }
            )
            return updateSkill
        }
    async deleteSkill ( args: {
        select?: SkillSelect,
        where: SkillWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Skill> {
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
            const { deleteSkill } = await this.doMutation<Record<'deleteSkill', Skill>, MutationDeleteSkillArgs>(
                fillSelectedFields( DeleteSkillMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteSkillArgs,
                { ...args.clientOptions }
            )
            return deleteSkill
        }
    async createSoundfile ( args: {
        select?: SoundfileSelect,
        data: SoundfileCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Soundfile> {
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
            const { createSoundfile } = await this.doMutation<Record<'createSoundfile', Soundfile>, MutationCreateSoundfileArgs>(
                fillSelectedFields( CreateSoundfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateSoundfileArgs,
                { ...args.clientOptions }
            )
            return createSoundfile
        }
    async updateSoundfile ( args: {
        select?: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
        data: SoundfileUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Soundfile> {
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
            const { updateSoundfile } = await this.doMutation<Record<'updateSoundfile', Soundfile>, MutationUpdateSoundfileArgs>(
                fillSelectedFields( UpdateSoundfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateSoundfileArgs,
                { ...args.clientOptions }
            )
            return updateSoundfile
        }
    async deleteSoundfile ( args: {
        select?: SoundfileSelect,
        where: SoundfileWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Soundfile> {
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
            const { deleteSoundfile } = await this.doMutation<Record<'deleteSoundfile', Soundfile>, MutationDeleteSoundfileArgs>(
                fillSelectedFields( DeleteSoundfileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteSoundfileArgs,
                { ...args.clientOptions }
            )
            return deleteSoundfile
        }
    async createTrigger ( args: {
        select?: TriggerSelect,
        data: TriggerCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Trigger> {
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
            const { createTrigger } = await this.doMutation<Record<'createTrigger', Trigger>, MutationCreateTriggerArgs>(
                fillSelectedFields( CreateTriggerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateTriggerArgs,
                { ...args.clientOptions }
            )
            return createTrigger
        }
    async updateTrigger ( args: {
        select?: TriggerSelect,
        where: TriggerWhereUniqueInput,
        data: TriggerUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Trigger> {
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
            const { updateTrigger } = await this.doMutation<Record<'updateTrigger', Trigger>, MutationUpdateTriggerArgs>(
                fillSelectedFields( UpdateTriggerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateTriggerArgs,
                { ...args.clientOptions }
            )
            return updateTrigger
        }
    async deleteTrigger ( args: {
        select?: TriggerSelect,
        where: TriggerWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Trigger> {
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
            const { deleteTrigger } = await this.doMutation<Record<'deleteTrigger', Trigger>, MutationDeleteTriggerArgs>(
                fillSelectedFields( DeleteTriggerMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteTriggerArgs,
                { ...args.clientOptions }
            )
            return deleteTrigger
        }
    async createVideo ( args: {
        select?: VideoSelect,
        data: VideoCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Video> {
        const CreateVideoMutation: string = `
            mutation CreateVideo (
                $data: VideoCreateInput!,
            ) {
                createVideo (
                    data: $data,
                ) {
                    #@@
                }
            }
            `
            const { createVideo } = await this.doMutation<Record<'createVideo', Video>, MutationCreateVideoArgs>(
                fillSelectedFields( CreateVideoMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateVideoArgs,
                { ...args.clientOptions }
            )
            return createVideo
        }
    async updateVideo ( args: {
        select?: VideoSelect,
        where: VideoWhereUniqueInput,
        data: VideoUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Video> {
        const UpdateVideoMutation: string = `
            mutation UpdateVideo (
                $where: VideoWhereUniqueInput!,
                $data: VideoUpdateInput!,
            ) {
                updateVideo (
                    where: $where,
                    data: $data,
                ) {
                    #@@
                }
            }
            `
            const { updateVideo } = await this.doMutation<Record<'updateVideo', Video>, MutationUpdateVideoArgs>(
                fillSelectedFields( UpdateVideoMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateVideoArgs,
                { ...args.clientOptions }
            )
            return updateVideo
        }
    async deleteVideo ( args: {
        select?: VideoSelect,
        where: VideoWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Video> {
        const DeleteVideoMutation: string = `
            mutation DeleteVideo (
                $where: VideoWhereUniqueInput!,
            ) {
                deleteVideo (
                    where: $where,
                ) {
                    #@@
                }
            }
            `
            const { deleteVideo } = await this.doMutation<Record<'deleteVideo', Video>, MutationDeleteVideoArgs>(
                fillSelectedFields( DeleteVideoMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteVideoArgs,
                { ...args.clientOptions }
            )
            return deleteVideo
        }
    async createVideofile ( args: {
        select?: VideofileSelect,
        data: VideofileCreateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Videofile> {
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
            const { createVideofile } = await this.doMutation<Record<'createVideofile', Videofile>, MutationCreateVideofileArgs>(
                fillSelectedFields( CreateVideofileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationCreateVideofileArgs,
                { ...args.clientOptions }
            )
            return createVideofile
        }
    async updateVideofile ( args: {
        select?: VideofileSelect,
        where: VideofileWhereUniqueInput,
        data: VideofileUpdateInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Videofile> {
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
            const { updateVideofile } = await this.doMutation<Record<'updateVideofile', Videofile>, MutationUpdateVideofileArgs>(
                fillSelectedFields( UpdateVideofileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationUpdateVideofileArgs,
                { ...args.clientOptions }
            )
            return updateVideofile
        }
    async deleteVideofile ( args: {
        select?: VideofileSelect,
        where: VideofileWhereUniqueInput,
        clientOptions?: MutationClientOptions
    } ): Promise<Videofile> {
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
            const { deleteVideofile } = await this.doMutation<Record<'deleteVideofile', Videofile>, MutationDeleteVideofileArgs>(
                fillSelectedFields( DeleteVideofileMutation, args.select || { id: true } ),
                Object.fromEntries( Object.entries( args ).filter( ( [ k, v ] ) =>  v !== null && k !== 'select' && k !== 'clientOptions' ) ) as MutationDeleteVideofileArgs,
                { ...args.clientOptions }
            )
            return deleteVideofile
        }
}


// ScalarsClientManager

export type TokenFunction = ()=> string
export type FetchFunction = ( uri: string, options: any )=> Promise<any>

type ApolloClients = {
    [key in ClientType]: {
        client: ApolloClient<NormalizedCacheObject>|null
        fetch?: FetchFunction
        credentials?: string
        token?: string
    }
}

export class ScalarsClientManager {
    private readonly apolloClients: ApolloClients
    private readonly defaultClientType: ClientType
    private readonly cache: InMemoryCache
    private readonly uri: string

    constructor ( uri: string, getToken: TokenFunction, defaultClientType: ClientType = ClientType.COOKIE ) {
        if ( !uri ) {
            throw new Error( 'URI is empty' )
        }
        this.defaultClientType = defaultClientType;
        this.uri = uri;
        this.cache = new InMemoryCache( { addTypename: false } )
        this.apolloClients = {
            [ClientType.CLIENT]: {
                client: null,
                credentials: 'omit',
                token: getToken()
            },
            [ClientType.COOKIE]: {
                client: null,
                credentials: 'include'
            }
        }
    }

    getClient ( name: ClientType = this.defaultClientType, ssrMode: boolean = false ): ApolloClient<NormalizedCacheObject> {
        const apolloClient = this.apolloClients[name]
        if ( apolloClient && !apolloClient.client) {
            const { credentials, token } = apolloClient
            let authLink: ApolloLink | undefined;
            if ( token ) {
                authLink = setContext( ( _, { headers } ) => {
                    return {
                        headers: { ...headers, Authorization: token }
                    }
                } )
            }
            const httpLink = new HttpLink( {
                uri: this.uri,
                credentials,
                fetch: fetch as any,
                fetchOptions: {
                    credentials
                }
            } )
            apolloClient.client = new ApolloClient<NormalizedCacheObject>( {
                link: authLink ? authLink.concat( httpLink ) : httpLink,
                cache: this.cache,
                ssrMode
            } )
        }
        return apolloClient.client as ApolloClient<NormalizedCacheObject>
    }
}

// ScalarsClient

export interface ScalarsClientConfig {
    endpoint: string
    authorization: TokenFunction
}

export class ScalarsClient {
    private readonly queriesService: QueriesService
    private readonly mutationsService: MutationsService
    private readonly genericService: Service

    constructor( config: ScalarsClientConfig ) {
        this.queriesService = new QueriesService( config )
        this.mutationsService = new MutationsService( config )
        this.genericService = new Service( config )
    }

    get query () {
        return this.queriesService
    }

    get mutation () {
        return this.mutationsService
    }

    async doQuery ( query: string, variables: Record<string, any>, clientOptions?: ClientOptions ): Promise<Record<string, any>> {
        return await this.genericService.doQuery<Record<string, any >, Record<string, any>>( gql`${query}`, variables, clientOptions )
    }

    async doMutation ( mutation: string, variables: Record<string, any>, clientOptions?: MutationClientOptions ): Promise<Record<string, any>> {
        return await this.genericService.doMutation<Record<string, any >, Record<string, any>>( gql`${mutation}`, variables, clientOptions )
    }
}
