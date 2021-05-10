/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import RightBarItem from './RightBarItem'

it('should render RightBarItem component', () => {
  const mockItem = {
    title: 'rightBar',
    children: <div></div>,
  }
  expect(shallow(<RightBarItem {...mockItem} />)).toMatchSnapshot()
})
