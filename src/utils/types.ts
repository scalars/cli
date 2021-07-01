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
  domains?: Maybe<AppclientDomainsCreateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<AppclientRedirect_UriCreateInput>;
  scopes?: Maybe<AppclientScopesCreateInput>;
  userPool?: Maybe<Scalars['Json']>;
};

export type AppclientCreateOneInput = {
  create?: Maybe<AppclientCreateInput>;
  connect?: Maybe<AppclientWhereUniqueInput>;
};

export type AppclientDomainsCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientDomainsUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type AppclientRedirect_UriCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientRedirect_UriUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppclientScopesCreateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
};

export type AppclientScopesUpdateInput = {
  set?: Maybe<Array<Maybe<Clientscope>>>;
};

export type AppclientUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  client_id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  client_type?: Maybe<Clienttype>;
  datapermissions?: Maybe<DatapermissionUpdateManyWithoutAppclientInput>;
  domains?: Maybe<AppclientDomainsUpdateInput>;
  grant_type?: Maybe<Granttype>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Json']>;
  providers?: Maybe<Scalars['Json']>;
  redirect_uri?: Maybe<AppclientRedirect_UriUpdateInput>;
  scopes?: Maybe<AppclientScopesUpdateInput>;
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
  domains?: Maybe<Scalars['String']>;
  domains_eq?: Maybe<Scalars['String']>;
  domains_neq?: Maybe<Scalars['String']>;
  domains_contains?: Maybe<Scalars['String']>;
  domains_notcontains?: Maybe<Scalars['String']>;
  domains_in?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  redirect_uri?: Maybe<Scalars['String']>;
  redirect_uri_eq?: Maybe<Scalars['String']>;
  redirect_uri_neq?: Maybe<Scalars['String']>;
  redirect_uri_contains?: Maybe<Scalars['String']>;
  redirect_uri_notcontains?: Maybe<Scalars['String']>;
  redirect_uri_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  scopes?: Maybe<Clientscope>;
  scopes_eq?: Maybe<Clientscope>;
  scopes_neq?: Maybe<Clientscope>;
  scopes_contains?: Maybe<Scalars['String']>;
  scopes_notcontains?: Maybe<Scalars['String']>;
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
  where?: Maybe<MimetypeWhereInput>;
};


export type AssetsconfigMimeTypesArgs = {
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
};


export type AuthroleAuthusersArgs = {
  where?: Maybe<AuthuserWhereInput>;
};


export type AuthroleDatapermissionsArgs = {
  where?: Maybe<DatapermissionWhereInput>;
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
  scopes?: Maybe<AuthroleScopesCreateInput>;
};

export type AuthroleCreateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
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

export type AuthroleScopesCreateInput = {
  set?: Maybe<Array<Maybe<Rolescope>>>;
};

export type AuthroleScopesUpdateInput = {
  set?: Maybe<Array<Maybe<Rolescope>>>;
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
  scopes?: Maybe<AuthroleScopesUpdateInput>;
};

export type AuthroleUpdateOneInput = {
  create?: Maybe<AuthroleCreateInput>;
  connect?: Maybe<AuthroleWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
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
  scopes?: Maybe<Rolescope>;
  scopes_eq?: Maybe<Rolescope>;
  scopes_neq?: Maybe<Rolescope>;
  scopes_contains?: Maybe<Scalars['String']>;
  scopes_notcontains?: Maybe<Scalars['String']>;
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
};


export type AuthuserSessionsArgs = {
  where?: Maybe<AuthsessionWhereInput>;
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
};

export type AuthuserCreateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<AuthuserCreateWithoutAuthroleInput>>>;
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
};

export type AuthuserUpdateManyWithoutAuthroleInput = {
  create?: Maybe<Array<Maybe<AuthuserUpdateWithoutAuthroleInput>>>;
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
};


export type ChatUsersArgs = {
  where?: Maybe<ProfileWhereInput>;
};


export type ChatMessagesArgs = {
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
};

export type ChatCreateManyWithoutUsersInput = {
  create?: Maybe<Array<Maybe<ChatCreateWithoutUsersInput>>>;
  connect?: Maybe<Array<Maybe<ChatWhereUniqueInput>>>;
};

export type ChatCreateOneInput = {
  create?: Maybe<ChatCreateInput>;
  connect?: Maybe<ChatWhereUniqueInput>;
};

export type ChatCreateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageCreateManyInput>;
  type?: Maybe<Chattype>;
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

export type ChatUpdateWithoutUsersInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<MessageUpdateManyInput>;
  type?: Maybe<Chattype>;
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

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code: Scalars['String'];
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  totalCount: Scalars['Int'];
};

export type CountryCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CountryOrderInput = {
  id?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
  createdAt?: Maybe<OrderByEnum>;
  name?: Maybe<OrderByEnum>;
  code?: Maybe<OrderByEnum>;
};

export type CountryUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CountryWhereInput = {
  OR?: Maybe<Array<CountryWhereInput>>;
  AND?: Maybe<Array<CountryWhereInput>>;
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
  code?: Maybe<Scalars['String']>;
  code_eq?: Maybe<Scalars['String']>;
  code_neq?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_notcontains?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CountryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
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
};

export type DatapermissionAttributesCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type DatapermissionAttributesUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
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
  attributes?: Maybe<DatapermissionAttributesCreateInput>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
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
  attributes?: Maybe<DatapermissionAttributesCreateInput>;
  authrole?: Maybe<AuthroleCreateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
};

export type DatapermissionCreateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientCreateOneInput>;
  attributes?: Maybe<DatapermissionAttributesCreateInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
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
};

export type DatapermissionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientUpdateOneInput>;
  attributes?: Maybe<DatapermissionAttributesUpdateInput>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
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
  attributes?: Maybe<DatapermissionAttributesUpdateInput>;
  authrole?: Maybe<AuthroleUpdateOneInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
};

export type DatapermissionUpdateWithoutAuthroleInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  action?: Maybe<Actiontype>;
  appclient?: Maybe<AppclientUpdateOneInput>;
  attributes?: Maybe<DatapermissionAttributesUpdateInput>;
  entity?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Json']>;
  str?: Maybe<Scalars['String']>;
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
  attributes_object?: Maybe<Scalars['Json']>;
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
  extensions?: Maybe<MimetypeExtensionsCreateInput>;
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

export type MimetypeExtensionsCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MimetypeExtensionsUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  extensions?: Maybe<MimetypeExtensionsUpdateInput>;
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
  extensions?: Maybe<Scalars['String']>;
  extensions_eq?: Maybe<Scalars['String']>;
  extensions_neq?: Maybe<Scalars['String']>;
  extensions_contains?: Maybe<Scalars['String']>;
  extensions_notcontains?: Maybe<Scalars['String']>;
  extensions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  createCountry: Country;
  updateCountry: Country;
  deleteCountry: Country;
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


export type MutationCreateCountryArgs = {
  data: CountryCreateInput;
};


export type MutationUpdateCountryArgs = {
  where: CountryWhereUniqueInput;
  data: CountryUpdateInput;
};


export type MutationDeleteCountryArgs = {
  where: CountryWhereUniqueInput;
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

export enum Notificationactiontype {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE'
}

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
};


export type ProfileProfile_UsersFromChatFkArgs = {
  where?: Maybe<ChatWhereInput>;
};


export type ProfileProfile_SeenFromMessageFkArgs = {
  where?: Maybe<MessageWhereInput>;
};


export type ProfileSentConnectionsArgs = {
  where?: Maybe<ConnectionWhereInput>;
};


export type ProfileReceivedConnectionsArgs = {
  where?: Maybe<ConnectionWhereInput>;
};


export type ProfileInvitationsArgs = {
  where?: Maybe<RequestWhereInput>;
};


export type ProfileRequestsArgs = {
  where?: Maybe<RequestWhereInput>;
};


export type ProfileFounder_ProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
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
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Videofile>;
  categories?: Maybe<Scalars['Json']>;
  requests: Array<Request>;
  comments: Array<Comment>;
  founders: Array<Profile>;
  chat?: Maybe<Chat>;
  avatar?: Maybe<Imagefile>;
  location?: Maybe<Scalars['Json']>;
};


export type ProjectRequestsArgs = {
  where?: Maybe<RequestWhereInput>;
};


export type ProjectCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type ProjectFoundersArgs = {
  where?: Maybe<ProfileWhereInput>;
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
  chat?: Maybe<ChatCreateOneInput>;
  avatar?: Maybe<ImagefileCreateOneInput>;
  location?: Maybe<Scalars['Json']>;
};

export type ProjectCreateManyWithoutFoundersInput = {
  create?: Maybe<Array<Maybe<ProjectCreateWithoutFoundersInput>>>;
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
};

export type ProjectCreateOneInput = {
  create?: Maybe<ProjectCreateInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
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
  chat?: Maybe<ChatUpdateOneInput>;
  avatar?: Maybe<ImagefileUpdateOneInput>;
  location?: Maybe<Scalars['Json']>;
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
  country: Country;
  countries: Array<Country>;
  countriesConnection: CountryConnection;
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


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryCountriesArgs = {
  where?: Maybe<CountryWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderBy?: Maybe<CountryOrderInput>;
};


export type QueryCountriesConnectionArgs = {
  where?: Maybe<CountryWhereInput>;
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

export type TriggerActionsCreateInput = {
  set?: Maybe<Array<Maybe<Notificationactiontype>>>;
};

export type TriggerActionsUpdateInput = {
  set?: Maybe<Array<Maybe<Notificationactiontype>>>;
};

export type TriggerConnection = {
  __typename?: 'TriggerConnection';
  totalCount: Scalars['Int'];
};

export type TriggerCreateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entity?: Maybe<Scalars['String']>;
  resolvers?: Maybe<TriggerResolversCreateInput>;
  functions?: Maybe<TriggerFunctionsCreateInput>;
  actions?: Maybe<TriggerActionsCreateInput>;
};

export type TriggerFunctionsCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
};

export type TriggerFunctionsUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['Json']>>>;
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

export type TriggerResolversCreateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TriggerResolversUpdateInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TriggerUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entity?: Maybe<Scalars['String']>;
  resolvers?: Maybe<TriggerResolversUpdateInput>;
  functions?: Maybe<TriggerFunctionsUpdateInput>;
  actions?: Maybe<TriggerActionsUpdateInput>;
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
  resolvers?: Maybe<Scalars['String']>;
  resolvers_eq?: Maybe<Scalars['String']>;
  resolvers_neq?: Maybe<Scalars['String']>;
  resolvers_contains?: Maybe<Scalars['String']>;
  resolvers_notcontains?: Maybe<Scalars['String']>;
  resolvers_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  functions_object?: Maybe<Scalars['Json']>;
  actions?: Maybe<Notificationactiontype>;
  actions_eq?: Maybe<Notificationactiontype>;
  actions_neq?: Maybe<Notificationactiontype>;
  actions_contains?: Maybe<Scalars['String']>;
  actions_notcontains?: Maybe<Scalars['String']>;
};

export type TriggerWhereUniqueInput = {
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
