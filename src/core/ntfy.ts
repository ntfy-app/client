const { GraphQLClient } = require('graphql-request');
require('dotenv').config();

export const Client = class Client {
  token: string;
  logLevel: string;
  label: string;
  constructor(token?: string, logLevel?: string, label?: string) {
    this.token = token || '';
    this.logLevel = logLevel || 'WARNING';
    this.label = label || 'DEV';
  }

  client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MiwiaWQiOjEsInJvbGUiOiJBRE1JTiIsImlhdCI6MTU4OTk3OTM5NH0.6dS8AIMwJHRhSGlt054fxmvbQEZko_Knx-1HhHVUlEo',
    },
  });

  init({ token, logLevel = 'WARNING', label = 'DEV' }: { token?: string; logLevel?: string; label?: string }): void {
    this.token = token!;
    this.logLevel = logLevel! || 'WARNING';
    this.label = label! || 'DEV';
  }

  getToken() {
    console.log(this.token);
  }
  info(message: string, metadata?: object) {
    console.log(message, `Used token ${this.token}`);
  }
  log(message: string, logLevel: string, metadata?: object) {
    const mutation = `mutation($level:LogLevel!,$message:String!){
      sendLog(input:{ level:$level,message:$message }){
        success
      }
    }`;
    this.client
      .request(mutation, { message, level: logLevel })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });

    console.log(message, `Used token ${this.token}`);
  }
};

export const ntfy = new Client();
