/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import SearchRegulatoryApprovalContainer from './SearchRegulatoryPermissionContainer'

it('should render SearchRegulatoryApprovalContainer component', () => {
  expect(shallow(<SearchRegulatoryApprovalContainer />)).toMatchSnapshot()
})
