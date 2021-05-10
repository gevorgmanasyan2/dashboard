/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

it('should render Title component', () => {
  const mockItem = {
    titleText: 'title',
    className: 'header__title',
  }
  expect(shallow(<Title {...mockItem} />)).toMatchSnapshot()
})
