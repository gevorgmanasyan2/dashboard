/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RegulatoryLibrary from './RegulatoryLibrary'

it('should render MyDashboard component', () => {
  expect(shallow(<RegulatoryLibrary />)).toMatchSnapshot()
})
