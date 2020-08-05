export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   * 
   *     This scalar should never make it into production. It is used as a placeholder for situations
   *     where GraphQL Nexus encounters a missing type. We don't want to error immedately, otherwise
   *     the TypeScript definitions will not be updated.
   *   
   */
  NEXUS__UNKNOWN__TYPE: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { [key: string]: any };
};

export type IQuery = {
  __typename?: 'Query';
  app?: Maybe<IApp>;
  apps: Array<IApp>;
  appSubscription?: Maybe<IAppSubscription>;
  appSubscriptions: Array<IAppSubscription>;
  botUser?: Maybe<IBotUser>;
  botUsers: Array<IBotUser>;
  clientSecret?: Maybe<IClientSecret>;
  clientSecrets: Array<IClientSecret>;
  subscribeToken?: Maybe<ISubscribeToken>;
  subscribeTokens: Array<ISubscribeToken>;
  whoAmI: IUserAccount;
  userAccount?: Maybe<IUserAccount>;
  userAccounts: Array<IUserAccount>;
};


export type IQueryAppArgs = {
  where: IAppWhereUniqueInput;
};


export type IQueryAppsArgs = {
  where?: Maybe<IAppWhereInput>;
  orderBy?: Maybe<IAppOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppWhereUniqueInput>;
  after?: Maybe<IAppWhereUniqueInput>;
};


export type IQueryAppSubscriptionArgs = {
  where: IAppSubscriptionWhereUniqueInput;
};


export type IQueryAppSubscriptionsArgs = {
  where?: Maybe<IAppSubscriptionWhereInput>;
  orderBy?: Maybe<IAppSubscriptionOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppSubscriptionWhereUniqueInput>;
  after?: Maybe<IAppSubscriptionWhereUniqueInput>;
};


export type IQueryBotUserArgs = {
  where: IBotUserWhereUniqueInput;
};


export type IQueryBotUsersArgs = {
  where?: Maybe<IBotUserWhereInput>;
  orderBy?: Maybe<IBotUserOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IBotUserWhereUniqueInput>;
  after?: Maybe<IBotUserWhereUniqueInput>;
};


export type IQueryClientSecretArgs = {
  where: IClientSecretWhereUniqueInput;
};


export type IQueryClientSecretsArgs = {
  where?: Maybe<IClientSecretWhereInput>;
  orderBy?: Maybe<IClientSecretOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IClientSecretWhereUniqueInput>;
  after?: Maybe<IClientSecretWhereUniqueInput>;
};


export type IQuerySubscribeTokenArgs = {
  where: ISubscribeTokenWhereUniqueInput;
};


export type IQuerySubscribeTokensArgs = {
  where?: Maybe<ISubscribeTokenWhereInput>;
  orderBy?: Maybe<ISubscribeTokenOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<ISubscribeTokenWhereUniqueInput>;
  after?: Maybe<ISubscribeTokenWhereUniqueInput>;
};


export type IQueryUserAccountArgs = {
  where: IUserAccountWhereUniqueInput;
};


export type IQueryUserAccountsArgs = {
  where?: Maybe<IUserAccountWhereInput>;
  orderBy?: Maybe<IUserAccountOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IUserAccountWhereUniqueInput>;
  after?: Maybe<IUserAccountWhereUniqueInput>;
};

export type IAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name_ownerId?: Maybe<INameOwnerIdCompoundUniqueInput>;
};

export type INameOwnerIdCompoundUniqueInput = {
  name: Scalars['String'];
  ownerId: Scalars['Int'];
};

export type IApp = {
  __typename?: 'App';
  id: Scalars['Int'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  owner: IUserAccount;
  subscribeTokens: Array<ISubscribeToken>;
  appSubscriptions: Array<IAppSubscription>;
  clientSecrets: Array<IClientSecret>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  subscribeTokenCount: Scalars['Int'];
  appSubscriptionCount: Scalars['Int'];
};


export type IAppSubscribeTokensArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<ISubscribeTokenWhereUniqueInput>;
  after?: Maybe<ISubscribeTokenWhereUniqueInput>;
};


export type IAppAppSubscriptionsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppSubscriptionWhereUniqueInput>;
  after?: Maybe<IAppSubscriptionWhereUniqueInput>;
};


export type IAppClientSecretsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IClientSecretWhereUniqueInput>;
  after?: Maybe<IClientSecretWhereUniqueInput>;
};

export type IUserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role: IRole;
  botUsers: Array<IBotUser>;
  apps: Array<IApp>;
  appSubscriptions: Array<IAppSubscription>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  requiresSetup: Scalars['Boolean'];
};


export type IUserAccountBotUsersArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IBotUserWhereUniqueInput>;
  after?: Maybe<IBotUserWhereUniqueInput>;
};


export type IUserAccountAppsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppWhereUniqueInput>;
  after?: Maybe<IAppWhereUniqueInput>;
};


export type IUserAccountAppSubscriptionsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppSubscriptionWhereUniqueInput>;
  after?: Maybe<IAppSubscriptionWhereUniqueInput>;
};

export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type IBotUserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  botUser_botId?: Maybe<IBotUserBotIdCompoundUniqueInput>;
};

export type IBotUserBotIdCompoundUniqueInput = {
  botUser: Scalars['String'];
  botId: Scalars['Int'];
};

export type IBotUser = {
  __typename?: 'BotUser';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  botUser: Scalars['String'];
  botId: Scalars['Int'];
  bot: IBot;
  userAccountId: Scalars['Int'];
  userAccount: IUserAccount;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  requiresSetup: Scalars['Boolean'];
};

export type IBot = {
  __typename?: 'Bot';
  id: Scalars['Int'];
  type: IBotType;
  botUsers: Array<IBotUser>;
  appSubscriptions: Array<IAppSubscription>;
};


export type IBotBotUsersArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IBotUserWhereUniqueInput>;
  after?: Maybe<IBotUserWhereUniqueInput>;
};


export type IBotAppSubscriptionsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<IAppSubscriptionWhereUniqueInput>;
  after?: Maybe<IAppSubscriptionWhereUniqueInput>;
};

export enum IBotType {
  SLACK = 'SLACK',
  TELEGRAM = 'TELEGRAM'
}

export type IAppSubscriptionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name_appId?: Maybe<INameAppIdCompoundUniqueInput>;
  appId_botId_channel?: Maybe<IAppIdBotIdChannelCompoundUniqueInput>;
};

export type INameAppIdCompoundUniqueInput = {
  name: Scalars['String'];
  appId: Scalars['Int'];
};

export type IAppIdBotIdChannelCompoundUniqueInput = {
  appId: Scalars['Int'];
  botId: Scalars['Int'];
  channel: Scalars['String'];
};

export type IAppSubscription = {
  __typename?: 'AppSubscription';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  appId: Scalars['Int'];
  app: IApp;
  subscriberId: Scalars['Int'];
  subscriber: IUserAccount;
  botId: Scalars['Int'];
  bot: IBot;
  channel: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ISubscribeTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  description_appId?: Maybe<IDescriptionAppIdCompoundUniqueInput>;
};

export type IDescriptionAppIdCompoundUniqueInput = {
  description: Scalars['String'];
  appId: Scalars['Int'];
};

export type ISubscribeToken = {
  __typename?: 'SubscribeToken';
  id: Scalars['Int'];
  description: Scalars['String'];
  token: Scalars['String'];
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type IClientSecretWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  secret?: Maybe<Scalars['String']>;
  environment_appId?: Maybe<IEnvironmentAppIdCompoundUniqueInput>;
};

export type IEnvironmentAppIdCompoundUniqueInput = {
  environment: IEnvironment;
  appId: Scalars['Int'];
};

export enum IEnvironment {
  DEVELOPMENT = 'DEVELOPMENT',
  TEST = 'TEST',
  PRODUCTION = 'PRODUCTION'
}

export type IClientSecret = {
  __typename?: 'ClientSecret';
  id: Scalars['Int'];
  environment: IEnvironment;
  secret: Scalars['String'];
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type IAppWhereInput = {
  id?: Maybe<IIntFilter>;
  name?: Maybe<IStringFilter>;
  ownerId?: Maybe<IIntFilter>;
  subscribeTokens?: Maybe<ISubscribeTokenFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  clientSecrets?: Maybe<IClientSecretFilter>;
  AppLog?: Maybe<IAppLogFilter>;
  AppEvent?: Maybe<IAppEventFilter>;
  appStatus?: Maybe<IAppStatusFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppWhereInput>>;
  OR?: Maybe<Array<IAppWhereInput>>;
  NOT?: Maybe<Array<IAppWhereInput>>;
  owner?: Maybe<IUserAccountWhereInput>;
};

export type IIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type IStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type ISubscribeTokenFilter = {
  every?: Maybe<ISubscribeTokenWhereInput>;
  some?: Maybe<ISubscribeTokenWhereInput>;
  none?: Maybe<ISubscribeTokenWhereInput>;
};

export type ISubscribeTokenWhereInput = {
  id?: Maybe<IIntFilter>;
  description?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  token?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<ISubscribeTokenWhereInput>>;
  OR?: Maybe<Array<ISubscribeTokenWhereInput>>;
  NOT?: Maybe<Array<ISubscribeTokenWhereInput>>;
  app?: Maybe<IAppWhereInput>;
};

export type IDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type IAppSubscriptionFilter = {
  every?: Maybe<IAppSubscriptionWhereInput>;
  some?: Maybe<IAppSubscriptionWhereInput>;
  none?: Maybe<IAppSubscriptionWhereInput>;
};

export type IAppSubscriptionWhereInput = {
  id?: Maybe<IIntFilter>;
  name?: Maybe<IStringFilter>;
  customName?: Maybe<INullableStringFilter>;
  description?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  subscriberId?: Maybe<IIntFilter>;
  botId?: Maybe<IIntFilter>;
  channel?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppSubscriptionWhereInput>>;
  OR?: Maybe<Array<IAppSubscriptionWhereInput>>;
  NOT?: Maybe<Array<IAppSubscriptionWhereInput>>;
  app?: Maybe<IAppWhereInput>;
  subscriber?: Maybe<IUserAccountWhereInput>;
  bot?: Maybe<IBotWhereInput>;
};

export type INullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type IUserAccountWhereInput = {
  id?: Maybe<IIntFilter>;
  nickname?: Maybe<INullableStringFilter>;
  name?: Maybe<INullableStringFilter>;
  email?: Maybe<INullableStringFilter>;
  password?: Maybe<INullableStringFilter>;
  role?: Maybe<IRole>;
  botUsers?: Maybe<IBotUserFilter>;
  apps?: Maybe<IAppFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IUserAccountWhereInput>>;
  OR?: Maybe<Array<IUserAccountWhereInput>>;
  NOT?: Maybe<Array<IUserAccountWhereInput>>;
};

export type IBotUserFilter = {
  every?: Maybe<IBotUserWhereInput>;
  some?: Maybe<IBotUserWhereInput>;
  none?: Maybe<IBotUserWhereInput>;
};

export type IBotUserWhereInput = {
  id?: Maybe<IIntFilter>;
  name?: Maybe<INullableStringFilter>;
  botUser?: Maybe<IStringFilter>;
  botId?: Maybe<IIntFilter>;
  userAccountId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IBotUserWhereInput>>;
  OR?: Maybe<Array<IBotUserWhereInput>>;
  NOT?: Maybe<Array<IBotUserWhereInput>>;
  bot?: Maybe<IBotWhereInput>;
  userAccount?: Maybe<IUserAccountWhereInput>;
};

export type IBotWhereInput = {
  id?: Maybe<IIntFilter>;
  type?: Maybe<IBotType>;
  botUsers?: Maybe<IBotUserFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  AND?: Maybe<Array<IBotWhereInput>>;
  OR?: Maybe<Array<IBotWhereInput>>;
  NOT?: Maybe<Array<IBotWhereInput>>;
};

export type IAppFilter = {
  every?: Maybe<IAppWhereInput>;
  some?: Maybe<IAppWhereInput>;
  none?: Maybe<IAppWhereInput>;
};

export type IClientSecretFilter = {
  every?: Maybe<IClientSecretWhereInput>;
  some?: Maybe<IClientSecretWhereInput>;
  none?: Maybe<IClientSecretWhereInput>;
};

export type IClientSecretWhereInput = {
  id?: Maybe<IIntFilter>;
  environment?: Maybe<IEnvironment>;
  secret?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IClientSecretWhereInput>>;
  OR?: Maybe<Array<IClientSecretWhereInput>>;
  NOT?: Maybe<Array<IClientSecretWhereInput>>;
  app?: Maybe<IAppWhereInput>;
};

export type IAppLogFilter = {
  every?: Maybe<IAppLogWhereInput>;
  some?: Maybe<IAppLogWhereInput>;
  none?: Maybe<IAppLogWhereInput>;
};

export type IAppLogWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppLogWhereInput>>;
  OR?: Maybe<Array<IAppLogWhereInput>>;
  NOT?: Maybe<Array<IAppLogWhereInput>>;
  app?: Maybe<IAppWhereInput>;
};

export enum IAppLogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL'
}

export type IAppEventFilter = {
  every?: Maybe<IAppEventWhereInput>;
  some?: Maybe<IAppEventWhereInput>;
  none?: Maybe<IAppEventWhereInput>;
};

export type IAppEventWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  category?: Maybe<IAppEventCategory>;
  title?: Maybe<IStringFilter>;
  message?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppEventWhereInput>>;
  OR?: Maybe<Array<IAppEventWhereInput>>;
  NOT?: Maybe<Array<IAppEventWhereInput>>;
  app?: Maybe<IAppWhereInput>;
};

export enum IAppEventCategory {
  GENERAL = 'GENERAL',
  POST = 'POST',
  NEWS = 'NEWS',
  PAYMENT = 'PAYMENT',
  MAIL = 'MAIL',
  TRAIN = 'TRAIN',
  TRAVELLING = 'TRAVELLING',
  CAR = 'CAR',
  INDUSTRY = 'INDUSTRY',
  MUSIC = 'MUSIC',
  VIDEO = 'VIDEO',
  MOVIE = 'MOVIE'
}

export type IAppStatusFilter = {
  every?: Maybe<IAppStatusWhereInput>;
  some?: Maybe<IAppStatusWhereInput>;
  none?: Maybe<IAppStatusWhereInput>;
};

export type IAppStatusWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  state?: Maybe<IAppState>;
  message?: Maybe<IStringFilter>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppStatusWhereInput>>;
  OR?: Maybe<Array<IAppStatusWhereInput>>;
  NOT?: Maybe<Array<IAppStatusWhereInput>>;
  app?: Maybe<IAppWhereInput>;
};

export enum IAppState {
  UP = 'UP',
  SHUTDOWN = 'SHUTDOWN',
  UNKNOWN = 'UNKNOWN',
  CRITICAL = 'CRITICAL',
  DOWN = 'DOWN'
}

export type IAppOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  ownerId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export enum ISortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type IAppSubscriptionOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  customName?: Maybe<ISortOrder>;
  description?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  subscriberId?: Maybe<ISortOrder>;
  botId?: Maybe<ISortOrder>;
  channel?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IBotUserOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  botUser?: Maybe<ISortOrder>;
  botId?: Maybe<ISortOrder>;
  userAccountId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IClientSecretOrderByInput = {
  id?: Maybe<ISortOrder>;
  environment?: Maybe<ISortOrder>;
  secret?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type ISubscribeTokenOrderByInput = {
  id?: Maybe<ISortOrder>;
  description?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  token?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IUserAccountWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
};

export type IUserAccountOrderByInput = {
  id?: Maybe<ISortOrder>;
  nickname?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  email?: Maybe<ISortOrder>;
  password?: Maybe<ISortOrder>;
  role?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createApp: IApp;
  deleteApp: IApp;
  createAppSubscription: IAppSubscription;
  deleteAppSubscription: IAppSubscription;
  signUp: IUserAccountAndToken;
  signIn: IUserAccountAndToken;
  signInViaBot: IUserAccountAndToken;
  generateBotToken: IGenerateBotTokenPayload;
  updateBotUser?: Maybe<IBotUser>;
  sendLogMessage: IClientResponse;
  sendEventMessage: IClientResponse;
  sendStatusMessage: IClientResponse;
  regenerateClientSecret: IClientSecret;
  createSubscribeToken: ISubscribeToken;
  deleteSubscribeToken: ISubscribeToken;
  mergeUserAccount: IUserAccount;
};


export type IMutationCreateAppArgs = {
  data: IAppCreateInput;
};


export type IMutationDeleteAppArgs = {
  where: IDeleteInput;
};


export type IMutationCreateAppSubscriptionArgs = {
  data: IAppSubscriptionCreateInput;
};


export type IMutationDeleteAppSubscriptionArgs = {
  where: IDeleteInput;
};


export type IMutationSignUpArgs = {
  data: ISignUpInput;
};


export type IMutationSignInArgs = {
  data: ISignInInput;
};


export type IMutationSignInViaBotArgs = {
  data: ISignInViaBotInput;
};


export type IMutationGenerateBotTokenArgs = {
  data: IGenerateBotTokenInput;
};


export type IMutationUpdateBotUserArgs = {
  data: IBotUserUpdateInput;
  where: IBotUserWhereUniqueInput;
};


export type IMutationSendLogMessageArgs = {
  data: ILogMessageSendInput;
};


export type IMutationSendEventMessageArgs = {
  data: IEventMessageSendInput;
};


export type IMutationSendStatusMessageArgs = {
  data: IStatusMessageSendInput;
};


export type IMutationRegenerateClientSecretArgs = {
  where: IClientSecretRegenerateInput;
};


export type IMutationCreateSubscribeTokenArgs = {
  data: ISubscribeTokenCreateInput;
};


export type IMutationDeleteSubscribeTokenArgs = {
  where: IDeleteInput;
};


export type IMutationMergeUserAccountArgs = {
  data: IUserAccountMergeInput;
};

export type IAppCreateInput = {
  name: Scalars['String'];
};

export type IDeleteInput = {
  id: Scalars['Int'];
};

export type IAppSubscriptionCreateInput = {
  name: Scalars['String'];
  channel: Scalars['String'];
  subscribeToken: Scalars['String'];
  userToken: Scalars['String'];
};

export type ISignUpInput = {
  nickname: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IUserAccountAndToken = {
  __typename?: 'UserAccountAndToken';
  userAccount: IUserAccount;
  token: Scalars['String'];
};

export type ISignInInput = {
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type ISignInViaBotInput = {
  botUser: Scalars['String'];
};

export type IGenerateBotTokenInput = {
  bot: IBotType;
};

export type IGenerateBotTokenPayload = {
  __typename?: 'GenerateBotTokenPayload';
  token: Scalars['String'];
};

export type IBotUserUpdateInput = {
  name?: Maybe<Scalars['String']>;
};

export type ILogMessageSendInput = {
  level: Scalars['NEXUS__UNKNOWN__TYPE'];
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};



export type IClientResponse = {
  __typename?: 'ClientResponse';
  success: Scalars['Boolean'];
};

export type IEventMessageSendInput = {
  title: Scalars['String'];
  category?: Maybe<Scalars['NEXUS__UNKNOWN__TYPE']>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export type IStatusMessageSendInput = {
  state: IAppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export type IClientSecretRegenerateInput = {
  id: Scalars['Int'];
};

export type ISubscribeTokenCreateInput = {
  description: Scalars['String'];
  appId: Scalars['Int'];
};

export type IUserAccountMergeInput = {
  token: Scalars['String'];
};

export enum IBotJobType {
  EVENT = 'EVENT',
  LOG = 'LOG',
  STATUS = 'STATUS'
}

export type IBotJob = {
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
};

export type IEventMessageJob = IBotJob & {
  __typename?: 'EventMessageJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: IEnvironment;
  title: Scalars['String'];
  category?: Maybe<Scalars['NEXUS__UNKNOWN__TYPE']>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: IAppState;
};

export type ILogMessageJob = IBotJob & {
  __typename?: 'LogMessageJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: IEnvironment;
  level: Scalars['NEXUS__UNKNOWN__TYPE'];
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: IAppState;
};

export type IStatusMessageJob = IBotJob & {
  __typename?: 'StatusMessageJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: IEnvironment;
  newState: IAppState;
  oldState: IAppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};
