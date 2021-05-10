import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
  baseAPIURL,
  waiverAPI,
  config,
  waiverTypesAPI,
  waiverGetAPI,
  waiverDocumentAPI,
  waiverUploadFilesAPI,
  questionnaireResponseAPI,
  uploadQuestionnaireFilesAPI,
  fetchQuestionnaireFilesAPI,
} from '../../api/constants'
import fetch from 'node-fetch'
import {
  fetchDataFailure,
  fetchDataStart,
  fetchWaiversDataSuccess,
  fetchWaiverTypesStart,
  fetchWaiverTypesSuccess,
  fetchWaiverTypesFailure,
  addWaiverStart,
  addWaiverSuccess,
  addWaiverFailure,
  fetchWaiverDocumentStart,
  fetchWaiverDocumentSuccess,
  fetchWaiverDocumentFailure,
  uploadFileStart,
  uploadFileSuccess,
  uploadFileFailure,
  updateStatusStart,
  updateStatusSuccess,
  updateStatusFailure,
  uploadQuestionnaireFileFailure,
  uploadQuestionnaireFileSuccess,
  uploadQuestionnaireFileStart,
  fetchQuestionnaireFilesStart,
  fetchQuestionnaireFilesSuccess,
  fetchQuestionnaireFilesFailure,
  fetchQuestionnaireQuestionsStart,
  fetchQuestionnaireQuestionsSuccess,
  fetchQuestionnaireQuestionsFailure,
} from './actionTypes'

type FetchResponse = any

const configUpload = () => {
  sessionStorage.getItem('decryptedToken')
  const token = sessionStorage.decryptedToken && JSON.parse(sessionStorage.decryptedToken).token
  return {
    headers: {
      'Content-Type': 'application/pdf',
      Authorization: `${token}`,
    },
  }
}

export const fetchWaiverData = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchDataStart())
      const waiversResponse: FetchResponse = await fetch(`${baseAPIURL}${waiverAPI}`, config())
      const waivers = await waiversResponse.json()
      dispatch(fetchWaiversDataSuccess(waivers))
    } catch (error) {
      dispatch(fetchDataFailure())
    }
  }
}
export const fetchWaiverDocument = (id: number): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchWaiverDocumentStart())
      const docsResponse: FetchResponse = await fetch(
        `${baseAPIURL}${waiverDocumentAPI}${id}`,
        config()
      )
      const docs = await docsResponse.json()
      dispatch(fetchWaiverDocumentSuccess(docs))
    } catch (error) {
      dispatch(fetchWaiverDocumentFailure())
    }
  }
}

export const fetchWaiverTypeData = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchWaiverTypesStart())
      const waiverTypeResponse: FetchResponse = await fetch(
        `${baseAPIURL}${waiverTypesAPI}{"is_active": True}`,
        config()
      )
      const waiverTypes = await waiverTypeResponse.json()
      dispatch(fetchWaiverTypesSuccess(waiverTypes))
    } catch (error) {
      dispatch(fetchWaiverTypesFailure())
    }
  }
}

export const addWaiver = (values: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(addWaiverStart())
      const body = JSON.stringify(values)
      const addWaiverResponse: FetchResponse = await fetch(`${baseAPIURL}${waiverGetAPI}`, {
        method: 'POST',
        ...config(),
        body: body,
      })
      await addWaiverResponse.json()
      dispatch(addWaiverSuccess())
    } catch (error) {
      dispatch(addWaiverFailure())
    }
  }
}

export const uploadFile = (id: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(uploadFileStart())
      const body = JSON.stringify(id)
      const addWaiverResponse: FetchResponse = await fetch(
        `${baseAPIURL}${waiverUploadFilesAPI}${id}`,
        {
          method: 'POST',
          ...configUpload(),
          body: body,
        }
      )
      await addWaiverResponse.json()
      dispatch(uploadFileSuccess())
    } catch (error) {
      dispatch(uploadFileFailure())
    }
  }
}

export const uploadQuestionnaireFile = (id: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(uploadQuestionnaireFileStart())
      const body = JSON.stringify(id)
      const addWaiverResponse: FetchResponse = await fetch(
        `${baseAPIURL}${uploadQuestionnaireFilesAPI}${id}`,
        {
          method: 'POST',
          ...configUpload(),
          body: body,
        }
      )
      await addWaiverResponse.json()
      dispatch(uploadQuestionnaireFileSuccess())
    } catch (error) {
      dispatch(uploadQuestionnaireFileFailure())
    }
  }
}
export const fetchQuestionnaireFiles = (
  id: number,
  questId: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchQuestionnaireFilesStart())
      const fetchQuestionnaireResponse: FetchResponse = await fetch(
        `${baseAPIURL}${fetchQuestionnaireFilesAPI}${id}/${questId}`,
        config()
      )
      const questionnaires = await fetchQuestionnaireResponse.json()
      dispatch(fetchQuestionnaireFilesSuccess(questionnaires))
    } catch (error) {
      dispatch(fetchQuestionnaireFilesFailure())
    }
  }
}

export const fetchQuestionnaireQuestions = (
  id: number,
  questId: number
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchQuestionnaireQuestionsStart())
      const fetchQuestionnaireResponse: FetchResponse = await fetch(
        `${baseAPIURL}${fetchQuestionnaireFilesAPI}${id}/${questId}`,
        config()
      )
      const questionnaires = await fetchQuestionnaireResponse.json()
      dispatch(fetchQuestionnaireQuestionsSuccess(questionnaires))
    } catch (error) {
      dispatch(fetchQuestionnaireQuestionsFailure())
    }
  }
}

export const updateStatus = (params: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(updateStatusStart())
      const body = JSON.stringify(params)
      const updateStatusResponse: FetchResponse = await fetch(
        `${baseAPIURL}${questionnaireResponseAPI}${params.waiver_id}/${params.questionnaire_id}`,
        {
          method: 'POST',
          ...config(),
          body: body,
        }
      )
      dispatch(fetchWaiverDocumentStart())
      const docsResponse: FetchResponse = await fetch(
        `${baseAPIURL}${waiverDocumentAPI}${params.waiver_id}`,
        config()
      )
      await updateStatusResponse.json()
      dispatch(updateStatusSuccess())
      const docs = await docsResponse.json()
      dispatch(fetchWaiverDocumentSuccess(docs))
    } catch (error) {
      dispatch(updateStatusFailure())
    }
  }
}
