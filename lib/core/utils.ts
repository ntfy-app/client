import debug from 'debug'
import {
  IAppEventCategory,
  IAppLogLevel,
  IAppState,
  IEventMessage,
  ILogMessage,
  IStatusMessage,
  IMetadata,
} from '../api'
import { Metadata, EventMessage, LogLevel, LogMessage, AppState, EventCategory, StatusMessage } from './types'

const dlog = debug('@ntfy-app/client')

export const transformEventMessage = ({ title, message, category, metadata }: EventMessage): IEventMessage => {
  return {
    title,
    message,
    category: checkEventCategory(category),
    metadata: checkMetadata(metadata),
  }
}

export const transformLogMessage = ({ level, message, metadata }: LogMessage): ILogMessage => {
  return {
    level: checkLogLevel(level),
    message,
    metadata: checkMetadata(metadata),
  }
}

export const transformStatusMessage = ({ state, message, metadata }: StatusMessage): IStatusMessage => {
  return {
    state: checkIAppState(state),
    message,
    metadata: checkMetadata(metadata),
  }
}

const checkEventCategory = (category?: EventCategory): IAppEventCategory | undefined => {
  if (!category) {
    return undefined
  }
  if (!Object.keys(IAppEventCategory).includes(category)) {
    console.error(`No such Event Category: ${category}. Fallback is ${IAppEventCategory.GENERAL}`)

    return IAppEventCategory.GENERAL
  }

  return IAppEventCategory[category]
}

const checkIAppState = (state: AppState): IAppState => {
  if (!Object.keys(IAppState).includes(state)) {
    console.error(`No such app state: ${state}. Fallback is ${IAppState.UNKNOWN}`)

    return IAppState.UNKNOWN
  }

  return IAppState[state]
}

const checkLogLevel = (level: LogLevel): IAppLogLevel => {
  if (!Object.keys(IAppLogLevel).includes(level)) {
    console.error(`No such log level: ${level}. Fallback is ${IAppLogLevel.ERROR}`)

    return IAppLogLevel.ERROR
  }

  return IAppLogLevel[level]
}

const checkMetadata = (metadata?: Metadata, label?: string): IMetadata | undefined => {
  if (!metadata) {
    return label ? { ['NTFY_LABEL']: label } : undefined
  }

  if (typeof metadata !== 'object' || Array.isArray(metadata)) {
    dlog(`expected object instead of '${Array.isArray(metadata) ? 'array' : typeof metadata}'`)

    try {
      dlog('stringifying metadata to send to api')

      return {
        ['NTFY_STRINGIFIED']: JSON.stringify(metadata),
        ['NTFY_LABEL']: label,
      }
    } catch (_error) {
      dlog('could not stringify metadata')

      return {
        ['NTFY_CLIENT_ERROR']: 'METADATA COULD NOT BE STRINGIFIED',
        ['NTFY_LABEL']: label,
      }
    }
  }

  if (label) {
    metadata['NTFY_LABEL'] = label
  }

  return metadata
}
