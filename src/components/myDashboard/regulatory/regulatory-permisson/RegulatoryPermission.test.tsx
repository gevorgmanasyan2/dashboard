/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RegulatoryPermissionList from './RegulatoryPermissions'

it('should render RegulatoryPermissionList component', () => {
  expect(shallow(<RegulatoryPermissionList />)).toMatchSnapshot()
})
