/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RegulatoryLibraryItem from './RegulatoryLibraryItem'

it('should render MyDashboard component', () => {
  const mockItem = {
    id: 1,
    name: 'test',
    waiverLibraryItems: [{ id: 1, name: 'test', waiverLibraryItems: [] }],
  }
  expect(shallow(<RegulatoryLibraryItem {...mockItem} />)).toMatchSnapshot()
})
