/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CompleteDocument from './CompleteDocument'
import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'

it('should render Regulatory component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <CompleteDocument />
      </Provider>
    )
  ).toMatchSnapshot()
})