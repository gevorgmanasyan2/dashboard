import { Reducer } from 'redux'
import {
  FetchDataActionTypes,
  FETCH_DRONES_DATA_SUCCESS,
  FETCH_DEVICES_DATA_SUCCESS,
  FETCH_FLIGHT_DATA_SUCCESS,
  FETCH_USER_DATA_SUCCESS,
} from './actionTypes'

export interface State {
  deviceCount: number
  droneCount: number
  flightCount: number
  userCount: number
}

export const initialState: State = {
  deviceCount: 0,
  droneCount: 0,
  flightCount: 0,
  userCount: 0,
}

export const fetchDataReducer: Reducer = (state: State = initialState, action: FetchDataActionTypes) => {
  switch (action.type) {
  case FETCH_DRONES_DATA_SUCCESS:
    return {
      ...state,
      droneCount: action.payload,
    }
  case FETCH_DEVICES_DATA_SUCCESS:
    return {
      ...state,
      deviceCount: action.payload,
    }
  case FETCH_FLIGHT_DATA_SUCCESS:
    return {
      ...state,
      flightCount: action.payload,
    }
  case FETCH_USER_DATA_SUCCESS:
    return {
      ...state,
      userCount: action.payload,
    }
  default:
    return state
  }
}
