/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import ActionButtons from './ActionButtons'

it('should render ActionButtons component', () => {
  const mockItem = {
    buttonType: true,
    buttonText: 'save',
    className: 'cancel',
  }
  expect(shallow(<ActionButtons {...mockItem} />)).toMatchSnapshot()
})
