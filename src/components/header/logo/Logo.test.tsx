/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

it('should render Logo component', () => {
  expect(shallow(<Logo />)).toMatchSnapshot()
})
