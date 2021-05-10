import { combineReducers } from 'redux'
import * as auth from '../redux/auth/authReducer'
import * as data from './count-data/fetchDataReducer'
import * as waivers from './waiver/fetchWaiverDataReducer'
import * as location from './location/locationReducer'
import * as messages from './messages/messagesReducer'
import * as user from '../redux/my-account/userReducer'
import { authReducer } from './auth/authReducer'
import { fetchDataReducer } from './count-data/fetchDataReducer'
import { fetchWaiverDataReducer } from './waiver/fetchWaiverDataReducer'
import { locationReducer } from './location/locationReducer'
import { messagesReducer } from './messages/messagesReducer'
import { userReducer } from './my-account/userReducer'
export interface CombinedState {
  auth: auth.State
  data: data.State
  waivers: waivers.State
  location: location.State
  messages: messages.State
  user: user.State
}
const rootReducer = combineReducers({
  auth: authReducer,
  data: fetchDataReducer,
  waiver: fetchWaiverDataReducer,
  location: locationReducer,
  messages: messagesReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
