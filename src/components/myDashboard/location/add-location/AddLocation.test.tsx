/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import AddLocation from './AddLocation'
import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'

it('should render AddLocation component', () => {
  expect(
    shallow(
      <Provider store={store}>
        <AddLocation />
      </Provider>
    )
  ).toMatchSnapshot()
})
