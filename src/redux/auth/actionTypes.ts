import { AccessTokenType } from './model'

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const SET_USER_TYPE = 'SET_USER_TYPE'
export const IS_USER_LOGGED = 'IS_USER_LOGGED'

export interface LoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS
  payload: AccessTokenType
}
export interface LoginUserFailure {
  type: typeof LOGIN_USER_FAILURE
}

export interface SetCurrentUserAction {
  type: typeof SET_USER_TYPE
}

export interface IsUserLogged {
  type: typeof IS_USER_LOGGED
}

export const loginUserSuccess = (payload: AccessTokenType): LoginUserSuccess => {
  return { type: 'LOGIN_USER_SUCCESS', payload }
}

export const loginUserFailure = (): LoginUserFailure => {
  return { type: 'LOGIN_USER_FAILURE' }
}
export const isUserLogged = (): IsUserLogged => {
  return { type: 'IS_USER_LOGGED' }
}

export type AuthActionTypes =
  | LoginUserSuccess
  | LoginUserFailure
  | SetCurrentUserAction
  | IsUserLogged
