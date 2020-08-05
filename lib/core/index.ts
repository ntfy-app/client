import debug from 'debug'

import { ApiClient, EventMessage, LogMessage, StatusMessage, LogLevel } from '../api'
import { processMetadata, checkEventCategory, checkLogLevel } from './utils'

export const dlog = debug('@ntfy-app/client')

interface ClientInitOptions {
  api?: string
  label?: string
}

/**
 * The Notify App's javascript client to be used for sending events, logs and status messages.
 * @class
 */
export class Client {
  api: string
  secret: string
  client: ApiClient
  label?: string

  /**
   * @param {string} secret The app's client-secret
   * @param {ClientInitOptions} [options] Options object to configure the client instance
   * @param {string} [options.api] Change the default API
   * @param {string} [options.label] Label the client instance (e.g. process-id)
   * @example
   *  new Client('clientse_dev_abcdefghijkl...xyz', {
   *    label: 'instance-2',
   *  })
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  constructor(secret: string, options?: ClientInitOptions) {
    this.api = options?.api || 'https://ntfy.live/graphql'

    this.secret = secret
    this.client = new ApiClient(this.api, secret)

    this.label = options?.label

    dlog('initialized new client: %O', this)
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
   * @param eventMessage The event message object
   * @param {string} eventMessage.title Title of the event
   * @param {string} [eventMessage.category] Optional event category (GENERAL, MAIL, PAYMENT, BLOG, etc.)
   * @param {string} eventMessage.message Message
   * @param {Object} [eventMessage.metadata] Optional metadata object
   * @example
   *  client.event({
   *    title: 'New Blogpost',
   *    message: `Just published the new post '${post}'!`,
   *    category: 'POST',
   *  })
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  event(eventMessage: EventMessage) {
    eventMessage.category = eventMessage.category && checkEventCategory(eventMessage.category)
    eventMessage.metadata = processMetadata(eventMessage.metadata, this.label)

    dlog('sending event message: %O', eventMessage)

    this.client
      .sendEvent(eventMessage)
      .then(({ success }) => !success && console.error('Could not deliver event message!'))
      .catch(error => console.error(error))
  }

  /**
   * Sends a log message to the Notify App
   * @param logMessage The log message object
   * @param logMessage.level Log-level (INFO, WARN, ERROR, FATAL)
   * @param {string} logMessage.message Message
   * @param {Object} [logMessage.metadata] Optional metadata object
   * @example
   *  client.log({
   *    level: 'ERROR',
   *    message: `Could not reconnect to database!`,
   *    metadata: { retries: 10 },
   *  })
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  log(logMessage: LogMessage) {
    logMessage.level = checkLogLevel(logMessage.level)
    logMessage.metadata = processMetadata(logMessage.metadata, this.label)

    dlog('sending event message: %O', logMessage)

    this.client
      .sendLog(logMessage)
      .then(({ success }) => !success && console.error('Could not deliver log message!'))
      .catch(error => console.error(error))
  }

  /**
   * Sends a log message to the Notify App
   * @param {string} message The info-log message
   * @param {Object} [metadata] Optional metadata object
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  info(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.INFO, metadata })
  }

  /**
   * Sends a log message to the Notify App
   * @param {string} message The warn-log message
   * @param {Object} [metadata] Optional metadata object
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  warn(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.WARN, metadata })
  }

  /**
   * Sends a log message to the Notify App
   * @param {string} message The error-log message
   * @param {Object} [metadata] Optional metadata object
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  error(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.ERROR, metadata })
  }

  /**
   * Sends a log message to the Notify App
   * @param {string} message The fatal-log message
   * @param {Object} [metadata] Optional metadata object
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  fatal(message: string, metadata?: any) {
    this.log({ message, level: LogLevel.FATAL, metadata })
  }

  /**
   * Sends the present status of your application to the Notify App
   * @param statusMessage The status message object
   * @param {string} statusMessage.state Actual state (UP, DOWN, CRITICAL, SHUTDOWN, UNKNOWN)
   * @param {string} statusMessage.message Message
   * @param {Object} [statusMessage.metadata] Optional metadata object
   * @example
   *  client.status({
   *    state: 'UP',
   *    message: `App is up and running!`,
   *  })
   * @see Read the {@link http://github.com/ntfy-app/client|docs}.
   */
  status(statusMessage: StatusMessage) {
    statusMessage.metadata = processMetadata(statusMessage.metadata, this.label)

    dlog('sending event message: %O', statusMessage)

    this.client
      .sendStatus(statusMessage)
      .then(({ success }) => !success && console.error('Could not deliver status message!'))
      .catch(error => console.error(error))
  }
}
