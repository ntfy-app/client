const { GraphQLClient } = require('graphql-request');
const gql = require('graphql-tag');
const { print } = require('graphql/language/printer');
require('dotenv').config();

export const Client = class Client {
  token: string;
  logLevel: string;
  label: string;
  constructor(token?: string, logLevel?: string, label?: string) {
    this.token = token || '';
    this.logLevel = logLevel || 'DEBUG';
    this.label = label || 'DEV';
  }

  init({ token, logLevel = 'DEBUG', label = 'DEV' }: { token?: string; logLevel?: string; label?: string }): void {
    this.token = token!;
    this.logLevel = logLevel! || 'DEBUG';
    this.label = label! || 'DEV';
  }

  getToken() {
    console.log(this.token);
  }

  log(message: string, logLevel: string, metadata?: object) {
    if (!this.token) {
      throw new Error('You need to set up client secret first');
    }
    const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    const mutation = gql`
      mutation($level: LogLevel!, $message: String!, $metadata: JSON) {
        sendLog(input: { level: $level, message: $message, metadata: $metadata }) {
          success
        }
      }
    `;
    client
      .request(print(mutation), { message, level: logLevel, metadata })
      .then((res: any) => {
        console.log('RESPONSE', res);
      })
      .catch((err: any) => {
        if (err) {
          console.log('ERROR', err);
        } else {
          console.log(JSON.stringify(err, null, 2));
        }
      });
  }

  info(message: string, metadata?: object) {
    this.log(message, 'INFO', metadata);
    console.log(metadata);
  }
  error(message: string, metadata?: object) {
    this.log(message, 'ERROR', metadata);
    console.log(metadata);
  }
  fatal(message: string, metadata?: object) {
    this.log(message, 'FATAL', metadata);
    console.log(metadata);
  }
};

export const ntfy = new Client();
