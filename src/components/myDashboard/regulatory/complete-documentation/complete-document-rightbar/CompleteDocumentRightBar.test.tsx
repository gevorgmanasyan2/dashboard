/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CompleteDocumentRightBar from './CompleteDocumentRightBar'

it('should render Regulatory component', () => {
  expect(shallow(<CompleteDocumentRightBar />)).toMatchSnapshot()
})
