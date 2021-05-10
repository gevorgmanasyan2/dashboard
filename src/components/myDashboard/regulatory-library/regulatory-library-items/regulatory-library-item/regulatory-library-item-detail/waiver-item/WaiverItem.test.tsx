/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import WaiverItem from './WaiverItem'

it('should render WaiverItem component', () => {
  const mockItem = {
    name: 'zxcv',
    description: 'zxcv',
    imageSource: '/waiver_librery-item/5/display/',
    actionLink: '/waiver_librery-item/5/download/',
    fileName: '',
    externalLink: '',
  }
  expect(shallow(<WaiverItem {...mockItem} />)).toMatchSnapshot()
})
