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
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  app?: Maybe<App>;
  apps: Array<App>;
  appSubscription?: Maybe<AppSubscription>;
  appSubscriptions: Array<AppSubscription>;
  botUser?: Maybe<BotUser>;
  botUsers: Array<BotUser>;
  clientSecret?: Maybe<ClientSecret>;
  clientSecrets: Array<ClientSecret>;
  subscribeToken?: Maybe<SubscribeToken>;
  subscribeTokens: Array<SubscribeToken>;
  whoAmI: UserAccount;
  userAccount?: Maybe<UserAccount>;
  userAccounts: Array<UserAccount>;
};


export type QueryAppArgs = {
  where: AppWhereUniqueInput;
};


export type QueryAppsArgs = {
  where?: Maybe<AppWhereInput>;
  orderBy?: Maybe<AppOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<AppWhereUniqueInput>;
  after?: Maybe<AppWhereUniqueInput>;
};


export type QueryAppSubscriptionArgs = {
  where: AppSubscriptionWhereUniqueInput;
};


export type QueryAppSubscriptionsArgs = {
  where?: Maybe<AppSubscriptionWhereInput>;
  orderBy?: Maybe<AppSubscriptionOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<AppSubscriptionWhereUniqueInput>;
  after?: Maybe<AppSubscriptionWhereUniqueInput>;
};


export type QueryBotUserArgs = {
  where: BotUserWhereUniqueInput;
};


export type QueryBotUsersArgs = {
  where?: Maybe<BotUserWhereInput>;
  orderBy?: Maybe<BotUserOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<BotUserWhereUniqueInput>;
  after?: Maybe<BotUserWhereUniqueInput>;
};


export type QueryClientSecretArgs = {
  where: ClientSecretWhereUniqueInput;
};


export type QueryClientSecretsArgs = {
  where?: Maybe<ClientSecretWhereInput>;
  orderBy?: Maybe<ClientSecretOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<ClientSecretWhereUniqueInput>;
  after?: Maybe<ClientSecretWhereUniqueInput>;
};


export type QuerySubscribeTokenArgs = {
  where: SubscribeTokenWhereUniqueInput;
};


export type QuerySubscribeTokensArgs = {
  where?: Maybe<SubscribeTokenWhereInput>;
  orderBy?: Maybe<SubscribeTokenOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<SubscribeTokenWhereUniqueInput>;
  after?: Maybe<SubscribeTokenWhereUniqueInput>;
};


export type QueryUserAccountArgs = {
  where: UserAccountWhereUniqueInput;
};


export type QueryUserAccountsArgs = {
  where?: Maybe<UserAccountWhereInput>;
  orderBy?: Maybe<UserAccountOrderByInput>;
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<UserAccountWhereUniqueInput>;
  after?: Maybe<UserAccountWhereUniqueInput>;
};

export type AppWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name_ownerId?: Maybe<NameOwnerIdCompoundUniqueInput>;
};

export type NameOwnerIdCompoundUniqueInput = {
  name: Scalars['String'];
  ownerId: Scalars['Int'];
};

export type App = {
  __typename?: 'App';
  id: Scalars['Int'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  owner: UserAccount;
  subscribeTokens: Array<SubscribeToken>;
  appSubscriptions: Array<AppSubscription>;
  clientSecrets: Array<ClientSecret>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  subscribeTokenCount: Scalars['Int'];
  appSubscriptionCount: Scalars['Int'];
};


export type AppSubscribeTokensArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<SubscribeTokenWhereUniqueInput>;
  after?: Maybe<SubscribeTokenWhereUniqueInput>;
};


export type AppAppSubscriptionsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<AppSubscriptionWhereUniqueInput>;
  after?: Maybe<AppSubscriptionWhereUniqueInput>;
};


export type AppClientSecretsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<ClientSecretWhereUniqueInput>;
  after?: Maybe<ClientSecretWhereUniqueInput>;
};

export type UserAccount = {
  __typename?: 'UserAccount';
  id: Scalars['Int'];
  nickname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role: Role;
  botUsers: Array<BotUser>;
  apps: Array<App>;
  appSubscriptions: Array<AppSubscription>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserAccountBotUsersArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<BotUserWhereUniqueInput>;
  after?: Maybe<BotUserWhereUniqueInput>;
};


export type UserAccountAppsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<AppWhereUniqueInput>;
  after?: Maybe<AppWhereUniqueInput>;
};


export type UserAccountAppSubscriptionsArgs = {
  first: Scalars['Int'];
  last: Scalars['Int'];
  before?: Maybe<AppSubscriptionWhereUniqueInput>;
  after?: Maybe<AppSubscriptionWhereUniqueInput>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type BotUserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  botUser_bot?: Maybe<BotUserBotCompoundUniqueInput>;
};

export type BotUserBotCompoundUniqueInput = {
  botUser: Scalars['String'];
  bot: Bot;
};

export enum Bot {
  Slack = 'SLACK',
  Telegram = 'TELEGRAM'
}

export type BotUser = {
  __typename?: 'BotUser';
  id: Scalars['Int'];
  botUser: Scalars['String'];
  bot: Bot;
  userAccountId: Scalars['Int'];
  userAccount: UserAccount;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type AppSubscriptionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name_description_appId?: Maybe<NameDescriptionAppIdCompoundUniqueInput>;
};

export type NameDescriptionAppIdCompoundUniqueInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  appId: Scalars['Int'];
};

export type AppSubscription = {
  __typename?: 'AppSubscription';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  appId: Scalars['Int'];
  app: App;
  subscriberId: Scalars['Int'];
  subscriber: UserAccount;
  bot: Bot;
  channel: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SubscribeTokenWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  name_appId?: Maybe<NameAppIdCompoundUniqueInput>;
};

export type NameAppIdCompoundUniqueInput = {
  name: Scalars['String'];
  appId: Scalars['Int'];
};

export type SubscribeToken = {
  __typename?: 'SubscribeToken';
  id: Scalars['Int'];
  name: Scalars['String'];
  token: Scalars['String'];
  appId: Scalars['Int'];
  app: App;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ClientSecretWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  secret?: Maybe<Scalars['String']>;
  environment_appId?: Maybe<EnvironmentAppIdCompoundUniqueInput>;
};

export type EnvironmentAppIdCompoundUniqueInput = {
  environment: Environment;
  appId: Scalars['Int'];
};

export enum Environment {
  Development = 'DEVELOPMENT',
  Test = 'TEST',
  Production = 'PRODUCTION'
}

export type ClientSecret = {
  __typename?: 'ClientSecret';
  id: Scalars['Int'];
  environment: Environment;
  secret: Scalars['String'];
  appId: Scalars['Int'];
  app: App;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AppWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<IntFilter>;
  subscribeTokens?: Maybe<SubscribeTokenFilter>;
  appSubscriptions?: Maybe<AppSubscriptionFilter>;
  clientSecrets?: Maybe<ClientSecretFilter>;
  AppLog?: Maybe<AppLogFilter>;
  AppEvent?: Maybe<AppEventFilter>;
  appStatus?: Maybe<AppStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AppWhereInput>>;
  OR?: Maybe<Array<AppWhereInput>>;
  NOT?: Maybe<Array<AppWhereInput>>;
  owner?: Maybe<UserAccountWhereInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
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

export type SubscribeTokenFilter = {
  every?: Maybe<SubscribeTokenWhereInput>;
  some?: Maybe<SubscribeTokenWhereInput>;
  none?: Maybe<SubscribeTokenWhereInput>;
};

export type SubscribeTokenWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  appId?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<SubscribeTokenWhereInput>>;
  OR?: Maybe<Array<SubscribeTokenWhereInput>>;
  NOT?: Maybe<Array<SubscribeTokenWhereInput>>;
  app?: Maybe<AppWhereInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type AppSubscriptionFilter = {
  every?: Maybe<AppSubscriptionWhereInput>;
  some?: Maybe<AppSubscriptionWhereInput>;
  none?: Maybe<AppSubscriptionWhereInput>;
};

export type AppSubscriptionWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  appId?: Maybe<IntFilter>;
  subscriberId?: Maybe<IntFilter>;
  bot?: Maybe<Bot>;
  channel?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AppSubscriptionWhereInput>>;
  OR?: Maybe<Array<AppSubscriptionWhereInput>>;
  NOT?: Maybe<Array<AppSubscriptionWhereInput>>;
  app?: Maybe<AppWhereInput>;
  subscriber?: Maybe<UserAccountWhereInput>;
};

export type UserAccountWhereInput = {
  id?: Maybe<IntFilter>;
  nickname?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  email?: Maybe<NullableStringFilter>;
  password?: Maybe<NullableStringFilter>;
  role?: Maybe<Role>;
  botUsers?: Maybe<BotUserFilter>;
  apps?: Maybe<AppFilter>;
  appSubscriptions?: Maybe<AppSubscriptionFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<UserAccountWhereInput>>;
  OR?: Maybe<Array<UserAccountWhereInput>>;
  NOT?: Maybe<Array<UserAccountWhereInput>>;
};

export type NullableStringFilter = {
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

export type BotUserFilter = {
  every?: Maybe<BotUserWhereInput>;
  some?: Maybe<BotUserWhereInput>;
  none?: Maybe<BotUserWhereInput>;
};

export type BotUserWhereInput = {
  id?: Maybe<IntFilter>;
  botUser?: Maybe<StringFilter>;
  bot?: Maybe<Bot>;
  userAccountId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<BotUserWhereInput>>;
  OR?: Maybe<Array<BotUserWhereInput>>;
  NOT?: Maybe<Array<BotUserWhereInput>>;
  userAccount?: Maybe<UserAccountWhereInput>;
};

export type AppFilter = {
  every?: Maybe<AppWhereInput>;
  some?: Maybe<AppWhereInput>;
  none?: Maybe<AppWhereInput>;
};

export type ClientSecretFilter = {
  every?: Maybe<ClientSecretWhereInput>;
  some?: Maybe<ClientSecretWhereInput>;
  none?: Maybe<ClientSecretWhereInput>;
};

export type ClientSecretWhereInput = {
  id?: Maybe<IntFilter>;
  environment?: Maybe<Environment>;
  secret?: Maybe<StringFilter>;
  appId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<ClientSecretWhereInput>>;
  OR?: Maybe<Array<ClientSecretWhereInput>>;
  NOT?: Maybe<Array<ClientSecretWhereInput>>;
  app?: Maybe<AppWhereInput>;
};

export type AppLogFilter = {
  every?: Maybe<AppLogWhereInput>;
  some?: Maybe<AppLogWhereInput>;
  none?: Maybe<AppLogWhereInput>;
};

export type AppLogWhereInput = {
  id?: Maybe<IntFilter>;
  appId?: Maybe<IntFilter>;
  level?: Maybe<AppLogLevel>;
  message?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AppLogWhereInput>>;
  OR?: Maybe<Array<AppLogWhereInput>>;
  NOT?: Maybe<Array<AppLogWhereInput>>;
  app?: Maybe<AppWhereInput>;
};

export enum AppLogLevel {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Fatal = 'FATAL'
}

export type AppEventFilter = {
  every?: Maybe<AppEventWhereInput>;
  some?: Maybe<AppEventWhereInput>;
  none?: Maybe<AppEventWhereInput>;
};

export type AppEventWhereInput = {
  id?: Maybe<IntFilter>;
  appId?: Maybe<IntFilter>;
  category?: Maybe<AppEventCategory>;
  title?: Maybe<StringFilter>;
  message?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AppEventWhereInput>>;
  OR?: Maybe<Array<AppEventWhereInput>>;
  NOT?: Maybe<Array<AppEventWhereInput>>;
  app?: Maybe<AppWhereInput>;
};

export enum AppEventCategory {
  General = 'GENERAL',
  Post = 'POST',
  News = 'NEWS',
  Payment = 'PAYMENT',
  Mail = 'MAIL',
  Train = 'TRAIN',
  Travelling = 'TRAVELLING',
  Car = 'CAR',
  Industry = 'INDUSTRY',
  Music = 'MUSIC',
  Video = 'VIDEO',
  Movie = 'MOVIE'
}

export type AppStatusFilter = {
  every?: Maybe<AppStatusWhereInput>;
  some?: Maybe<AppStatusWhereInput>;
  none?: Maybe<AppStatusWhereInput>;
};

export type AppStatusWhereInput = {
  id?: Maybe<IntFilter>;
  appId?: Maybe<IntFilter>;
  state?: Maybe<AppState>;
  message?: Maybe<StringFilter>;
  environment?: Maybe<Environment>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AND?: Maybe<Array<AppStatusWhereInput>>;
  OR?: Maybe<Array<AppStatusWhereInput>>;
  NOT?: Maybe<Array<AppStatusWhereInput>>;
  app?: Maybe<AppWhereInput>;
};

export enum AppState {
  Up = 'UP',
  Shutdown = 'SHUTDOWN',
  Unknown = 'UNKNOWN',
  Critical = 'CRITICAL',
  Down = 'DOWN'
}

export type AppOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  ownerId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type AppSubscriptionOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  appId?: Maybe<OrderByArg>;
  subscriberId?: Maybe<OrderByArg>;
  bot?: Maybe<OrderByArg>;
  channel?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type BotUserOrderByInput = {
  id?: Maybe<OrderByArg>;
  botUser?: Maybe<OrderByArg>;
  bot?: Maybe<OrderByArg>;
  userAccountId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type ClientSecretOrderByInput = {
  id?: Maybe<OrderByArg>;
  environment?: Maybe<OrderByArg>;
  secret?: Maybe<OrderByArg>;
  appId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type SubscribeTokenOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  appId?: Maybe<OrderByArg>;
  token?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type UserAccountWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  nickname?: Maybe<Scalars['String']>;
};

export type UserAccountOrderByInput = {
  id?: Maybe<OrderByArg>;
  nickname?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
  role?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApp: App;
  deleteApp: App;
  createAppSubscription: AppSubscription;
  deleteAppSubscription: AppSubscription;
  signUp: UserAccountAndToken;
  signIn: UserAccountAndToken;
  signInViaBot: UserAccountAndToken;
  generateBotToken: GenerateBotTokenPayload;
  sendLogMessage: ClientResponse;
  sendEventMessage: ClientResponse;
  sendStatusMessage: ClientResponse;
  regenerateClientSecret: ClientSecret;
  createSubscribeToken: SubscribeToken;
  deleteSubscribeToken: SubscribeToken;
  mergeUserAccount: UserAccount;
};


export type MutationCreateAppArgs = {
  data: AppCreateInput;
};


export type MutationDeleteAppArgs = {
  where: DeleteInput;
};


export type MutationCreateAppSubscriptionArgs = {
  data: AppSubscriptionCreateInput;
};


export type MutationDeleteAppSubscriptionArgs = {
  where: DeleteInput;
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationSignInViaBotArgs = {
  data: SignInViaBotInput;
};


export type MutationGenerateBotTokenArgs = {
  data: GenerateBotTokenInput;
};


export type MutationSendLogMessageArgs = {
  data: LogMessageSendInput;
};


export type MutationSendEventMessageArgs = {
  data: EventMessageSendInput;
};


export type MutationSendStatusMessageArgs = {
  data: StatusMessageSendInput;
};


export type MutationRegenerateClientSecretArgs = {
  where: ClientSecretRegenerateInput;
};


export type MutationCreateSubscribeTokenArgs = {
  data: SubscribeTokenCreateInput;
};


export type MutationDeleteSubscribeTokenArgs = {
  where: DeleteInput;
};


export type MutationMergeUserAccountArgs = {
  data: UserAccountMergeInput;
};

export type AppCreateInput = {
  name: Scalars['String'];
};

export type DeleteInput = {
  id: Scalars['Int'];
};

export type AppSubscriptionCreateInput = {
  channel: Scalars['String'];
  bot: Bot;
  subscribeToken: Scalars['String'];
};

export type SignUpInput = {
  nickname: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserAccountAndToken = {
  __typename?: 'UserAccountAndToken';
  userAccount: UserAccount;
  token: Scalars['String'];
};

export type SignInInput = {
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type SignInViaBotInput = {
  bot: Bot;
  botUser: Scalars['String'];
};

export type GenerateBotTokenInput = {
  bot: Bot;
};

export type GenerateBotTokenPayload = {
  __typename?: 'GenerateBotTokenPayload';
  token: Scalars['String'];
};

export type LogMessageSendInput = {
  level: LogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export enum LogLevel {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Fatal = 'FATAL'
}


export type ClientResponse = {
  __typename?: 'ClientResponse';
  success: Scalars['Boolean'];
};

export type EventMessageSendInput = {
  title: Scalars['String'];
  category?: Maybe<EventCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export enum EventCategory {
  General = 'GENERAL',
  Post = 'POST',
  News = 'NEWS',
  Payment = 'PAYMENT',
  Mail = 'MAIL',
  Docs = 'DOCS'
}

export type StatusMessageSendInput = {
  state: AppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};

export type ClientSecretRegenerateInput = {
  id: Scalars['Int'];
};

export type SubscribeTokenCreateInput = {
  name: Scalars['String'];
  appId: Scalars['Int'];
};

export type UserAccountMergeInput = {
  token: Scalars['String'];
};

export enum BotJobType {
  Event = 'EVENT',
  Log = 'LOG',
  Status = 'STATUS'
}

export type BotJob = {
  type: BotJobType;
  bot: Bot;
  channel: Scalars['String'];
};

export type EventMessageJob = BotJob & {
  __typename?: 'EventMessageJob';
  type: BotJobType;
  bot: Bot;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: Environment;
  title: Scalars['String'];
  category?: Maybe<EventCategory>;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: AppState;
};

export type LogMessageJob = BotJob & {
  __typename?: 'LogMessageJob';
  type: BotJobType;
  bot: Bot;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: Environment;
  level: LogLevel;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
  status: AppState;
};

export type StatusMessageJob = BotJob & {
  __typename?: 'StatusMessageJob';
  type: BotJobType;
  bot: Bot;
  channel: Scalars['String'];
  appId: Scalars['Int'];
  appName: Scalars['String'];
  environment: Environment;
  newState: AppState;
  oldState: AppState;
  message: Scalars['String'];
  metadata?: Maybe<Scalars['Json']>;
};
