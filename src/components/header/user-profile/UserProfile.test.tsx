/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import UserProfile from './UserProfile'
import { store } from '../../../redux/store'

it('should render UserProfile component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    )
  ).toMatchSnapshot()
})