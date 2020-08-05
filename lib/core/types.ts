import { IAppEventCategory, IAppLogLevel, IAppState } from '../api'

export type Metadata = { [key: string]: any } | null | undefined

export type EventCategory = keyof typeof IAppEventCategory
export interface EventMessage {
  title: string
  category?: EventCategory
  message: string
  metadata?: Metadata
}

export type LogLevel = keyof typeof IAppLogLevel
export interface LogMessage {
  level: LogLevel
  message: string
  metadata?: Metadata
}

export type AppState = keyof typeof IAppState
export interface StatusMessage {
  state: AppState
  message: string
  metadata?: Metadata
}
