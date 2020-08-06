import debug from 'debug'
import Axios, { AxiosInstance } from 'axios'
import { ILogMessageSendInput, IEventMessageSendInput, IStatusMessageSendInput, IClientResponse } from './types'

const dlog = debug('@ntfy-app/client')

export * from './types'

export type IMetadata = { [keyof: string]: any }
export type IEventMessage = IEventMessageSendInput
export type ILogMessage = ILogMessageSendInput
export type IStatusMessage = IStatusMessageSendInput

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
      auth: {
        username: 'client',
        password: secret,
      },
    })

    dlog('initialized api client')
  }

  async sendEvent(eventMessage: IEventMessage): Promise<IClientResponse> {
    dlog('executing sendEventMessage mutation')

    return this.client
      .post('', { query: SEND_EVENT_MESSAGE_MUTATION, variables: { data: eventMessage } })
      .then(({ data }) => data.data.sendEventMessage)
      .catch(error => error)
  }

  async sendLog(logMessage: ILogMessage): Promise<IClientResponse> {
    dlog('executing sendLogMessage mutation')

    return this.client
      .post('', { query: SEND_LOG_MESSAGE_MUTATION, variables: { data: logMessage } })
      .then(({ data }) => data.data.sendLogMessage)
      .catch(error => error)
  }

  async sendStatus(statusMessage: IStatusMessage): Promise<IClientResponse> {
    dlog('executing sendStatusMessage mutation')

    return this.client
      .post('', { query: SEND_STATUS_MESSAGE_MUTATION, variables: { data: statusMessage } })
      .then(({ data }) => data.data.sendStatusMessage)
      .catch(error => error)
  }
}
