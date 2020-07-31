import Axios, { AxiosInstance } from 'axios'
import { LogMessageSendInput, EventMessageSendInput, StatusMessageSendInput, ClientResponse } from './types'
import { dlog } from '../core'

export * from './types'

export type EventMessage = EventMessageSendInput
export type LogMessage = LogMessageSendInput
export type StatusMessage = StatusMessageSendInput

const gql = String.raw

const SEND_EVENT_MESSAGE_MUTATION = gql`
  mutation sendEventMessage($data: EventMessageSendInput!) {
    sendEventMessage(data: $data) {
      success
    }
  }
`

const SEND_LOG_MESSAGE_MUTATION = gql`
  mutation sendLogMessage($data: LogMessageSendInput!) {
    sendLogMessage(data: $data) {
      success
    }
  }
`

const SEND_STATUS_MESSAGE_MUTATION = gql`
  mutation sendStatusMessage($data: StatusMessageSendInput!) {
    sendStatusMessage(data: $data) {
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

    dlog('initialized api client')
  }

  async sendEvent(eventMessage: EventMessage): Promise<ClientResponse> {
    dlog('executing sendEventMessage mutation')

    return this.client
      .post('', { query: SEND_EVENT_MESSAGE_MUTATION, variables: { data: eventMessage } })
      .then(({ data }) => data.data.sendEventMessage)
      .catch(error => error)
  }

  async sendLog(logMessage: LogMessage): Promise<ClientResponse> {
    dlog('executing sendLogMessage mutation')

    return this.client
      .post('', { query: SEND_LOG_MESSAGE_MUTATION, variables: { data: logMessage } })
      .then(({ data }) => data.data.sendLogMessage)
      .catch(error => error)
  }

  async sendStatus(statusMessage: StatusMessage): Promise<ClientResponse> {
    dlog('executing sendStatusMessage mutation')

    return this.client
      .post('', { query: SEND_STATUS_MESSAGE_MUTATION, variables: { data: statusMessage } })
      .then(({ data }) => data.data.sendStatusMessage)
      .catch(error => error)
  }
}
