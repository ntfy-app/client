import { EventCategory } from '../api'
import { dlog } from '.'

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
    dlog(`Expected object instead of '${Array.isArray(metadata) ? 'array' : typeof metadata}'`)

    try {
      const md = {
        NTFY_STRINGIFIED: JSON.stringify(metadata),
      }

      return md
    } catch (_error) {
      return { NTFY_CLIENT_ERROR: 'METADATA COULD NOT BE STRINGIFIED' }
    }
  }

  if (metadata.label && label) {
    dlog('metadata has label property set > client label goes to NTFY_LABEL')

    metadata['NTFY_LABEL'] = label
  } else if (label) {
    dlog('attaching label to metadata obj')

    metadata.label = label
  }

  return metadata
}
