import { Reducer } from 'redux'
import {
  GetUserActionTypes,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  VERIFY_CODE_START,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_FAILURE,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE
} from './actionTypes'
import { UserResponseType } from './model'


export interface State {
  isLoading: boolean
  userData: UserResponseType | null
  
}

export const initialState: State = {
  userData: null,
  isLoading: false,
}

export const userReducer: Reducer = (state: State = initialState, action: GetUserActionTypes) => {
  switch (action.type) {
  case GET_USER_START:
    return {
      ...state,
      isLoading: true,
    }
  case GET_USER_SUCCESS:
    return {
      ...state,
      userData: action.payload,
      isLoading: false
    }
  case GET_USER_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  case VERIFY_CODE_START:
    return {
      ...state,
      isLoading: true,
    }
  case VERIFY_CODE_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case VERIFY_CODE_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  case UPDATE_USER_DATA_START:
    return {
      isLoading: true,
    }
  case UPDATE_USER_DATA_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case UPDATE_USER_DATA_FAILURE:
    return {
      ...state,
      isLoading: false,
    }
  default:
    return state
  }
}
