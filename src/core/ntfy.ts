// !Todo: read .dtc stuff

import { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';
import * as dotenv from 'dotenv';
dotenv.config();

declare const process: {
  env: {
    GRAPHQL_ENDPOINT: string;
  };
};

const SEND_LOG_MUTATION = gql`
  mutation($level: LogLevel!, $message: String!, $metadata: JSON) {
    sendLogMessage(data: { level: $level, message: $message, metadata: $metadata }) {
      success
    }
  }
`;
const SEND_EVENT_MESSAGE_MUTATION = gql`
  mutation($title: String!, $message: String!, $metadata: JSON) {
    sendEventMessage(data: { title: $title, message: $message, metadata: $metadata }) {
      success
    }
  }
`;
const SEND_STATUS_MESSAGE_MUTATION = gql`
  mutation($status: AppStatus!, $message: String!, $metadata: JSON) {
    sendStatusMessage(data: { status: $status, message: $message, metadata: $metadata }) {
      success
    }
  }
`;

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
}

export enum AppStatus {
  UP = 'UP',
  DOWN = 'DOWN',
  CRITICAL = 'CRITICAL',
}

interface Log {
  level: LogLevel;
  message: string;
  metadata?: unknown;
}

export const Client = class Client {
  token: string;
  level: LogLevel;
  label: string;
  client: any;
  constructor(token?: string, level?: LogLevel, label?: string) {
    this.token = token || '';
    this.level = level || LogLevel.DEBUG;
    this.label = label || 'DEV';
    this.client = token
      ? new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
      : null;
  }

  init({ token, level = LogLevel.DEBUG, label = 'DEV' }: { token?: string; level?: LogLevel; label?: string }): void {
    this.token = token!;
    this.level = level!;
    this.label = label!;
    this.client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  log({ message, level, metadata }: Log) {
    if (!this.token) {
      throw new Error('You need to set up client secret first');
    }
    this.client
      .request(print(SEND_LOG_MUTATION), { message, level, metadata })
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

  info(message: string, metadata?: unknown) {
    this.log({ message, level: LogLevel.INFO, metadata });
  }
  error(message: string, metadata?: unknown) {
    this.log({ message, level: LogLevel.ERROR, metadata });
  }
  fatal(message: string, metadata?: unknown) {
    this.log({ message, level: LogLevel.FATAL, metadata });
  }

  event(title: string, message: string, metadata?: unknown) {
    this.client
      .request(print(SEND_EVENT_MESSAGE_MUTATION), { message, title, metadata })
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

  status(status: AppStatus, message: string, metadata?: unknown) {
    this.client
      .request(print(SEND_STATUS_MESSAGE_MUTATION), { message, status, metadata })
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
};

export const ntfy = new Client();
