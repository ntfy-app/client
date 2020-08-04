import { EventCategory, LogLevel } from '../api'
import { dlog } from '.'

export const checkEventCategory = (category: EventCategory): EventCategory | undefined => {
  if (!Object.values(EventCategory).includes(category)) {
    console.error(`No such event category: ${category}`)

    return
  }

  return category
}

export const checkLogLevel = (level: LogLevel): LogLevel => {
  if (!Object.values(LogLevel).includes(level)) {
    console.error(`No such log level: ${level}. Fallback is ${LogLevel.Error}`)

    return LogLevel.Error
  }

  return level
}

export const processMetadata = (metadata?: any, label?: string): any | undefined => {
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
