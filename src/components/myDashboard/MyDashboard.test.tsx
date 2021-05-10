/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import MyDashboard from './MyDashboard'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

it('should render MyDashboard component', () => {
  const mockItem = {
    deviceCount: 4,
    droneCount: 2,
    flightCount: 9,
    userCount: 7,
  }
  expect(
    shallow(
      <Provider store={store}>
        <MyDashboard {...mockItem} />
      </Provider>
    )
  ).toMatchSnapshot()
})
