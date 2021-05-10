import { Reducer } from 'redux'
import {
  FetchDataActionTypes,
  FETCH_QUESTIONNAIRE_FILES_START,
  FETCH_QUESTIONNAIRE_FILES_SUCCESS,
  FETCH_QUESTIONNAIRE_QUESTIONS_START,
  FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS,
  FETCH_WAIVERDOCUMENT_START,
  FETCH_WAIVERDOCUMENT_SUCCESS,
  FETCH_WAIVERS_DATA_START,
  FETCH_WAIVERS_DATA_SUCCESS,
  FETCH_WAIVERTYPES_START,
  FETCH_WAIVERTYPES_SUCCESS,
  UPDATE_STATUS_START,
  UPDATE_STATUS_SUCCESS,
  UPLOAD_FILES_START,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_QUESTIONNAIRE_FILES_START,
  UPLOAD_QUESTIONNAIRE_FILES_SUCCESS,
} from './actionTypes'

export interface State {
  isLoading: boolean
  waivers?: object[]
  waiverTypes?: object[]
  questionnaireFiles?: object[]
  questionnaireQuestions?: object[]
  docs?: object[]
}

export const initialState: State = {
  waivers: [],
  waiverTypes: [],
  docs: [],
  questionnaireFiles: [],
  questionnaireQuestions: [],
  isLoading: false,
}

export const fetchWaiverDataReducer: Reducer = (
  state: State = initialState,
  action: FetchDataActionTypes
) => {
  switch (action.type) {
  case FETCH_WAIVERS_DATA_START:
    return {
      isLoading: true,
    }
  case FETCH_WAIVERS_DATA_SUCCESS:
    return {
      ...state,
      waivers: action.payload,
      isLoading: false,
    }
  case FETCH_WAIVERTYPES_START:
    return {
      isLoading: true,
    }
  case FETCH_WAIVERTYPES_SUCCESS:
    return {
      ...state,
      waiverTypes: action.payload,
      isLoading: false,
    }
  case FETCH_WAIVERDOCUMENT_START:
    return {
      isLoading: true,
    }
  case FETCH_WAIVERDOCUMENT_SUCCESS:
    return {
      ...state,
      docs: action.payload,
      isLoading: false,
    }
  case FETCH_QUESTIONNAIRE_FILES_START:
    return {
      isLoading: true,
    }
  case FETCH_QUESTIONNAIRE_FILES_SUCCESS:
    return {
      ...state,
      questionnaireFiles: action.payload,
      isLoading: false,
    }
  case FETCH_QUESTIONNAIRE_QUESTIONS_START:
    return {
      isLoading: true,
    }
  case FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS:
    return {
      ...state,
      questionnaireQuestions: action.payload,
      isLoading: false,
    }
  case UPLOAD_FILES_START:
    return {
      isLoading: true,
    }
  case UPLOAD_FILES_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case UPLOAD_QUESTIONNAIRE_FILES_START:
    return {
      isLoading: true,
    }
  case UPLOAD_QUESTIONNAIRE_FILES_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  case UPDATE_STATUS_START:
    return {
      isLoading: true,
    }
  case UPDATE_STATUS_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
  default:
    return state
  }
}
