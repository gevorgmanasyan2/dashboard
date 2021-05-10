import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'
import {allLocationsAPI, baseAPIURL, config, locationAPI} from '../../api/constants'
import fetch from 'node-fetch'
import {
  addLocationFailure,
  addLocationStart,
  addLocationSuccess,
  fetchAllLocationsFailure,
  fetchAllLocationsStart,
  fetchAllLocationsSuccess
} from './actionTypes'

type FetchResponse = any


export const addLocation = (values: any): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(addLocationStart())
      const body = JSON.stringify(values)
      const addLocationResponse: FetchResponse = await fetch(`${baseAPIURL}${locationAPI}/15`, {
        method: 'PUT',
        ...config(),
        body: body
      })
      const res = await addLocationResponse.json()
      dispatch(addLocationSuccess(res.message))
    } catch (res) {
      dispatch(addLocationFailure(res.message))
    }
  }
}

export const fetchAllLocations = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchAllLocationsStart())
      const getLocationSResponse: FetchResponse = await fetch(`${baseAPIURL}${allLocationsAPI}`, config())
      const locations = await getLocationSResponse.json()
      dispatch(fetchAllLocationsSuccess(locations))
    } catch (error) {
      dispatch(fetchAllLocationsFailure())
    }
  }
}
