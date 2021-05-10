/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './NotFound'

it('should render NotFound component', () => {
  expect(shallow(<NotFound />)).toMatchSnapshot()
})
