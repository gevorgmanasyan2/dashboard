/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Badge, { BadgeProps } from './Badge'

it('should render Badge component', () => {
  const mockItem = new BadgeProps(5, 'small')

  expect(shallow(<Badge {...mockItem} />)).toMatchSnapshot()
})
