import { Reducer } from 'redux'
import {
  AddLocationActionTypes,
  ADD_LOCATION_FAILURE,
  ADD_LOCATION_START,
  ADD_LOCATION_SUCCESS,
  FETCH_ALL_LOCATIONS_FAILURE,
  FETCH_ALL_LOCATIONS_START,
  FETCH_ALL_LOCATIONS_SUCCESS
} from './actionTypes'

export interface State {
  isLoading: boolean
  locations?: object[]
  responseMessage: string
  status: boolean
}

export const initialState: State = {
  locations: [],
  isLoading: false,
  responseMessage: '',
  status: false
}

export const locationReducer: Reducer = (state: State = initialState, action: AddLocationActionTypes) => {
  switch (action.type) {
  case ADD_LOCATION_START:
    return {
      isLoading: true,
    }
  case ADD_LOCATION_SUCCESS:
    return {
      ...state,
      isLoading: false,
      responseMessage: action.payload
    }
  case ADD_LOCATION_FAILURE:
    return {
      ...state,
      isLoading: false,
      responseMessage: action.payload
    }
  case FETCH_ALL_LOCATIONS_START:
    return {
      isLoading: true,
    }
  case FETCH_ALL_LOCATIONS_SUCCESS:
    return {
      ...state,
      isLoading: true,
      locations: action.payload
    }
  case FETCH_ALL_LOCATIONS_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  default:
    return state
  }
}
