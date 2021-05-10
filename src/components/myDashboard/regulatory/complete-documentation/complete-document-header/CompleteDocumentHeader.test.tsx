/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CompleteDocumentHeader from './CompleteDocumentHeader'
import { CheckCircleFilled } from '@ant-design/icons'

it('should render CompleteDocumentHeader component', () => {
  const mockItem = {
    dateText: 'Completed Date',
    bgColor: '"#26A744"',
    date: '2020-07-10',
    icon: <CheckCircleFilled />,
    status: 'Initial Review',
  }
  expect(shallow(<CompleteDocumentHeader {...mockItem} />)).toMatchSnapshot()
})
