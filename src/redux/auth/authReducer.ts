import { Reducer } from 'redux'
import {
  AuthActionTypes,
  LOGIN_USER_SUCCESS,
} from './actionTypes'
import { AccessTokenType } from './model'

export interface State {
  isLoggedIn: boolean
  sessionToken: AccessTokenType | null
}

export const initialState: State = {
  isLoggedIn: false,
  sessionToken: null,
}

export const authReducer: Reducer = (state: State = initialState, action: AuthActionTypes) => {
  switch (action.type) {
  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      sessionToken: action.payload,
      isLoggedIn: true,
    }

  default:
    return state
  }
}
