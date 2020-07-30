import Axios, { AxiosInstance } from 'axios'
import { LogMessageSendInput, EventMessageSendInput, StatusMessageSendInput, ClientResponse } from './types'

export * from './types'

export type EventMessage = EventMessageSendInput
export type LogMessage = LogMessageSendInput
export type StatusMessage = StatusMessageSendInput

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

export class ApiClient {
  client: AxiosInstance

  constructor(api: string, secret: string) {
    this.client = Axios.create({
      baseURL: api,
      headers: {
        authorization: `Basic ${secret}`,
      },
    })
  }

  async sendEvent(eventMessage: EventMessage): Promise<ClientResponse> {
    return this.client
      .post('', { query: SEND_EVENT_MESSAGE_MUTATION, variables: eventMessage })
      .then(({ data }) => data.data.sendEventMessage)
      .catch(error => error)
  }

  async sendLog(logMessage: LogMessage): Promise<ClientResponse> {
    return this.client
      .post('', { query: SEND_LOG_MESSAGE_MUTATION, variables: logMessage })
      .then(({ data }) => data.data.sendLogMessage)
      .catch(error => error)
  }

  async sendStatus(statusMessage: StatusMessage): Promise<ClientResponse> {
    return this.client
      .post('', { query: SEND_STATUS_MESSAGE_MUTATION, variables: statusMessage })
      .then(({ data }) => data.data.sendStatusMessage)
      .catch(error => error)
  }
}
