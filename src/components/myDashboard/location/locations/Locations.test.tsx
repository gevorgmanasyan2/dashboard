/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Locations from './Locations'
import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'

it('should render Locations component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <Locations />
      </Provider>
    )
  ).toMatchSnapshot()
})
