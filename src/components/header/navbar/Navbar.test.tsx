/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './Navbar'

it('should render Navbar component', () => {
  expect(shallow(<Navbar />)).toMatchSnapshot()
})
