import { ResponseType,PostResponseType } from './model'

export const ADD_LOCATION_START = 'ADD_LOCATION_START'
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS'
export const ADD_LOCATION_FAILURE = 'ADD_LOCATION_FAILURE'
export const FETCH_ALL_LOCATIONS_START = 'FETCH_ALL_LOCATIONS_START'
export const FETCH_ALL_LOCATIONS_SUCCESS = 'FETCH_ALL_LOCATIONS_SUCCESS'
export const FETCH_ALL_LOCATIONS_FAILURE = 'FETCH_ALL_LOCATIONS_FAILURE'

export interface AddLocationStart {
  type: typeof ADD_LOCATION_START
}

export interface AddLocationSuccess {
  type: typeof ADD_LOCATION_SUCCESS
  payload: PostResponseType
}

export interface AddLocationFailure {
  type: typeof ADD_LOCATION_FAILURE
  payload: PostResponseType
}

export interface FetchAllLocationsStart {
  type: typeof FETCH_ALL_LOCATIONS_START
}

export interface FetchAllLocationsSuccess {
  type: typeof FETCH_ALL_LOCATIONS_SUCCESS
  payload: ResponseType
}

export interface FetchAllLocationsFailure {
  type: typeof FETCH_ALL_LOCATIONS_FAILURE
}

export const addLocationStart = (): AddLocationStart => {
  return { type: 'ADD_LOCATION_START' }
}

export const addLocationSuccess = (payload: PostResponseType): AddLocationSuccess => {
  return { type: 'ADD_LOCATION_SUCCESS',payload }
}

export const addLocationFailure = (payload: PostResponseType): AddLocationFailure => {
  return { type: 'ADD_LOCATION_FAILURE', payload  }
}

export const fetchAllLocationsStart = (): FetchAllLocationsStart => {
  return { type: 'FETCH_ALL_LOCATIONS_START' }
}

export const fetchAllLocationsSuccess = (payload: ResponseType): FetchAllLocationsSuccess => {
  return { type: 'FETCH_ALL_LOCATIONS_SUCCESS', payload }
}

export const fetchAllLocationsFailure = (): FetchAllLocationsFailure => {
  return { type: 'FETCH_ALL_LOCATIONS_FAILURE' }
}

export type AddLocationActionTypes =
  | AddLocationStart
  | AddLocationSuccess
  | AddLocationFailure
  | FetchAllLocationsStart
  | FetchAllLocationsSuccess
  | FetchAllLocationsFailure
