import { MessagesResponseType } from './model'

export const SEND_MESSAGE_START = 'SEND_MESSAGE_START'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'
export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE'

export interface SendMessageStart {
  type: typeof SEND_MESSAGE_START
}

export interface SendMessageSuccess {
  type: typeof SEND_MESSAGE_SUCCESS
}

export interface SendMessageFailure {
  type: typeof SEND_MESSAGE_FAILURE
}

export interface FetchMessagesStart {
  type: typeof FETCH_MESSAGES_START
}

export interface FetchMessagesSuccess {
  type: typeof FETCH_MESSAGES_SUCCESS
  payload: MessagesResponseType
}

export interface FetchMessagesFailure {
  type: typeof FETCH_MESSAGES_FAILURE
}

export const sendMessageStart = (): SendMessageStart => {
  return { type: 'SEND_MESSAGE_START' }
}

export const sendMessageSuccess = (): SendMessageSuccess => {
  return { type: 'SEND_MESSAGE_SUCCESS' }
}

export const sendMessageFailure = (): SendMessageFailure => {
  return { type: 'SEND_MESSAGE_FAILURE' }
}

export const fetchMessagesStart = (): FetchMessagesStart => {
  return { type: 'FETCH_MESSAGES_START' }
}

export const fetchMessagesSuccess = (payload: MessagesResponseType): FetchMessagesSuccess => {
  return { type: 'FETCH_MESSAGES_SUCCESS', payload }
}

export const fetchMessagesFailure = (): FetchMessagesFailure => {
  return { type: 'FETCH_MESSAGES_FAILURE' }
}

export type SendMessageActionTypes =
  | SendMessageStart
  | SendMessageSuccess
  | SendMessageFailure
  | FetchMessagesStart
  | FetchMessagesSuccess
  | FetchMessagesFailure
