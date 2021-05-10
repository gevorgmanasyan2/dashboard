/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Regulatory from './Regulatory'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

it('should render Regulatory component', () => {
  const mockItem = {
    waivers: [],
    isLoading: true,
  }
  expect(
    shallow(
      <Provider store={store}>
        <Regulatory {...mockItem} />
      </Provider>
    )
  ).toMatchSnapshot()
})
