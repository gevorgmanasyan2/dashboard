import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { notification } from 'antd'
import { AnyAction } from 'redux'
import { getUserAPI, baseAPIURL, config, verifyAPI } from '../../api/constants'
import fetch from 'node-fetch'
import { getUserFailure, getUserStart, getUserSuccess, verifyCodeFailure,  verifyCodeSuccess } from './actionTypes'


type FetchResponse = any

export const getUser = (id: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(getUserStart())
      const getUserResponse: FetchResponse = await fetch(
        `${baseAPIURL}${getUserAPI}${id}`,
        config()
      )
      const user = await getUserResponse.json()
      dispatch(getUserSuccess(user))
    } catch (error) {
      dispatch(getUserFailure())
    }
  }
}

export const verifyCode = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      await fetch(`${baseAPIURL}${verifyAPI}`, {
        method: 'POST',
        ...config(),
      })

      dispatch(verifyCodeSuccess())
    } catch (error) {
      dispatch(verifyCodeFailure())
    }
  }
}
export const updateUserData = (data: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const body = JSON.stringify(data)

      await fetch(`${baseAPIURL}${getUserAPI}${data.id}`, {
        method: 'PUT',
        ...config(),
        body: body,
      })
      notification.success({
        message: 'Success',
      })
      dispatch(verifyCodeSuccess())
    } catch (error) {
      notification.error({
        message: 'Error, Please try again',
      })
      dispatch(getUserStart())
    }
  }
}
