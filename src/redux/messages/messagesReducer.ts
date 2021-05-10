import {
  SendMessageActionTypes,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS
} from './actionTypes'
import { MessagesResponseType } from './model'


export interface State {
  isLoading: boolean
  messages: MessagesResponseType | null
}

export const initialState: State = {
  messages: null,
  isLoading: false,
}

export const messagesReducer = (state: State = initialState, action: SendMessageActionTypes) => {
  switch (action.type) {
  case SEND_MESSAGE_START:
    return {
      isLoading: true,
    }
  case SEND_MESSAGE_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case SEND_MESSAGE_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  case FETCH_MESSAGES_START:
    return {
      isLoading: true,
    }
  case FETCH_MESSAGES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      messages: action.payload
    }
  case FETCH_MESSAGES_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  default:
    return state
  }
}
