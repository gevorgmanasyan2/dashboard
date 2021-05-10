import { ResponseType } from './model'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DRONES_DATA_SUCCESS = 'FETCH_DRONES_DATA_SUCCESS'
export const FETCH_DEVICES_DATA_SUCCESS = 'FETCH_DEVICES_DATA_SUCCESS'
export const FETCH_FLIGHT_DATA_SUCCESS = 'FETCH_FLIGHT_DATA_SUCCESS'
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export interface FetchDataStart {
  type: typeof FETCH_DATA_START
}
export interface FetchDronesDataSuccess {
  type: typeof FETCH_DRONES_DATA_SUCCESS
  payload: ResponseType
}
export interface FetchDevicesDataSuccess {
  type: typeof FETCH_DEVICES_DATA_SUCCESS
  payload: ResponseType
}
export interface FetchFlightDataSuccess {
  type: typeof FETCH_FLIGHT_DATA_SUCCESS
  payload: ResponseType
}
export interface FetchUserDataSuccess {
  type: typeof FETCH_USER_DATA_SUCCESS
  payload: ResponseType
}
export interface FetchDataFailure {
  type: typeof FETCH_DATA_FAILURE
}

export const fetchDataStart = (): FetchDataStart => {
  return { type: 'FETCH_DATA_START' }
}
export const fetchDronesDataSuccess = (payload: ResponseType): FetchDronesDataSuccess => {
  return { type: 'FETCH_DRONES_DATA_SUCCESS', payload }
}
export const fetchDevicesDataSuccess = (payload: ResponseType): FetchDevicesDataSuccess => {
  return { type: 'FETCH_DEVICES_DATA_SUCCESS', payload }
}
export const fetchFlightDataSuccess = (payload: ResponseType): FetchFlightDataSuccess => {
  return { type: 'FETCH_FLIGHT_DATA_SUCCESS', payload }
}
export const fetchUserDataSuccess = (payload: ResponseType): FetchUserDataSuccess => {
  return { type: 'FETCH_USER_DATA_SUCCESS', payload }
}
export const fetchDataFailure = (): FetchDataFailure => {
  return { type: 'FETCH_DATA_FAILURE' }
}

export type FetchDataActionTypes =
  | FetchDataStart
  | FetchDronesDataSuccess
  | FetchDevicesDataSuccess
  | FetchFlightDataSuccess
  | FetchUserDataSuccess
  | FetchDataFailure
