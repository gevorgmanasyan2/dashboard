/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RegulatoryLibraryItems from './RegulatoryLibraryItems'

it('should render MyDashboard component', () => {
  const mockItem = {
    waiverCategory: [{ id: 1, name: 'test' }],
  }
  expect(shallow(<RegulatoryLibraryItems {...mockItem} />)).toMatchSnapshot()
})
