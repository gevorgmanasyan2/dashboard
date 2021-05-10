/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import ShareableTextarea from './ShareableTextarea'

it('should render ShareableSelect component', () => {
  const mockItem = {
    label: 'Description',
    onChange: () => {},
    onBlur: () => {},
    errorsMessage: 'error',
    className: 'text',
    value: 'test',
    name: 'test',
  }
  expect(shallow(<ShareableTextarea {...mockItem} />)).toMatchSnapshot()
})
