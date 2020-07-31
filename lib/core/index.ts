import { ApiClient, EventMessage, LogMessage, StatusMessage, LogLevel } from '../api'
import { processMetadata, checkEventCategory } from './utils'

interface ClientInitOptions {
  api?: string
  label?: string
}

/**
 * The Notify App's javascript client to be used for sending events, logs and status messages.
 */
export class Client {
  api: string
  secret: string
  client: ApiClient
  label?: string

  /**
   * @param secret The app's client-secret
   * @param options Options object to configure the client instance
   */
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

  /**
   * Sends an event message to the Notify App
   * @param {string} eventMessage The event message object
   * @example
   *  client.event({
   *    title: 'New Blogpost',
   *    message: `Just published the new post '${post}'!`,
   *    category: 'POST',
   *  })
   */
  event(eventMessage: EventMessage) {
    eventMessage.category = eventMessage.category && checkEventCategory(eventMessage.category)
    eventMessage.metadata = processMetadata(eventMessage.metadata, this.label)

    this.client
      .sendEvent(eventMessage)
      .then(({ success }) => !success && console.error('Could not deliver event message!'))
      .catch(error => console.error(error))
  }

  /**
   * log
   * Sends a log message to the Notify App
   * @param logMessage The log message object
   * @example
   *  client.log({
   *    level: 'ERROR',
   *    message: `Could not reconnect to database!`,
   *    metadata: { retries: 10 },
   *  })
   */
  log(logMessage: LogMessage) {
    logMessage.metadata = processMetadata(logMessage.metadata, this.label)

    this.client
      .sendLog(logMessage)
      .then(({ success }) => !success && console.error('Could not deliver log message!'))
      .catch(error => console.error(error))
  }

  /**
   * info
   * Sends a log message to the Notify App
   * @param message The info-log message
   * @param metadata JSON object containing metadata
   */
  info(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.Info, metadata })
  }

  /**
   * warn
   * Sends a log message to the Notify App
   * @param message The warn-log message
   * @param metadata JSON object containing metadata
   */
  warn(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.Warn, metadata })
  }

  /**
   * error
   * Sends a log message to the Notify App
   * @param message The error-log message
   * @param metadata JSON object containing metadata
   */
  error(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.Error, metadata })
  }

  /**
   * fatal
   * Sends a log message to the Notify App
   * @param message The fatal-log message
   * @param metadata JSON object containing metadata
   */
  fatal(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.Fatal, metadata })
  }

  /**
   * status
   * Sends the present status of your application to the Notify App
   * @param statusMessage The status message object
   * @example
   *  client.status({
   *    state: 'UP',
   *    message: `App is up and running!`,
   *  })
   */
  status(statusMessage: StatusMessage) {
    statusMessage.metadata = processMetadata(statusMessage.metadata, this.label)

    this.client
      .sendStatus(statusMessage)
      .then(({ success }) => !success && console.error('Could not deliver status message!'))
      .catch(error => console.error(error))
  }
}
