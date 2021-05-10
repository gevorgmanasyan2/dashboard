import { ResponseType } from './model'

export const FETCH_WAIVERS_DATA_START = 'FETCH_WAIVERS_DATA_START'
export const FETCH_WAIVERS_DATA_SUCCESS = 'FETCH_WAIVERS_DATA_SUCCESS'
export const FETCH_WAIVERS_DATA_FAILURE = 'FETCH_WAIVERS_DATA_FAILURE'
export const FETCH_WAIVERTYPES_START = 'FETCH_WAIVERTYPES_START'
export const FETCH_WAIVERTYPES_SUCCESS = 'FETCH_WAIVERTYPES_SUCCESS'
export const FETCH_WAIVERTYPES_FAILURE = 'FETCH_WAIVERTYPES_FAILURE'
export const FETCH_WAIVERDOCUMENT_START = 'FETCH_WAIVERDOCUMENT_START'
export const FETCH_WAIVERDOCUMENT_SUCCESS = 'FETCH_WAIVERDOCUMENT_SUCCESS'
export const FETCH_WAIVERDOCUMENT_FAILURE = 'FETCH_WAIVERDOCUMENT_FAILURE'
export const FETCH_QUESTIONNAIRE_FILES_START = 'FETCH_QUESTIONNAIRE_FILES_START'
export const FETCH_QUESTIONNAIRE_FILES_SUCCESS = 'FETCH_QUESTIONNAIRE_FILES_SUCCESS'
export const FETCH_QUESTIONNAIRE_FILES_FAILURE = 'FETCH_QUESTIONNAIRE_FILES_FAILURE'
export const FETCH_QUESTIONNAIRE_QUESTIONS_START = 'FETCH_QUESTIONNAIRE_QUESTIONS_START'
export const FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS = 'FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONNAIRE_QUESTIONS_FAILURE = 'FETCH_QUESTIONNAIRE_QUESTIONS_FAILURE'
export const ADD_WAIVER_START = 'ADD_WAIVER_START'
export const ADD_WAIVER_SUCCESS = 'ADD_WAIVER_SUCCESS'
export const ADD_WAIVER_FAILURE = 'ADD_WAIVER_FAILURE'
export const UPLOAD_FILES_START = 'UPLOAD_FILES_START'
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS'
export const UPLOAD_FILES_FAILURE = 'UPLOAD_FILES_FAILURE'
export const UPLOAD_QUESTIONNAIRE_FILES_START = 'UPLOAD_QUESTIONNAIRE_FILES_START'
export const UPLOAD_QUESTIONNAIRE_FILES_SUCCESS = 'UPLOAD_QUESTIONNAIRE_FILES_SUCCESS'
export const UPLOAD_QUESTIONNAIRE_FILES_FAILURE = 'UPLOAD_QUESTIONNAIRE_FILES_FAILURE'
export const UPDATE_STATUS_START = 'UPDATE_STATUS_START'
export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS'
export const UPDATE_STATUS_FAILURE = 'UPDATE_STATUS_FAILURE'
export interface FetchDataStart {
  type: typeof FETCH_WAIVERS_DATA_START
}
export interface FetchWaiversDataSuccess {
  type: typeof FETCH_WAIVERS_DATA_SUCCESS
  payload: ResponseType
}

export interface FetchDataFailure {
  type: typeof FETCH_WAIVERS_DATA_FAILURE
}
export interface FetchWaiverTypesStart {
  type: typeof FETCH_WAIVERTYPES_START
}
export interface FetchWaiverTypesSuccess {
  type: typeof FETCH_WAIVERTYPES_SUCCESS
  payload: ResponseType
}

export interface FetchWaiverTypesFailure {
  type: typeof FETCH_WAIVERTYPES_FAILURE
}
export interface FetchWaiverDocumentStart {
  type: typeof FETCH_WAIVERDOCUMENT_START
}
export interface FetchWaiverDocumentSuccess {
  type: typeof FETCH_WAIVERDOCUMENT_SUCCESS
  payload: ResponseType
}

export interface FetchWaiverDocumentFailure {
  type: typeof FETCH_WAIVERDOCUMENT_FAILURE
}
export interface FetchQuestionnaireFilesStart {
  type: typeof FETCH_QUESTIONNAIRE_FILES_START
}
export interface FetchQuestionnaireFilesSuccess {
  type: typeof FETCH_QUESTIONNAIRE_FILES_SUCCESS
  payload: ResponseType
}

export interface FetchQuestionnaireFilesFailure {
  type: typeof FETCH_QUESTIONNAIRE_FILES_FAILURE
}
export interface FetchQuestionnaireQuestionsStart {
  type: typeof FETCH_QUESTIONNAIRE_QUESTIONS_START
}
export interface FetchQuestionnaireQuestionsSuccess {
  type: typeof FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS
  payload: ResponseType
}

export interface FetchQuestionnaireQuestionsFailure {
  type: typeof FETCH_QUESTIONNAIRE_QUESTIONS_FAILURE
}
export interface AddWaiverStart {
  type: typeof ADD_WAIVER_START
}
export interface AddWaiverSuccess {
  type: typeof ADD_WAIVER_SUCCESS
}

export interface AddWaiverFailure {
  type: typeof ADD_WAIVER_FAILURE
}
export interface UploadFileStart {
  type: typeof UPLOAD_FILES_START
}
export interface UploadFileSuccess {
  type: typeof UPLOAD_FILES_SUCCESS
}

export interface UploadFileFailure {
  type: typeof UPLOAD_FILES_FAILURE
}
export interface UploadQuestionnaireFileStart {
  type: typeof UPLOAD_QUESTIONNAIRE_FILES_START
}
export interface UploadQuestionnaireFileSuccess {
  type: typeof UPLOAD_QUESTIONNAIRE_FILES_SUCCESS
}

export interface UploadQuestionnaireFileFailure {
  type: typeof UPLOAD_QUESTIONNAIRE_FILES_FAILURE
}
export interface UpdateStatusStart {
  type: typeof UPDATE_STATUS_START
}
export interface UpdateStatusSuccess {
  type: typeof UPDATE_STATUS_SUCCESS
}

export interface UpdateStatusFailure {
  type: typeof UPDATE_STATUS_FAILURE
}

export const fetchDataStart = (): FetchDataStart => {
  return { type: 'FETCH_WAIVERS_DATA_START' }
}

export const fetchWaiversDataSuccess = (payload: ResponseType): FetchWaiversDataSuccess => {
  return { type: 'FETCH_WAIVERS_DATA_SUCCESS', payload }
}

export const fetchDataFailure = (): FetchDataFailure => {
  return { type: 'FETCH_WAIVERS_DATA_FAILURE' }
}

export const fetchWaiverTypesStart = (): FetchWaiverTypesStart => {
  return { type: 'FETCH_WAIVERTYPES_START' }
}

export const fetchWaiverTypesSuccess = (payload: ResponseType): FetchWaiverTypesSuccess => {
  return { type: 'FETCH_WAIVERTYPES_SUCCESS', payload }
}

export const fetchWaiverTypesFailure = (): FetchWaiverTypesFailure => {
  return { type: 'FETCH_WAIVERTYPES_FAILURE' }
}

export const fetchWaiverDocumentStart = (): FetchWaiverDocumentStart => {
  return { type: 'FETCH_WAIVERDOCUMENT_START' }
}

export const fetchWaiverDocumentSuccess = (payload: ResponseType): FetchWaiverDocumentSuccess => {
  return { type: 'FETCH_WAIVERDOCUMENT_SUCCESS', payload }
}

export const fetchWaiverDocumentFailure = (): FetchWaiverDocumentFailure => {
  return { type: 'FETCH_WAIVERDOCUMENT_FAILURE' }
}
export const fetchQuestionnaireFilesStart = (): FetchQuestionnaireFilesStart => {
  return { type: 'FETCH_QUESTIONNAIRE_FILES_START' }
}

export const fetchQuestionnaireFilesSuccess = (
  payload: ResponseType
): FetchQuestionnaireFilesSuccess => {
  return { type: 'FETCH_QUESTIONNAIRE_FILES_SUCCESS', payload }
}

export const fetchQuestionnaireFilesFailure = (): FetchQuestionnaireFilesFailure => {
  return { type: 'FETCH_QUESTIONNAIRE_FILES_FAILURE' }
}
export const fetchQuestionnaireQuestionsStart = (): FetchQuestionnaireQuestionsStart => {
  return { type: 'FETCH_QUESTIONNAIRE_QUESTIONS_START' }
}

export const fetchQuestionnaireQuestionsSuccess = (
  payload: ResponseType
): FetchQuestionnaireQuestionsSuccess => {
  return { type: 'FETCH_QUESTIONNAIRE_QUESTIONS_SUCCESS', payload }
}

export const fetchQuestionnaireQuestionsFailure = (): FetchQuestionnaireQuestionsFailure => {
  return { type: 'FETCH_QUESTIONNAIRE_QUESTIONS_FAILURE' }
}

export const addWaiverStart = (): AddWaiverStart => {
  return { type: 'ADD_WAIVER_START' }
}

export const addWaiverSuccess = (): AddWaiverSuccess => {
  return { type: 'ADD_WAIVER_SUCCESS' }
}

export const addWaiverFailure = (): AddWaiverFailure => {
  return { type: 'ADD_WAIVER_FAILURE' }
}

export const uploadFileStart = (): UploadFileStart => {
  return { type: 'UPLOAD_FILES_START' }
}

export const uploadFileSuccess = (): UploadFileSuccess => {
  return { type: 'UPLOAD_FILES_SUCCESS' }
}

export const uploadFileFailure = (): UploadFileFailure => {
  return { type: 'UPLOAD_FILES_FAILURE' }
}
export const uploadQuestionnaireFileStart = (): UploadQuestionnaireFileStart => {
  return { type: 'UPLOAD_QUESTIONNAIRE_FILES_START' }
}

export const uploadQuestionnaireFileSuccess = (): UploadQuestionnaireFileSuccess => {
  return { type: 'UPLOAD_QUESTIONNAIRE_FILES_SUCCESS' }
}

export const uploadQuestionnaireFileFailure = (): UploadQuestionnaireFileFailure => {
  return { type: 'UPLOAD_QUESTIONNAIRE_FILES_FAILURE' }
}
export const updateStatusStart = (): UpdateStatusStart => {
  return { type: 'UPDATE_STATUS_START' }
}

export const updateStatusSuccess = (): UpdateStatusSuccess => {
  return { type: 'UPDATE_STATUS_SUCCESS' }
}

export const updateStatusFailure = (): UpdateStatusFailure => {
  return { type: 'UPDATE_STATUS_FAILURE' }
}

export type FetchDataActionTypes =
  | FetchDataStart
  | FetchWaiversDataSuccess
  | FetchDataFailure
  | FetchWaiverTypesStart
  | FetchWaiverTypesSuccess
  | FetchWaiverTypesFailure
  | FetchWaiverDocumentStart
  | FetchWaiverDocumentSuccess
  | FetchWaiverDocumentFailure
  | FetchQuestionnaireFilesStart
  | FetchQuestionnaireFilesSuccess
  | FetchQuestionnaireFilesFailure
  | FetchQuestionnaireQuestionsStart
  | FetchQuestionnaireQuestionsSuccess
  | FetchQuestionnaireQuestionsFailure
  | AddWaiverStart
  | AddWaiverSuccess
  | AddWaiverFailure
  | UploadFileStart
  | UploadFileSuccess
  | UploadFileFailure
  | UploadQuestionnaireFileStart
  | UploadQuestionnaireFileSuccess
  | UploadQuestionnaireFileFailure
  | UpdateStatusStart
  | UpdateStatusSuccess
  | UpdateStatusFailure
