import { ApiClient, EventMessage, LogMessage, StatusMessage, LogLevel } from '../api'

interface ClientInitOptions {
  api: string
  label?: string
}

export class Client {
  api: string
  secret: string
  client: ApiClient
  label?: string

  constructor(secret: string, options?: ClientInitOptions) {
    this.api = options?.api || 'https://ntfy.live/graphql'

    this.secret = secret
    this.client = new ApiClient(this.api, secret)

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
      .sendEvent(eventMessage)
      .then(({ success }) => !success && console.error('Could not deliver event message!'))
      .catch(error => console.error(error))
  }

  log(logMessage: LogMessage) {
    this.client
      .sendLog(logMessage)
      .then(({ success }) => !success && console.error('Could not deliver log message!'))
      .catch(error => console.error(error))
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
      .sendStatus(statusMessage)
      .then(({ success }) => !success && console.error('Could not deliver status message!'))
      .catch(error => console.error(error))
  }
}
