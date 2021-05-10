import { UserResponseType } from './model'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'
export const VERIFY_CODE_START = 'VERIFY_CODE_START'
export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS'
export const VERIFY_CODE_FAILURE = 'VERIFY_CODE_FAILURE'
export const UPDATE_USER_DATA_START = 'UPDATE_USER_DATA_START'
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS'
export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE'

export interface GetUserStart {
  type: typeof GET_USER_START
}

export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS
  payload: UserResponseType
}

export interface GetUserFailure {
  type: typeof GET_USER_FAILURE
}
export interface VerifyCodeStart {
  type: typeof VERIFY_CODE_START
}

export interface VerifyCodeSuccess {
  type: typeof VERIFY_CODE_SUCCESS
}

export interface VerifyCodeFailure {
  type: typeof VERIFY_CODE_FAILURE
}
export interface UpdateUserDataStart {
  type: typeof UPDATE_USER_DATA_START
}

export interface UpdateUserDataSuccess {
  type: typeof UPDATE_USER_DATA_SUCCESS
}

export interface UpdateUserDataFailure {
  type: typeof UPDATE_USER_DATA_FAILURE
}

export const getUserStart = (): GetUserStart => {
  return { type: 'GET_USER_START' }
}

export const getUserSuccess = (payload: UserResponseType): GetUserSuccess => {
  return { type: 'GET_USER_SUCCESS', payload }
}

export const getUserFailure = (): GetUserFailure => {
  return { type: 'GET_USER_FAILURE' }
}
export const verifyCodeStart = (): VerifyCodeStart => {
  return { type: 'VERIFY_CODE_START' }
}

export const verifyCodeSuccess = (): VerifyCodeSuccess => {
  return { type: 'VERIFY_CODE_SUCCESS' }
}

export const verifyCodeFailure = (): VerifyCodeFailure => {
  return { type: 'VERIFY_CODE_FAILURE' }
}
export const updateUserDataStart = (): UpdateUserDataStart => {
  return { type: 'UPDATE_USER_DATA_START' }
}

export const updateUserDataSuccess = (): UpdateUserDataSuccess => {
  return { type: 'UPDATE_USER_DATA_SUCCESS' }
}

export const updateUserDataFailure = (): UpdateUserDataFailure => {
  return { type: 'UPDATE_USER_DATA_FAILURE' }
}

export type GetUserActionTypes =
  | GetUserStart
  | GetUserSuccess
  | GetUserFailure
  | VerifyCodeStart
  | VerifyCodeSuccess
  | VerifyCodeFailure
  | UpdateUserDataStart
  | UpdateUserDataSuccess
  | UpdateUserDataFailure
