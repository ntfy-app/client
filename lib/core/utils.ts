import { EventCategory } from '../api'

export const checkEventCategory = (category: EventCategory): EventCategory | undefined => {
  if (!Object.values(EventCategory).includes(category)) {
    console.error(`No such event category: ${category}`)

    return
  }

  return category
}

export const processMetadata = (metadata?: any, label?: string): any | undefined => {
  if (!metadata) {
    return undefined
  }

  if (typeof metadata !== 'object' || Array.isArray(metadata)) {
    try {
      const md = {
        NTFY_STRINGIFIED: JSON.stringify(metadata),
      }

      console.warn(`Expected object instead of '${Array.isArray(metadata) ? 'array' : typeof metadata}'`)

      return md
    } catch (_error) {
      console.error(`Expected object instead of '${Array.isArray(metadata) ? 'array' : typeof metadata}'`)

      return { NTFY_CLIENT_ERROR: 'METADATA COULD NOT BE STRINGIFIED' }
    }
  }

  if (metadata.label && label) {
    metadata['NTFY_LABEL'] = label
  } else if (label) {
    metadata.label = label
  }

  return metadata
}
