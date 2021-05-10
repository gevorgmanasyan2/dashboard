/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import SearchRegulatoryPermission from './SearchRegulatoryPermission'
import { Provider } from 'react-redux'
import { store } from '../../../../redux/store'

it('should render MyDashboard component', () => {
  const mockItem = {
    waivers: []
  }
  expect(
    shallow(
      <Provider store={store}>
        <SearchRegulatoryPermission {...mockItem} />
      </Provider>
    )
  ).toMatchSnapshot()
})