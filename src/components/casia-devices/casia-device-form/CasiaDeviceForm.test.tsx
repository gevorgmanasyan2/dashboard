/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CasiaDeviceForm from './CasiaDeviceForm'

it('should render CasiaDeviceForm component', () => {
  expect(shallow(<CasiaDeviceForm />)).toMatchSnapshot()
})
