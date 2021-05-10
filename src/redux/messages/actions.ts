import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { messageAPI, messagesAPI, baseAPIURL, config } from '../../api/constants'
import fetch from 'node-fetch'
import {
  sendMessageFailure,
  sendMessageStart,
  sendMessageSuccess,
  fetchMessagesFailure,
  fetchMessagesStart,
  fetchMessagesSuccess,
} from './actionTypes'

type FetchResponse = any

export const fetchMessages = (id: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchMessagesStart())
      const getLocationSResponse: FetchResponse = await fetch(
        `${baseAPIURL}${messagesAPI}{"waiver_id": ${id}}`,
        config()
      )
      const messages = await getLocationSResponse.json()
      dispatch(fetchMessagesSuccess(messages))
    } catch (error) {
      dispatch(fetchMessagesFailure())
    }
  }
}

export const sendMessage = (values: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(sendMessageStart())
      const body = JSON.stringify(values)
      const sendMessageResponse: FetchResponse = await fetch(`${baseAPIURL}${messageAPI}`, {
        method: 'POST',
        ...config(),
        body: body,
      })
      await sendMessageResponse.json()
      dispatch(sendMessageSuccess())
      dispatch(fetchMessages(values.waiver_id))
    } catch (error) {
      dispatch(sendMessageFailure())
    }
  }
}
