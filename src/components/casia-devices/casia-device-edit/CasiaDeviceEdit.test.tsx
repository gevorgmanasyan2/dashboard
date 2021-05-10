/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CasiaDeviceEdit from './CasiaDeviceEdit'

it('should render CasiaDeviceEdit component', () => {
  expect(shallow(<CasiaDeviceEdit />)).toMatchSnapshot()
})
