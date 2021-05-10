import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
  baseAPIURL,
  devicesCountAPI,
  droneCountAPI,
  flightCountAPI,
  userCountAPI,
  config,
} from '../../api/constants'
import fetch from 'node-fetch'
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDevicesDataSuccess,
  fetchDronesDataSuccess,
  fetchFlightDataSuccess,
  fetchUserDataSuccess,
} from './actionTypes'

type FetchResponse = any

export const fetchCountData = (): ThunkAction<void, {}, {}, AnyAction> => {
  const role = sessionStorage?.sessionToken?.roles
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(fetchDataStart())
    try {
      if (role?.includes('device_user')) {
        const droneResponse: FetchResponse = await fetch(`${baseAPIURL}${droneCountAPI}`, config())
        const droneCount = await droneResponse.json()
        dispatch(fetchDronesDataSuccess(droneCount.data.count))

        const deviceResponse: FetchResponse = await fetch(
          `${baseAPIURL}${devicesCountAPI}`,
          config()
        )
        const deviceCount = await deviceResponse.json()
        dispatch(fetchDevicesDataSuccess(deviceCount.data.count))

        const flightResponse: FetchResponse = await fetch(
          `${baseAPIURL}${flightCountAPI}`,
          config()
        )
        const flightCount = await flightResponse.json()
        dispatch(fetchFlightDataSuccess(flightCount.data.count))
      }
    } catch (error) {
      dispatch(fetchDataFailure())
    }
    try {
      if (role?.includes('customer_admin')) {
        const userResponse: FetchResponse = await fetch(`${baseAPIURL}${userCountAPI}`, config())
        const userCount = await userResponse.json()
        dispatch(fetchUserDataSuccess(userCount.data.count))
      }
    } catch (error) {
      dispatch(fetchDataFailure())
    }
  }
}
