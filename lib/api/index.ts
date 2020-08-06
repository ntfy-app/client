import debug from 'debug'
import Axios, { AxiosInstance } from 'axios'
import {
  IAppLogMessageSendInput,
  IAppEventMessageSendInput,
  IAppStatusMessageSendInput,
  IClientResponse,
} from './types'

const dlog = debug('@ntfy-app/client')

export * from './types'

export type IMetadata = { [keyof: string]: any }
export type IEventMessage = IAppEventMessageSendInput
export type ILogMessage = IAppLogMessageSendInput
export type IStatusMessage = IAppStatusMessageSendInput

const gql = String.raw

const SEND_APP_EVENT_MESSAGE_MUTATION = gql`
  mutation sendAppEventMessage($data: AppEventMessageSendInput!) {
    sendAppEventMessage(data: $data) {
      success
    }
  }
`

const SEND_APP_LOG_MESSAGE_MUTATION = gql`
  mutation sendAppLogMessage($data: AppLogMessageSendInput!) {
    sendAppLogMessage(data: $data) {
      success
    }
  }
`

const SEND_APP_STATUS_MESSAGE_MUTATION = gql`
  mutation sendAppStatusMessage($data: AppStatusMessageSendInput!) {
    sendAppStatusMessage(data: $data) {
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
      .post('', { query: SEND_APP_EVENT_MESSAGE_MUTATION, variables: { data: eventMessage } })
      .then(({ data }) => data.data.sendAppEventMessage)
      .catch(error => error)
  }

  async sendLog(logMessage: ILogMessage): Promise<IClientResponse> {
    dlog('executing sendLogMessage mutation')

    return this.client
      .post('', { query: SEND_APP_LOG_MESSAGE_MUTATION, variables: { data: logMessage } })
      .then(({ data }) => data.data.sendAppLogMessage)
      .catch(error => error)
  }

  async sendStatus(statusMessage: IStatusMessage): Promise<IClientResponse> {
    dlog('executing sendStatusMessage mutation')

    return this.client
      .post('', { query: SEND_APP_STATUS_MESSAGE_MUTATION, variables: { data: statusMessage } })
      .then(({ data }) => data.data.sendAppStatusMessage)
      .catch(error => error)
  }
}
