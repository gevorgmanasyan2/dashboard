/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RegulatoryLibraryItemDetailPopup from './RegulatoryLibraryItemDetailPopup'

it('should render RegulatoryLibraryItemDetailPopup component', () => {
  const mockItem = {
    closeDetailModal: ()=>{},
    visible: true,
    waiverLibraryItems: [{ id: 1, name: 'test', waiverLibraryItems: [] }],
  }
  expect(shallow(<RegulatoryLibraryItemDetailPopup {...mockItem} />)).toMatchSnapshot()
})