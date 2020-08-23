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
  botUser?: Maybe<IBotUser>;
  botUsers: Array<IBotUser>;
  clientSecret?: Maybe<IClientSecret>;
  clientSecrets: Array<IClientSecret>;
  subscribeToken?: Maybe<ISubscribeToken>;
  subscribeTokens: Array<ISubscribeToken>;
  whoAmI: IUserAccount;
  userAccount?: Maybe<IUserAccount>;
  userAccounts: Array<IUserAccount>;
  hello: Scalars['String'];
  app?: Maybe<IApp>;
  apps: Array<IApp>;
  appSubscription?: Maybe<IAppSubscription>;
  appSubscriptions: Array<IAppSubscription>;
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
  muted: Scalars['Boolean'];
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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


export enum IEnvironment {
  DEVELOPMENT = 'DEVELOPMENT',
  TEST = 'TEST',
  PRODUCTION = 'PRODUCTION'
}

export type IApp = {
  __typename?: 'App';
  id: Scalars['Int'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  owner: IUserAccount;
  subscribeTokenCount: Scalars['Int'];
  subscribeTokens: Array<ISubscribeToken>;
  appSubscriptionCount: Scalars['Int'];
  appSubscriptions: Array<IAppSubscription>;
  clientSecrets: Array<IClientSecret>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  logCount: Scalars['Int'];
  logs: Array<IAppLog>;
  metrics: IAppMetrics;
  status: IAppStatus;
  statusHistory: Array<IAppStatus>;
};


export type IAppSubscribeTokensArgs = {
  where?: Maybe<ISubscribeTokenWhereInput>;
  orderBy?: Maybe<ISubscribeTokenOrderByInput>;
};


export type IAppAppSubscriptionsArgs = {
  where?: Maybe<IAppSubscriptionWhereInput>;
  orderBy?: Maybe<IAppSubscriptionOrderByInput>;
};


export type IAppClientSecretsArgs = {
  where?: Maybe<IClientSecretWhereInput>;
  orderBy?: Maybe<IClientSecretOrderByInput>;
};


export type IAppLogCountArgs = {
  where?: Maybe<IAppLogWhereInput>;
};


export type IAppLogsArgs = {
  first: Scalars['Int'];
  after?: Maybe<IAppLogWhereUniqueInput>;
  where?: Maybe<IAppLogWhereInput>;
};


export type IAppMetricsArgs = {
  where?: Maybe<IAppMetricsWhereInput>;
};


export type IAppStatusArgs = {
  where?: Maybe<IAppStatusWhereInput>;
};


export type IAppStatusHistoryArgs = {
  first: Scalars['Int'];
  after?: Maybe<IAppStatusWhereUniqueInput>;
  where?: Maybe<IAppStatusWhereInput>;
};

export type IUserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
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
  where?: Maybe<IBotUserWhereInput>;
  orderBy?: Maybe<IBotUserOrderByInput>;
};


export type IUserAccountAppsArgs = {
  where?: Maybe<IAppWhereInput>;
  orderBy?: Maybe<IAppOrderByInput>;
};


export type IUserAccountAppSubscriptionsArgs = {
  where?: Maybe<IAppSubscriptionWhereInput>;
  orderBy?: Maybe<IAppSubscriptionOrderByInput>;
};

export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

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

export type IBotWhereInput = {
  id?: Maybe<IIntFilter>;
  type?: Maybe<IBotType>;
  botUsers?: Maybe<IBotUserFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IBotWhereInput>>;
  OR?: Maybe<Array<IBotWhereInput>>;
  NOT?: Maybe<Array<IBotWhereInput>>;
};

export type IBotUserFilter = {
  every?: Maybe<IBotUserWhereInput>;
  some?: Maybe<IBotUserWhereInput>;
  none?: Maybe<IBotUserWhereInput>;
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
  muted?: Maybe<IBooleanFilter>;
  mutedUntil?: Maybe<INullableDateTimeFilter>;
  environment?: Maybe<IEnvironment>;
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

export type IBooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type INullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type IAppWhereInput = {
  id?: Maybe<IIntFilter>;
  name?: Maybe<IStringFilter>;
  disabled?: Maybe<IBooleanFilter>;
  ownerId?: Maybe<IIntFilter>;
  subscribeTokens?: Maybe<ISubscribeTokenFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  clientSecrets?: Maybe<IClientSecretFilter>;
  logs?: Maybe<IAppLogFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppWhereInput>>;
  OR?: Maybe<Array<IAppWhereInput>>;
  NOT?: Maybe<Array<IAppWhereInput>>;
  owner?: Maybe<IUserAccountWhereInput>;
};

export type ISubscribeTokenFilter = {
  every?: Maybe<ISubscribeTokenWhereInput>;
  some?: Maybe<ISubscribeTokenWhereInput>;
  none?: Maybe<ISubscribeTokenWhereInput>;
};

export type ISubscribeTokenWhereInput = {
  id?: Maybe<IIntFilter>;
  description?: Maybe<IStringFilter>;
  token?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<ISubscribeTokenWhereInput>>;
  OR?: Maybe<Array<ISubscribeTokenWhereInput>>;
  NOT?: Maybe<Array<ISubscribeTokenWhereInput>>;
  app?: Maybe<IAppWhereInput>;
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
  environment?: Maybe<IEnvironment>;
  types?: Maybe<Array<IAppLogType>>;
  level?: Maybe<IAppLogLevel>;
  state?: Maybe<IAppState>;
};

export enum IAppLogType {
  EVENT = 'EVENT',
  LOG = 'LOG',
  STATUS = 'STATUS'
}

export enum IAppLogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL'
}

export enum IAppState {
  UNSET = 'UNSET',
  UP = 'UP',
  SHUTDOWN = 'SHUTDOWN',
  UNKNOWN = 'UNKNOWN',
  CRITICAL = 'CRITICAL',
  DOWN = 'DOWN'
}

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
  settings?: Maybe<IUserAccountSettingsFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IUserAccountWhereInput>>;
  OR?: Maybe<Array<IUserAccountWhereInput>>;
  NOT?: Maybe<Array<IUserAccountWhereInput>>;
};

export type IAppFilter = {
  every?: Maybe<IAppWhereInput>;
  some?: Maybe<IAppWhereInput>;
  none?: Maybe<IAppWhereInput>;
};

export type IUserAccountSettingsFilter = {
  every?: Maybe<IUserAccountSettingsWhereInput>;
  some?: Maybe<IUserAccountSettingsWhereInput>;
  none?: Maybe<IUserAccountSettingsWhereInput>;
};

export type IUserAccountSettingsWhereInput = {
  id?: Maybe<IIntFilter>;
  timezone?: Maybe<IStringFilter>;
  userAccountId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IUserAccountSettingsWhereInput>>;
  OR?: Maybe<Array<IUserAccountSettingsWhereInput>>;
  NOT?: Maybe<Array<IUserAccountSettingsWhereInput>>;
  userAccount?: Maybe<IUserAccountWhereInput>;
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

export enum ISortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type IAppOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  disabled?: Maybe<ISortOrder>;
  ownerId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IAppSubscriptionOrderByInput = {
  id?: Maybe<ISortOrder>;
  name?: Maybe<ISortOrder>;
  customName?: Maybe<ISortOrder>;
  description?: Maybe<ISortOrder>;
  muted?: Maybe<ISortOrder>;
  mutedUntil?: Maybe<ISortOrder>;
  environment?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  subscriberId?: Maybe<ISortOrder>;
  botId?: Maybe<ISortOrder>;
  channel?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

export type IUpdateRequiredPayload = {
  __typename?: 'UpdateRequiredPayload';
  required: Scalars['Boolean'];
  instant: Scalars['Boolean'];
  fields: Array<Scalars['String']>;
};

export type ISubscribeTokenOrderByInput = {
  id?: Maybe<ISortOrder>;
  description?: Maybe<ISortOrder>;
  token?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
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

export type IClientSecretOrderByInput = {
  id?: Maybe<ISortOrder>;
  environment?: Maybe<ISortOrder>;
  secret?: Maybe<ISortOrder>;
  appId?: Maybe<ISortOrder>;
  createdAt?: Maybe<ISortOrder>;
  updatedAt?: Maybe<ISortOrder>;
};

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

export type IAppLogWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  appId_environment_level_message_timestamp?: Maybe<IAppIdEnvironmentLevelMessageTimestampCompoundUniqueInput>;
};

export type IAppIdEnvironmentLevelMessageTimestampCompoundUniqueInput = {
  appId: Scalars['Int'];
  environment: IEnvironment;
  level: IAppLogLevel;
  message: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type IAppLog = {
  id: Scalars['Int'];
  type: IAppLogType;
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  environment: IEnvironment;
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type IAppMetricsWhereInput = {
  period?: Maybe<IAppMetricsPeriod>;
  before?: Maybe<Scalars['Int']>;
};

export enum IAppMetricsPeriod {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH'
}

export type IAppMetrics = {
  __typename?: 'AppMetrics';
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  events: Scalars['Int'];
  logs: Scalars['Int'];
  statuses: Scalars['Int'];
  limit: Scalars['Int'];
};

export type IAppStatusWhereInput = {
  environment?: Maybe<IEnvironment>;
  states?: Maybe<Array<IAppState>>;
};

export type IAppStatus = {
  __typename?: 'AppStatus';
  state: IAppState;
  since: Scalars['DateTime'];
};

export type IAppStatusWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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

export type ISubscribeTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  description_appId?: Maybe<IDescriptionAppIdCompoundUniqueInput>;
};

export type IDescriptionAppIdCompoundUniqueInput = {
  description: Scalars['String'];
  appId: Scalars['Int'];
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

export type IAppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name_ownerId?: Maybe<INameOwnerIdCompoundUniqueInput>;
};

export type INameOwnerIdCompoundUniqueInput = {
  name: Scalars['String'];
  ownerId: Scalars['Int'];
};

export type IMutation = {
  __typename?: 'Mutation';
  signUp: IUserAccountAndToken;
  signIn: IUserAccountAndToken;
  signInViaBot: IUserAccountAndToken;
  generateBotToken: IGenerateBotTokenPayload;
  updateBotUser?: Maybe<IBotUser>;
  regenerateClientSecret: IClientSecret;
  createSubscribeToken: ISubscribeToken;
  deleteSubscribeToken: ISubscribeToken;
  updateUserAccount?: Maybe<IUserAccount>;
  deleteUserAccount: IUserAccount;
  createApp: IApp;
  deleteApp: IApp;
  createAppSubscription: IAppSubscription;
  muteAppSubscription: IAppSubscription;
  unmuteAppSubscription: IAppSubscription;
  deleteAppSubscription: IAppSubscription;
  sendEventLog: IClientResponse;
  sendLog: IClientResponse;
  sendStatusLog: IClientResponse;
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


export type IMutationRegenerateClientSecretArgs = {
  where: IClientSecretRegenerateInput;
};


export type IMutationCreateSubscribeTokenArgs = {
  data: ISubscribeTokenCreateInput;
};


export type IMutationDeleteSubscribeTokenArgs = {
  where: IDeleteByIdInput;
};


export type IMutationUpdateUserAccountArgs = {
  data: IUserAccountUpdateInput;
  where: IUserAccountWhereUniqueInput;
};


export type IMutationDeleteUserAccountArgs = {
  where: IDeleteByIdInput;
};


export type IMutationCreateAppArgs = {
  data: IAppCreateInput;
};


export type IMutationDeleteAppArgs = {
  where: IDeleteByIdInput;
};


export type IMutationCreateAppSubscriptionArgs = {
  data: IAppSubscriptionCreateInput;
};


export type IMutationMuteAppSubscriptionArgs = {
  where: IUpdateByIdInput;
  data?: Maybe<IAppSubscriptionMuteInput>;
};


export type IMutationUnmuteAppSubscriptionArgs = {
  where: IUpdateByIdInput;
};


export type IMutationDeleteAppSubscriptionArgs = {
  where: IDeleteByIdInput;
};


export type IMutationSendEventLogArgs = {
  data: IEventLogSendInput;
};


export type IMutationSendLogArgs = {
  data: ILogSendInput;
};


export type IMutationSendStatusLogArgs = {
  data: IStatusLogSendInput;
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

export type IClientSecretRegenerateInput = {
  id: Scalars['Int'];
};

export type ISubscribeTokenCreateInput = {
  description: Scalars['String'];
  appId: Scalars['Int'];
};

export type IDeleteByIdInput = {
  id: Scalars['Int'];
};

export type IUserAccountUpdateInput = {
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<IRole>;
  apps?: Maybe<IAppUpdateManyWithoutOwnerInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutSubscriberInput>;
  settings?: Maybe<IUserAccountSettingsUpdateManyWithoutUserAccountInput>;
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
  disabled?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscribeTokens?: Maybe<ISubscribeTokenCreateManyWithoutAppInput>;
  appSubscriptions?: Maybe<IAppSubscriptionCreateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretCreateManyWithoutAppInput>;
  logs?: Maybe<IAppLogCreateManyWithoutAppInput>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  settings?: Maybe<IUserAccountSettingsCreateManyWithoutUserAccountInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  disabled?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner: IUserAccountCreateOneWithoutAppsInput;
  subscribeTokens?: Maybe<ISubscribeTokenCreateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretCreateManyWithoutAppInput>;
  logs?: Maybe<IAppLogCreateManyWithoutAppInput>;
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
  settings?: Maybe<IUserAccountSettingsCreateManyWithoutUserAccountInput>;
};

export type IAppSubscriptionCreateManyWithoutSubscriberInput = {
  create?: Maybe<Array<IAppSubscriptionCreateWithoutSubscriberInput>>;
  connect?: Maybe<Array<IAppSubscriptionWhereUniqueInput>>;
};

export type IAppSubscriptionCreateWithoutSubscriberInput = {
  name: Scalars['String'];
  customName?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  settings?: Maybe<IUserAccountSettingsCreateManyWithoutUserAccountInput>;
};

export type IAppCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<IAppCreateWithoutOwnerInput>>;
  connect?: Maybe<Array<IAppWhereUniqueInput>>;
};

export type IUserAccountSettingsCreateManyWithoutUserAccountInput = {
  create?: Maybe<Array<IUserAccountSettingsCreateWithoutUserAccountInput>>;
  connect?: Maybe<Array<IUserAccountSettingsWhereUniqueInput>>;
};

export type IUserAccountSettingsCreateWithoutUserAccountInput = {
  timezone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IUserAccountSettingsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  type: IAppLogType;
  level?: Maybe<IAppLogLevel>;
  message: Scalars['String'];
  state?: Maybe<IAppState>;
  metadata?: Maybe<Scalars['Json']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  environment: IEnvironment;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<IAppLogEventExtCreateOneWithoutLogInput>;
};

export type IAppLogEventExtCreateOneWithoutLogInput = {
  create?: Maybe<IAppLogEventExtCreateWithoutLogInput>;
  connect?: Maybe<IAppLogEventExtWhereUniqueInput>;
};

export type IAppLogEventExtCreateWithoutLogInput = {
  category?: Maybe<IAppLogEventExtCategory>;
  title: Scalars['String'];
};

export enum IAppLogEventExtCategory {
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

export type IAppLogEventExtWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IAppUpdateWithWhereUniqueWithoutOwnerInput = {
  where: IAppWhereUniqueInput;
  data: IAppUpdateWithoutOwnerDataInput;
};

export type IAppUpdateWithoutOwnerDataInput = {
  name?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subscribeTokens?: Maybe<ISubscribeTokenUpdateManyWithoutAppInput>;
  appSubscriptions?: Maybe<IAppSubscriptionUpdateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretUpdateManyWithoutAppInput>;
  logs?: Maybe<IAppLogUpdateManyWithoutAppInput>;
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
  token?: Maybe<IStringFilter>;
  appId?: Maybe<IIntFilter>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  settings?: Maybe<IUserAccountSettingsUpdateManyWithoutUserAccountInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  disabled?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner?: Maybe<IUserAccountUpdateOneRequiredWithoutAppsInput>;
  subscribeTokens?: Maybe<ISubscribeTokenUpdateManyWithoutAppInput>;
  clientSecrets?: Maybe<IClientSecretUpdateManyWithoutAppInput>;
  logs?: Maybe<IAppLogUpdateManyWithoutAppInput>;
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
  settings?: Maybe<IUserAccountSettingsUpdateManyWithoutUserAccountInput>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  settings?: Maybe<IUserAccountSettingsUpdateManyWithoutUserAccountInput>;
};

export type IUserAccountSettingsUpdateManyWithoutUserAccountInput = {
  create?: Maybe<Array<IUserAccountSettingsCreateWithoutUserAccountInput>>;
  connect?: Maybe<Array<IUserAccountSettingsWhereUniqueInput>>;
  set?: Maybe<Array<IUserAccountSettingsWhereUniqueInput>>;
  disconnect?: Maybe<Array<IUserAccountSettingsWhereUniqueInput>>;
  delete?: Maybe<Array<IUserAccountSettingsWhereUniqueInput>>;
  update?: Maybe<Array<IUserAccountSettingsUpdateWithWhereUniqueWithoutUserAccountInput>>;
  updateMany?: Maybe<Array<IUserAccountSettingsUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<IUserAccountSettingsScalarWhereInput>>;
  upsert?: Maybe<Array<IUserAccountSettingsUpsertWithWhereUniqueWithoutUserAccountInput>>;
};

export type IUserAccountSettingsUpdateWithWhereUniqueWithoutUserAccountInput = {
  where: IUserAccountSettingsWhereUniqueInput;
  data: IUserAccountSettingsUpdateWithoutUserAccountDataInput;
};

export type IUserAccountSettingsUpdateWithoutUserAccountDataInput = {
  timezone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IUserAccountSettingsUpdateManyWithWhereNestedInput = {
  where: IUserAccountSettingsScalarWhereInput;
  data: IUserAccountSettingsUpdateManyDataInput;
};

export type IUserAccountSettingsScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  timezone?: Maybe<IStringFilter>;
  userAccountId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IUserAccountSettingsScalarWhereInput>>;
  OR?: Maybe<Array<IUserAccountSettingsScalarWhereInput>>;
  NOT?: Maybe<Array<IUserAccountSettingsScalarWhereInput>>;
};

export type IUserAccountSettingsUpdateManyDataInput = {
  timezone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IUserAccountSettingsUpsertWithWhereUniqueWithoutUserAccountInput = {
  where: IUserAccountSettingsWhereUniqueInput;
  update: IUserAccountSettingsUpdateWithoutUserAccountDataInput;
  create: IUserAccountSettingsCreateWithoutUserAccountInput;
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
  muted?: Maybe<IBooleanFilter>;
  mutedUntil?: Maybe<INullableDateTimeFilter>;
  environment?: Maybe<IEnvironment>;
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
  muted?: Maybe<Scalars['Boolean']>;
  mutedUntil?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
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
  type?: Maybe<IAppLogType>;
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<Scalars['String']>;
  state?: Maybe<IAppState>;
  metadata?: Maybe<Scalars['Json']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<IAppLogEventExtUpdateOneWithoutLogInput>;
};

export type IAppLogEventExtUpdateOneWithoutLogInput = {
  create?: Maybe<IAppLogEventExtCreateWithoutLogInput>;
  connect?: Maybe<IAppLogEventExtWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IAppLogEventExtUpdateWithoutLogDataInput>;
  upsert?: Maybe<IAppLogEventExtUpsertWithoutLogInput>;
};

export type IAppLogEventExtUpdateWithoutLogDataInput = {
  category?: Maybe<IAppLogEventExtCategory>;
  title?: Maybe<Scalars['String']>;
};

export type IAppLogEventExtUpsertWithoutLogInput = {
  update: IAppLogEventExtUpdateWithoutLogDataInput;
  create: IAppLogEventExtCreateWithoutLogInput;
};

export type IAppLogUpdateManyWithWhereNestedInput = {
  where: IAppLogScalarWhereInput;
  data: IAppLogUpdateManyDataInput;
};

export type IAppLogScalarWhereInput = {
  id?: Maybe<IIntFilter>;
  type?: Maybe<IAppLogType>;
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<IStringFilter>;
  state?: Maybe<IAppState>;
  timestamp?: Maybe<IDateTimeFilter>;
  environment?: Maybe<IEnvironment>;
  appId?: Maybe<IIntFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppLogScalarWhereInput>>;
  OR?: Maybe<Array<IAppLogScalarWhereInput>>;
  NOT?: Maybe<Array<IAppLogScalarWhereInput>>;
};

export type IAppLogUpdateManyDataInput = {
  type?: Maybe<IAppLogType>;
  level?: Maybe<IAppLogLevel>;
  message?: Maybe<Scalars['String']>;
  state?: Maybe<IAppState>;
  metadata?: Maybe<Scalars['Json']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  environment?: Maybe<IEnvironment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppLogUpsertWithWhereUniqueWithoutAppInput = {
  where: IAppLogWhereUniqueInput;
  update: IAppLogUpdateWithoutAppDataInput;
  create: IAppLogCreateWithoutAppInput;
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
  disabled?: Maybe<IBooleanFilter>;
  ownerId?: Maybe<IIntFilter>;
  subscribeTokens?: Maybe<ISubscribeTokenFilter>;
  appSubscriptions?: Maybe<IAppSubscriptionFilter>;
  clientSecrets?: Maybe<IClientSecretFilter>;
  logs?: Maybe<IAppLogFilter>;
  createdAt?: Maybe<IDateTimeFilter>;
  updatedAt?: Maybe<IDateTimeFilter>;
  AND?: Maybe<Array<IAppScalarWhereInput>>;
  OR?: Maybe<Array<IAppScalarWhereInput>>;
  NOT?: Maybe<Array<IAppScalarWhereInput>>;
};

export type IAppUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IAppUpsertWithWhereUniqueWithoutOwnerInput = {
  where: IAppWhereUniqueInput;
  update: IAppUpdateWithoutOwnerDataInput;
  create: IAppCreateWithoutOwnerInput;
};

export type IAppCreateInput = {
  name: Scalars['String'];
};

export type IAppSubscriptionCreateInput = {
  name: Scalars['String'];
  channel: Scalars['String'];
  subscribeToken: Scalars['String'];
  userToken: Scalars['String'];
  environment?: Maybe<IEnvironment>;
};

export type IUpdateByIdInput = {
  id: Scalars['Int'];
};

export type IAppSubscriptionMuteInput = {
  muteUntil?: Maybe<Scalars['DateTime']>;
};

export type IEventLogSendInput = {
  title: Scalars['String'];
  category?: Maybe<IAppLogEventExtCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
};

export type IClientResponse = {
  __typename?: 'ClientResponse';
  success: Scalars['Boolean'];
};

export type ILogSendInput = {
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
};

export type IStatusLogSendInput = {
  state: IAppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
};

export type ISubscription = {
  __typename?: 'Subscription';
  appLog: IAppLog;
};


export type ISubscriptionAppLogArgs = {
  app: Scalars['Int'];
};

export enum IBotJobType {
  EVENT_LOG = 'EVENT_LOG',
  LOG = 'LOG',
  STATUS_LOG = 'STATUS_LOG'
}

export type IBotJob = {
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
};

export type IEventLogJob = IBotJob & {
  __typename?: 'EventLogJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  level: IAppLogLevel;
  title: Scalars['String'];
  category?: Maybe<IAppLogEventExtCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  status: IAppState;
  environment: IEnvironment;
  appId: Scalars['Int'];
  appName: Scalars['String'];
};

export type ILogJob = IBotJob & {
  __typename?: 'LogJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  status: IAppState;
  environment: IEnvironment;
  appId: Scalars['Int'];
  appName: Scalars['String'];
};

export type IStatusLogJob = IBotJob & {
  __typename?: 'StatusLogJob';
  type: IBotJobType;
  bot: IBotType;
  channel: Scalars['String'];
  level: IAppLogLevel;
  newState: IAppState;
  oldState: IAppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  environment: IEnvironment;
  appId: Scalars['Int'];
  appName: Scalars['String'];
};

export type IEventLog = IAppLog & {
  __typename?: 'EventLog';
  id: Scalars['Int'];
  type: IAppLogType;
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  environment: IEnvironment;
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  category: IAppLogEventExtCategory;
};

export type ILog = IAppLog & {
  __typename?: 'Log';
  id: Scalars['Int'];
  type: IAppLogType;
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  environment: IEnvironment;
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type IStatusLog = IAppLog & {
  __typename?: 'StatusLog';
  id: Scalars['Int'];
  type: IAppLogType;
  level: IAppLogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  timestamp: Scalars['DateTime'];
  environment: IEnvironment;
  appId: Scalars['Int'];
  app: IApp;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  state?: Maybe<IAppState>;
};
