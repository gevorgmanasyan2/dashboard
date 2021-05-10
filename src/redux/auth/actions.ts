import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { loginUserFailure, loginUserSuccess } from './actionTypes'
import { decrypt } from '../../Auth/crypto'

export const login = (accessToken: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const decryptedToken = await decrypt(decodeURIComponent(accessToken))
      console.log(decryptedToken)
      sessionStorage.setItem('decryptedToken', JSON.stringify(decryptedToken))
      const sessionToken = JSON.parse(sessionStorage.decryptedToken)
      dispatch(loginUserSuccess(sessionToken))
    } catch (error) {
      dispatch(loginUserFailure())
      window.location.href = '/'
    }
  }
}
