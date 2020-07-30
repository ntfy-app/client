import Axios, { AxiosInstance } from 'axios'
import { LogLevel, LogMessageSendInput, EventMessageSendInput, StatusMessageSendInput, ClientResponse } from './types'

const gql = String.raw

const SEND_EVENT_MESSAGE_MUTATION = gql`
  mutation sendEventMessage($title: String!, $message: String!, $metadata: Json) {
    sendEventMessage(data: { title: $title, message: $message, metadata: $metadata }) {
      success
    }
  }
`

const SEND_LOG_MESSAGE_MUTATION = gql`
  mutation sendLogMessage($level: LogLevel!, $message: String!, $metadata: Json) {
    sendLogMessage(data: { level: $level, message: $message, metadata: $metadata }) {
      success
    }
  }
`

const SEND_STATUS_MESSAGE_MUTATION = gql`
  mutation sendStatusMessage($state: AppState!, $message: String!, $metadata: Json) {
    sendStatusMessage(data: { state: $state, message: $message, metadata: $metadata }) {
      success
    }
  }
`

interface ClientInitOptions {
  api: string
  label?: string
}

type EventMessage = EventMessageSendInput
type LogMessage = LogMessageSendInput
type StatusMessage = StatusMessageSendInput

export class Client {
  api: string
  secret: string
  client: AxiosInstance
  label?: string

  constructor(secret: string, options?: ClientInitOptions) {
    this.api = options?.api || 'https://ntfy.live/graphql'

    this.secret = secret
    this.client = Axios.create({
      baseURL: this.api,
      headers: {
        authorization: `Basic ${secret}`,
      },
    })

    this.label = options?.label
  }

  // init(secret: string, options?: ClientInitOptions) {
  //   this.api = options?.api || 'https://ntfy.live/graphql'

  //   this.secret = secret
  //   this.client = Axios.create({
  //     baseURL: this.api,
  //     headers: {
  //       authorization: `Basic ${secret}`,
  //     },
  //   })

  //   this.label = options?.label
  // }

  event(eventMessage: EventMessage) {
    this.client
      .post<any>('', { query: SEND_EVENT_MESSAGE_MUTATION, variables: eventMessage })
      .then(({ data }) => data.data.sendEventMessage)
      .then(({ success }) => !success && console.error('Failed to deliver event message!'))
      .catch((err: any) => {
        if (err) {
          console.log('ERROR', err)
        } else {
          console.log(JSON.stringify(err, null, 2))
        }
      })
  }

  log(logMessage: LogMessage) {
    if (!this.secret) {
      throw new Error('You need to set up client secret first')
    }

    this.client
      .post<any>('', { query: SEND_LOG_MESSAGE_MUTATION, variables: logMessage })
      // TODO do proper success handling
      .then(({ data }) => data.data.sendLogMessage)
      .then(({ success }) => !success && console.error('Failed to deliver log message!'))
      // TODO do proper error handling
      .catch((err: any) => {
        if (err) {
          console.log('ERROR', err)
        } else {
          console.log(JSON.stringify(err, null, 2))
        }
      })
  }

  info(message: string, metadata?: JSON) {
    this.log({ message, level: LogLevel.Info, metadata })
  }
  error(message: string, metadata?: JSON) {
    this.log({ message, level: LogLevel.Error, metadata })
  }
  fatal(message: string, metadata?: JSON) {
    this.log({ message, level: LogLevel.Fatal, metadata })
  }

  status(statusMessage: StatusMessage) {
    this.client
      .post<any>('', { query: SEND_STATUS_MESSAGE_MUTATION, variables: statusMessage })
      .then(({ data }) => data.data.sendStatusMessage)
      .then(({ success }) => !success && console.error('Failed to deliver status message!'))
      .catch((err: any) => {
        if (err) {
          console.log('ERROR', err)
        } else {
          console.log(JSON.stringify(err, null, 2))
        }
      })
  }
}
