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
  appCount: Scalars['Int'];
  appSubscriptions: Array<IAppSubscription>;
  requiresUpdate: IUpdateRequiredPayload;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
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
  requiresUpdate: IUpdateRequiredPayload;
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


export type IUpdateRequiredPayload = {
  __typename?: 'UpdateRequiredPayload';
  required: Scalars['Boolean'];
  instant: Scalars['Boolean'];
  fields: Array<Scalars['String']>;
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
  NONE = 'NONE',
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
  sendAppLogMessage: IClientResponse;
  sendAppEventMessage: IClientResponse;
  sendAppStatusMessage: IClientResponse;
  regenerateClientSecret: IClientSecret;
  createSubscribeToken: ISubscribeToken;
  deleteSubscribeToken: ISubscribeToken;
  updateUserAccount?: Maybe<IUserAccount>;
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


export type IMutationSendAppLogMessageArgs = {
  data: IAppLogMessageSendInput;
};


export type IMutationSendAppEventMessageArgs = {
  data: IAppEventMessageSendInput;
};


export type IMutationSendAppStatusMessageArgs = {
  data: IAppStatusMessageSendInput;
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


export type IMutationUpdateUserAccountArgs = {
  data: IUserAccountUpdateInput;
  where: IUserAccountWhereUniqueInput;
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

export type IAppLogMessageSendInput = {
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};


export type IClientResponse = {
  __typename?: 'ClientResponse';
  success: Scalars['Boolean'];
};

export type IAppEventMessageSendInput = {
  title: Scalars['String'];
  category?: Maybe<IAppEventCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export type IAppStatusMessageSendInput = {
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

export type IUserAccountUpdateInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  apps?: Maybe<IAppUpdateManyWithoutOwnerInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutSubscriberInput>;
};

export type IAppUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<IAppCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<IAppWhereUniqueInput>>;
  set?: Maybe<Array<IAppWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppWhereUniqueInput>>;
  delete?: Maybe<Array<IAppWhereUniqueInput>>;
  update?: Maybe<Array<IAppUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<IAppUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppScalarWhereInput>>;
  upsert?: Maybe<Array<IAppUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type IAppCreateWithoutOwnerInput = {
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscribeTokens?: Maybe<ISubscribeTokenCreateManyWithoutAppInput>;
  appSubscriptions?: Maybe<IAppSubscriptionCreateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretCreateManyWithoutAppInput>;
  AppLog?: Maybe<IAppLogCreateManyWithoutAppInput>;
  AppEvent?: Maybe<IAppEventCreateManyWithoutAppInput>;
  appStatus?: Maybe<IAppStatusCreateManyWithoutAppInput>;
};

export type ISubscribeTokenCreateManyWithoutAppInput = {
  create?: Maybe<Array<ISubscribeTokenCreateWithoutAppInput>>;
  connect?: Maybe<Array<ISubscribeTokenWhereUniqueInput>>;
};

export type ISubscribeTokenCreateWithoutAppInput = {
  description: Scalars['String'];
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppSubscriptionCreateManyWithoutAppInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
};

export type IAppSubscriptionCreateWithoutAppInput = {
  name: Scalars['String'];
  customName?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  channel: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscriber: IUserAccountCreateOneWithoutAppSubscriptionsInput;
  bot: IBotCreateOneWithoutAppSubscriptionsInput;
};

export type IUserAccountCreateOneWithoutAppSubscriptionsInput = {
  create?: Maybe<IUserAccountCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
};

export type IUserAccountCreateWithoutAppSubscriptionsInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  botUsers?: Maybe<IBotUserCreateManyWithoutUserAccountInput>;
  apps?: Maybe<IAppCreateManyWithoutOwnerInput>;
};

export type IBotUserCreateManyWithoutUserAccountInput = {
  create?: Maybe<Array<IBotUserCreateWithoutUserAccountInput>>;
  connect?: Maybe<Array<IBotUserWhereUniqueInput>>;
};

export type IBotUserCreateWithoutUserAccountInput = {
  name?: Maybe<Scalars['String']>;
  botUser: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  bot: IBotCreateOneWithoutBotUsersInput;
};

export type IBotCreateOneWithoutBotUsersInput = {
  create?: Maybe<IBotCreateWithoutBotUsersInput>;
  connect?: Maybe<IBotWhereUniqueInput>;
};

export type IBotCreateWithoutBotUsersInput = {
  type: IBotType;
  appSubscriptions?: Maybe<IAppSubscriptionCreateManyWithoutBotInput>;
};

export type IAppSubscriptionCreateManyWithoutBotInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutBotInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
};

export type IAppSubscriptionCreateWithoutBotInput = {
  name: Scalars['String'];
  customName?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  channel: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  app: IAppCreateOneWithoutAppSubscriptionsInput;
  subscriber: IUserAccountCreateOneWithoutAppSubscriptionsInput;
};

export type IAppCreateOneWithoutAppSubscriptionsInput = {
  create?: Maybe<IAppCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IAppWhereUniqueInput>;
};

export type IAppCreateWithoutAppSubscriptionsInput = {
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner: IUserAccountCreateOneWithoutAppsInput;
  subscribeTokens?: Maybe<ISubscribeTokenCreateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretCreateManyWithoutAppInput>;
  AppLog?: Maybe<IAppLogCreateManyWithoutAppInput>;
  AppEvent?: Maybe<IAppEventCreateManyWithoutAppInput>;
  appStatus?: Maybe<IAppStatusCreateManyWithoutAppInput>;
};

export type IUserAccountCreateOneWithoutAppsInput = {
  create?: Maybe<IUserAccountCreateWithoutAppsInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
};

export type IUserAccountCreateWithoutAppsInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  botUsers?: Maybe<IBotUserCreateManyWithoutUserAccountInput>;
  appSubscriptions?: Maybe<IAppSubscriptionCreateManyWithoutSubscriberInput>;
};

export type IAppSubscriptionCreateManyWithoutSubscriberInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutSubscriberInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
};

export type IAppSubscriptionCreateWithoutSubscriberInput = {
  name: Scalars['String'];
  customName?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  channel: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  app: IAppCreateOneWithoutAppSubscriptionsInput;
  bot: IBotCreateOneWithoutAppSubscriptionsInput;
};

export type IBotCreateOneWithoutAppSubscriptionsInput = {
  create?: Maybe<IBotCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IBotWhereUniqueInput>;
};

export type IBotCreateWithoutAppSubscriptionsInput = {
  type: IBotType;
  botUsers?: Maybe<IBotUserCreateManyWithoutBotInput>;
};

export type IBotUserCreateManyWithoutBotInput = {
  create?: Maybe<Array<IBotUserCreateWithoutBotInput>>;
  connect?: Maybe<Array<IBotUserWhereUniqueInput>>;
};

export type IBotUserCreateWithoutBotInput = {
  name?: Maybe<Scalars['String']>;
  botUser: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userAccount: IUserAccountCreateOneWithoutBotUsersInput;
};

export type IUserAccountCreateOneWithoutBotUsersInput = {
  create?: Maybe<IUserAccountCreateWithoutBotUsersInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
};

export type IUserAccountCreateWithoutBotUsersInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  apps?: Maybe<IAppCreateManyWithoutOwnerInput>;
  appSubscriptions?: Maybe<IAppSubscriptionCreateManyWithoutSubscriberInput>;
};

export type IAppCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<IAppCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<IAppWhereUniqueInput>>;
};

export type IBotWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<IBotType>;
};

export type IClientSecretCreateManyWithoutAppInput = {
  create?: Maybe<Array<IClientSecretCreateWithoutAppInput>>;
  connect?: Maybe<Array<IClientSecretWhereUniqueInput>>;
};

export type IClientSecretCreateWithoutAppInput = {
  environment: IEnvironment;
  secret: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppLogCreateManyWithoutAppInput = {
  create?: Maybe<Array<IAppLogCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppLogWhereUniqueInput>>;
};

export type IAppLogCreateWithoutAppInput = {
  level: IAppLogLevel;
  message: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppLogWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IAppEventCreateManyWithoutAppInput = {
  create?: Maybe<Array<IAppEventCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppEventWhereUniqueInput>>;
};

export type IAppEventCreateWithoutAppInput = {
  category?: Maybe<IAppEventCategory>;
  title: Scalars['String'];
  message: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppEventWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IAppStatusCreateManyWithoutAppInput = {
  create?: Maybe<Array<IAppStatusCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppStatusWhereUniqueInput>>;
};

export type IAppStatusCreateWithoutAppInput = {
  state: IAppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  environment: IEnvironment;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppStatusWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IAppUpdateWithWhereUniqueWithoutOwnerInput = {
  where: IAppWhereUniqueInput;
  data: IAppUpdateWithoutOwnerDataInput;
};

export type IAppUpdateWithoutOwnerDataInput = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscribeTokens?: Maybe<ISubscribeTokenUpdateManyWithoutAppInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretUpdateManyWithoutAppInput>;
  AppLog?: Maybe<IAppLogUpdateManyWithoutAppInput>;
  AppEvent?: Maybe<IAppEventUpdateManyWithoutAppInput>;
  appStatus?: Maybe<IAppStatusUpdateManyWithoutAppInput>;
};

export type ISubscribeTokenUpdateManyWithoutAppInput = {
  create?: Maybe<Array<ISubscribeTokenCreateWithoutAppInput>>;
  connect?: Maybe<Array<ISubscribeTokenWhereUniqueInput>>;
  set?: Maybe<Array<ISubscribeTokenWhereUniqueInput>>;
  disconnect?: Maybe<Array<ISubscribeTokenWhereUniqueInput>>;
  delete?: Maybe<Array<ISubscribeTokenWhereUniqueInput>>;
  update?: Maybe<Array<ISubscribeTokenUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<ISubscribeTokenUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ISubscribeTokenScalarWhereInput>>;
  upsert?: Maybe<Array<ISubscribeTokenUpsertWithWhereUniqueWithoutAppInput>>;
};

export type ISubscribeTokenUpdateWithWhereUniqueWithoutAppInput = {
  where: ISubscribeTokenWhereUniqueInput;
  data: ISubscribeTokenUpdateWithoutAppDataInput;
};

export type ISubscribeTokenUpdateWithoutAppDataInput = {
  description?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ISubscribeTokenUpdateManyWithWhereNestedInput = {
  where: ISubscribeTokenScalarWhereInput;
  data: ISubscribeTokenUpdateManyDataInput;
};

export type ISubscribeTokenScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  description?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  token?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<ISubscribeTokenScalarWhereInput>>;
  OR?: Maybe<Array<ISubscribeTokenScalarWhereInput>>;
  NOT?: Maybe<Array<ISubscribeTokenScalarWhereInput>>;
};

export type ISubscribeTokenUpdateManyDataInput = {
  description?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ISubscribeTokenUpsertWithWhereUniqueWithoutAppInput = {
  where: ISubscribeTokenWhereUniqueInput;
  update: ISubscribeTokenUpdateWithoutAppDataInput;
  create: ISubscribeTokenCreateWithoutAppInput;
};

export type IAppSubscriptionUpdateManyWithoutAppInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<IAppSubscriptionUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<IAppSubscriptionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
  upsert?: Maybe<Array<IAppSubscriptionUpsertWithWhereUniqueWithoutAppInput>>;
};

export type IAppSubscriptionUpdateWithWhereUniqueWithoutAppInput = {
  where: IAppSubscriptionWhereUniqueInput;
  data: IAppSubscriptionUpdateWithoutAppDataInput;
};

export type IAppSubscriptionUpdateWithoutAppDataInput = {
  name?: Maybe<Scalars['String']>;
  customName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscriber?: Maybe<IUserAccountUpdateOneRequiredWithoutAppSubscriptionsInput>;
  bot?: Maybe<IBotUpdateOneRequiredWithoutAppSubscriptionsInput>;
};

export type IUserAccountUpdateOneRequiredWithoutAppSubscriptionsInput = {
  create?: Maybe<IUserAccountCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
  update?: Maybe<IUserAccountUpdateWithoutAppSubscriptionsDataInput>;
  upsert?: Maybe<IUserAccountUpsertWithoutAppSubscriptionsInput>;
};

export type IUserAccountUpdateWithoutAppSubscriptionsDataInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  botUsers?: Maybe<IBotUserUpdateManyWithoutUserAccountInput>;
  apps?: Maybe<IAppUpdateManyWithoutOwnerInput>;
};

export type IBotUserUpdateManyWithoutUserAccountInput = {
  create?: Maybe<Array<IBotUserCreateWithoutUserAccountInput>>;
  connect?: Maybe<Array<IBotUserWhereUniqueInput>>;
  set?: Maybe<Array<IBotUserWhereUniqueInput>>;
  disconnect?: Maybe<Array<IBotUserWhereUniqueInput>>;
  delete?: Maybe<Array<IBotUserWhereUniqueInput>>;
  update?: Maybe<Array<IBotUserUpdateWithWhereUniqueWithoutUserAccountInput>>;
  updateMany?: Maybe<Array<IBotUserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IBotUserScalarWhereInput>>;
  upsert?: Maybe<Array<IBotUserUpsertWithWhereUniqueWithoutUserAccountInput>>;
};

export type IBotUserUpdateWithWhereUniqueWithoutUserAccountInput = {
  where: IBotUserWhereUniqueInput;
  data: IBotUserUpdateWithoutUserAccountDataInput;
};

export type IBotUserUpdateWithoutUserAccountDataInput = {
  name?: Maybe<Scalars['String']>;
  botUser?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  bot?: Maybe<IBotUpdateOneRequiredWithoutBotUsersInput>;
};

export type IBotUpdateOneRequiredWithoutBotUsersInput = {
  create?: Maybe<IBotCreateWithoutBotUsersInput>;
  connect?: Maybe<IBotWhereUniqueInput>;
  update?: Maybe<IBotUpdateWithoutBotUsersDataInput>;
  upsert?: Maybe<IBotUpsertWithoutBotUsersInput>;
};

export type IBotUpdateWithoutBotUsersDataInput = {
  type?: Maybe<IBotType>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutBotInput>;
};

export type IAppSubscriptionUpdateManyWithoutBotInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutBotInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<IAppSubscriptionUpdateWithWhereUniqueWithoutBotInput>>;
  updateMany?: Maybe<Array<IAppSubscriptionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
  upsert?: Maybe<Array<IAppSubscriptionUpsertWithWhereUniqueWithoutBotInput>>;
};

export type IAppSubscriptionUpdateWithWhereUniqueWithoutBotInput = {
  where: IAppSubscriptionWhereUniqueInput;
  data: IAppSubscriptionUpdateWithoutBotDataInput;
};

export type IAppSubscriptionUpdateWithoutBotDataInput = {
  name?: Maybe<Scalars['String']>;
  customName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  app?: Maybe<IAppUpdateOneRequiredWithoutAppSubscriptionsInput>;
  subscriber?: Maybe<IUserAccountUpdateOneRequiredWithoutAppSubscriptionsInput>;
};

export type IAppUpdateOneRequiredWithoutAppSubscriptionsInput = {
  create?: Maybe<IAppCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IAppWhereUniqueInput>;
  update?: Maybe<IAppUpdateWithoutAppSubscriptionsDataInput>;
  upsert?: Maybe<IAppUpsertWithoutAppSubscriptionsInput>;
};

export type IAppUpdateWithoutAppSubscriptionsDataInput = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner?: Maybe<IUserAccountUpdateOneRequiredWithoutAppsInput>;
  subscribeTokens?: Maybe<ISubscribeTokenUpdateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretUpdateManyWithoutAppInput>;
  AppLog?: Maybe<IAppLogUpdateManyWithoutAppInput>;
  AppEvent?: Maybe<IAppEventUpdateManyWithoutAppInput>;
  appStatus?: Maybe<IAppStatusUpdateManyWithoutAppInput>;
};

export type IUserAccountUpdateOneRequiredWithoutAppsInput = {
  create?: Maybe<IUserAccountCreateWithoutAppsInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
  update?: Maybe<IUserAccountUpdateWithoutAppsDataInput>;
  upsert?: Maybe<IUserAccountUpsertWithoutAppsInput>;
};

export type IUserAccountUpdateWithoutAppsDataInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  botUsers?: Maybe<IBotUserUpdateManyWithoutUserAccountInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutSubscriberInput>;
};

export type IAppSubscriptionUpdateManyWithoutSubscriberInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutSubscriberInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  delete?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<IAppSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput>>;
  updateMany?: Maybe<Array<IAppSubscriptionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
  upsert?: Maybe<Array<IAppSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput>>;
};

export type IAppSubscriptionUpdateWithWhereUniqueWithoutSubscriberInput = {
  where: IAppSubscriptionWhereUniqueInput;
  data: IAppSubscriptionUpdateWithoutSubscriberDataInput;
};

export type IAppSubscriptionUpdateWithoutSubscriberDataInput = {
  name?: Maybe<Scalars['String']>;
  customName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  app?: Maybe<IAppUpdateOneRequiredWithoutAppSubscriptionsInput>;
  bot?: Maybe<IBotUpdateOneRequiredWithoutAppSubscriptionsInput>;
};

export type IBotUpdateOneRequiredWithoutAppSubscriptionsInput = {
  create?: Maybe<IBotCreateWithoutAppSubscriptionsInput>;
  connect?: Maybe<IBotWhereUniqueInput>;
  update?: Maybe<IBotUpdateWithoutAppSubscriptionsDataInput>;
  upsert?: Maybe<IBotUpsertWithoutAppSubscriptionsInput>;
};

export type IBotUpdateWithoutAppSubscriptionsDataInput = {
  type?: Maybe<IBotType>;
  botUsers?: Maybe<IBotUserUpdateManyWithoutBotInput>;
};

export type IBotUserUpdateManyWithoutBotInput = {
  create?: Maybe<Array<IBotUserCreateWithoutBotInput>>;
  connect?: Maybe<Array<IBotUserWhereUniqueInput>>;
  set?: Maybe<Array<IBotUserWhereUniqueInput>>;
  disconnect?: Maybe<Array<IBotUserWhereUniqueInput>>;
  delete?: Maybe<Array<IBotUserWhereUniqueInput>>;
  update?: Maybe<Array<IBotUserUpdateWithWhereUniqueWithoutBotInput>>;
  updateMany?: Maybe<Array<IBotUserUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IBotUserScalarWhereInput>>;
  upsert?: Maybe<Array<IBotUserUpsertWithWhereUniqueWithoutBotInput>>;
};

export type IBotUserUpdateWithWhereUniqueWithoutBotInput = {
  where: IBotUserWhereUniqueInput;
  data: IBotUserUpdateWithoutBotDataInput;
};

export type IBotUserUpdateWithoutBotDataInput = {
  name?: Maybe<Scalars['String']>;
  botUser?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userAccount?: Maybe<IUserAccountUpdateOneRequiredWithoutBotUsersInput>;
};

export type IUserAccountUpdateOneRequiredWithoutBotUsersInput = {
  create?: Maybe<IUserAccountCreateWithoutBotUsersInput>;
  connect?: Maybe<IUserAccountWhereUniqueInput>;
  update?: Maybe<IUserAccountUpdateWithoutBotUsersDataInput>;
  upsert?: Maybe<IUserAccountUpsertWithoutBotUsersInput>;
};

export type IUserAccountUpdateWithoutBotUsersDataInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  apps?: Maybe<IAppUpdateManyWithoutOwnerInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutSubscriberInput>;
};

export type IUserAccountUpsertWithoutBotUsersInput = {
  update: IUserAccountUpdateWithoutBotUsersDataInput;
  create: IUserAccountCreateWithoutBotUsersInput;
};

export type IBotUserUpdateManyWithWhereNestedInput = {
  where: IBotUserScalarWhereInput;
  data: IBotUserUpdateManyDataInput;
};

export type IBotUserScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  name?: Maybe<INullableStringFilter>;
  botUser?: Maybe<IStringFilter>;
  botId?: Maybe<IIntFilter>;
  userAccountId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IBotUserScalarWhereInput>>;
  OR?: Maybe<Array<IBotUserScalarWhereInput>>;
  NOT?: Maybe<Array<IBotUserScalarWhereInput>>;
};

export type IBotUserUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  botUser?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IBotUserUpsertWithWhereUniqueWithoutBotInput = {
  where: IBotUserWhereUniqueInput;
  update: IBotUserUpdateWithoutBotDataInput;
  create: IBotUserCreateWithoutBotInput;
};

export type IBotUpsertWithoutAppSubscriptionsInput = {
  update: IBotUpdateWithoutAppSubscriptionsDataInput;
  create: IBotCreateWithoutAppSubscriptionsInput;
};

export type IAppSubscriptionUpdateManyWithWhereNestedInput = {
  where: IAppSubscriptionScalarWhereInput;
  data: IAppSubscriptionUpdateManyDataInput;
};

export type IAppSubscriptionScalarWhereInput = {
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
  AND?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
  OR?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
  NOT?: Maybe<Array<IAppSubscriptionScalarWhereInput>>;
};

export type IAppSubscriptionUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  customName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppSubscriptionUpsertWithWhereUniqueWithoutSubscriberInput = {
  where: IAppSubscriptionWhereUniqueInput;
  update: IAppSubscriptionUpdateWithoutSubscriberDataInput;
  create: IAppSubscriptionCreateWithoutSubscriberInput;
};

export type IUserAccountUpsertWithoutAppsInput = {
  update: IUserAccountUpdateWithoutAppsDataInput;
  create: IUserAccountCreateWithoutAppsInput;
};

export type IClientSecretUpdateManyWithoutAppInput = {
  create?: Maybe<Array<IClientSecretCreateWithoutAppInput>>;
  connect?: Maybe<Array<IClientSecretWhereUniqueInput>>;
  set?: Maybe<Array<IClientSecretWhereUniqueInput>>;
  disconnect?: Maybe<Array<IClientSecretWhereUniqueInput>>;
  delete?: Maybe<Array<IClientSecretWhereUniqueInput>>;
  update?: Maybe<Array<IClientSecretUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<IClientSecretUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IClientSecretScalarWhereInput>>;
  upsert?: Maybe<Array<IClientSecretUpsertWithWhereUniqueWithoutAppInput>>;
};

export type IClientSecretUpdateWithWhereUniqueWithoutAppInput = {
  where: IClientSecretWhereUniqueInput;
  data: IClientSecretUpdateWithoutAppDataInput;
};

export type IClientSecretUpdateWithoutAppDataInput = {
  environment?: Maybe<IEnvironment>;
  secret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IClientSecretUpdateManyWithWhereNestedInput = {
  where: IClientSecretScalarWhereInput;
  data: IClientSecretUpdateManyDataInput;
};

export type IClientSecretScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  environment?: Maybe<IEnvironment>;
  secret?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IClientSecretScalarWhereInput>>;
  OR?: Maybe<Array<IClientSecretScalarWhereInput>>;
  NOT?: Maybe<Array<IClientSecretScalarWhereInput>>;
};

export type IClientSecretUpdateManyDataInput = {
  environment?: Maybe<IEnvironment>;
  secret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IClientSecretUpsertWithWhereUniqueWithoutAppInput = {
  where: IClientSecretWhereUniqueInput;
  update: IClientSecretUpdateWithoutAppDataInput;
  create: IClientSecretCreateWithoutAppInput;
};

export type IAppLogUpdateManyWithoutAppInput = {
  create?: Maybe<Array<IAppLogCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppLogWhereUniqueInput>>;
  set?: Maybe<Array<IAppLogWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppLogWhereUniqueInput>>;
  delete?: Maybe<Array<IAppLogWhereUniqueInput>>;
  update?: Maybe<Array<IAppLogUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<IAppLogUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppLogScalarWhereInput>>;
  upsert?: Maybe<Array<IAppLogUpsertWithWhereUniqueWithoutAppInput>>;
};

export type IAppLogUpdateWithWhereUniqueWithoutAppInput = {
  where: IAppLogWhereUniqueInput;
  data: IAppLogUpdateWithoutAppDataInput;
};

export type IAppLogUpdateWithoutAppDataInput = {
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppLogUpdateManyWithWhereNestedInput = {
  where: IAppLogScalarWhereInput;
  data: IAppLogUpdateManyDataInput;
};

export type IAppLogScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppLogScalarWhereInput>>;
  OR?: Maybe<Array<IAppLogScalarWhereInput>>;
  NOT?: Maybe<Array<IAppLogScalarWhereInput>>;
};

export type IAppLogUpdateManyDataInput = {
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppLogUpsertWithWhereUniqueWithoutAppInput = {
  where: IAppLogWhereUniqueInput;
  update: IAppLogUpdateWithoutAppDataInput;
  create: IAppLogCreateWithoutAppInput;
};

export type IAppEventUpdateManyWithoutAppInput = {
  create?: Maybe<Array<IAppEventCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppEventWhereUniqueInput>>;
  set?: Maybe<Array<IAppEventWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppEventWhereUniqueInput>>;
  delete?: Maybe<Array<IAppEventWhereUniqueInput>>;
  update?: Maybe<Array<IAppEventUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<IAppEventUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppEventScalarWhereInput>>;
  upsert?: Maybe<Array<IAppEventUpsertWithWhereUniqueWithoutAppInput>>;
};

export type IAppEventUpdateWithWhereUniqueWithoutAppInput = {
  where: IAppEventWhereUniqueInput;
  data: IAppEventUpdateWithoutAppDataInput;
};

export type IAppEventUpdateWithoutAppDataInput = {
  category?: Maybe<IAppEventCategory>;
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppEventUpdateManyWithWhereNestedInput = {
  where: IAppEventScalarWhereInput;
  data: IAppEventUpdateManyDataInput;
};

export type IAppEventScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  category?: Maybe<IAppEventCategory>;
  title?: Maybe<IStringFilter>;
  message?: Maybe<IStringFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppEventScalarWhereInput>>;
  OR?: Maybe<Array<IAppEventScalarWhereInput>>;
  NOT?: Maybe<Array<IAppEventScalarWhereInput>>;
};

export type IAppEventUpdateManyDataInput = {
  category?: Maybe<IAppEventCategory>;
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppEventUpsertWithWhereUniqueWithoutAppInput = {
  where: IAppEventWhereUniqueInput;
  update: IAppEventUpdateWithoutAppDataInput;
  create: IAppEventCreateWithoutAppInput;
};

export type IAppStatusUpdateManyWithoutAppInput = {
  create?: Maybe<Array<IAppStatusCreateWithoutAppInput>>;
  connect?: Maybe<Array<IAppStatusWhereUniqueInput>>;
  set?: Maybe<Array<IAppStatusWhereUniqueInput>>;
  disconnect?: Maybe<Array<IAppStatusWhereUniqueInput>>;
  delete?: Maybe<Array<IAppStatusWhereUniqueInput>>;
  update?: Maybe<Array<IAppStatusUpdateWithWhereUniqueWithoutAppInput>>;
  updateMany?: Maybe<Array<IAppStatusUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IAppStatusScalarWhereInput>>;
  upsert?: Maybe<Array<IAppStatusUpsertWithWhereUniqueWithoutAppInput>>;
};

export type IAppStatusUpdateWithWhereUniqueWithoutAppInput = {
  where: IAppStatusWhereUniqueInput;
  data: IAppStatusUpdateWithoutAppDataInput;
};

export type IAppStatusUpdateWithoutAppDataInput = {
  state?: Maybe<IAppState>;
  message?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Json']>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppStatusUpdateManyWithWhereNestedInput = {
  where: IAppStatusScalarWhereInput;
  data: IAppStatusUpdateManyDataInput;
};

export type IAppStatusScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  appId?: Maybe<IIntFilter>;
  state?: Maybe<IAppState>;
  message?: Maybe<IStringFilter>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppStatusScalarWhereInput>>;
  OR?: Maybe<Array<IAppStatusScalarWhereInput>>;
  NOT?: Maybe<Array<IAppStatusScalarWhereInput>>;
};

export type IAppStatusUpdateManyDataInput = {
  state?: Maybe<IAppState>;
  message?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Json']>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppStatusUpsertWithWhereUniqueWithoutAppInput = {
  where: IAppStatusWhereUniqueInput;
  update: IAppStatusUpdateWithoutAppDataInput;
  create: IAppStatusCreateWithoutAppInput;
};

export type IAppUpsertWithoutAppSubscriptionsInput = {
  update: IAppUpdateWithoutAppSubscriptionsDataInput;
  create: IAppCreateWithoutAppSubscriptionsInput;
};

export type IAppSubscriptionUpsertWithWhereUniqueWithoutBotInput = {
  where: IAppSubscriptionWhereUniqueInput;
  update: IAppSubscriptionUpdateWithoutBotDataInput;
  create: IAppSubscriptionCreateWithoutBotInput;
};

export type IBotUpsertWithoutBotUsersInput = {
  update: IBotUpdateWithoutBotUsersDataInput;
  create: IBotCreateWithoutBotUsersInput;
};

export type IBotUserUpsertWithWhereUniqueWithoutUserAccountInput = {
  where: IBotUserWhereUniqueInput;
  update: IBotUserUpdateWithoutUserAccountDataInput;
  create: IBotUserCreateWithoutUserAccountInput;
};

export type IUserAccountUpsertWithoutAppSubscriptionsInput = {
  update: IUserAccountUpdateWithoutAppSubscriptionsDataInput;
  create: IUserAccountCreateWithoutAppSubscriptionsInput;
};

export type IAppSubscriptionUpsertWithWhereUniqueWithoutAppInput = {
  where: IAppSubscriptionWhereUniqueInput;
  update: IAppSubscriptionUpdateWithoutAppDataInput;
  create: IAppSubscriptionCreateWithoutAppInput;
};

export type IAppUpdateManyWithWhereNestedInput = {
  where: IAppScalarWhereInput;
  data: IAppUpdateManyDataInput;
};

export type IAppScalarWhereInput = {
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
  AND?: Maybe<Array<IAppScalarWhereInput>>;
  OR?: Maybe<Array<IAppScalarWhereInput>>;
  NOT?: Maybe<Array<IAppScalarWhereInput>>;
};

export type IAppUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppUpsertWithWhereUniqueWithoutOwnerInput = {
  where: IAppWhereUniqueInput;
  update: IAppUpdateWithoutOwnerDataInput;
  create: IAppCreateWithoutOwnerInput;
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

export type IAppEventMessageJob = IBotJob & {
  __typename?: 'AppEventMessageJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: IEnvironment;
  title: Scalars['String'];
  category?: Maybe<IAppEventCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: IAppState;
};

export type IAppLogMessageJob = IBotJob & {
  __typename?: 'AppLogMessageJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: IEnvironment;
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: IAppState;
};

export type IAppStatusMessageJob = IBotJob & {
  __typename?: 'AppStatusMessageJob';
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
