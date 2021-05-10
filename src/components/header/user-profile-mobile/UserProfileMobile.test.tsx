/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import UserProfileMobile from './UserProfileMobile'

it('should render UserProfileMobile component', () => {
  expect(shallow(<UserProfileMobile />)).toMatchSnapshot()
})