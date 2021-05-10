/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Development from './Development'

it('should render Development component', () => {
  expect(shallow(<Development />)).toMatchSnapshot()
})
