/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import ShareableInput from './ShareableInput'

it('should render ShareableInput component', () => {
  const mockItem = {
    label: 'Serial',
    placeholder: 'Name',
    onChange: () => {},
    onBlur: () => {},
    errorsMessage: 'error',
    className: 'text',
    value: 'test',
    name: 'test',
  }
  expect(shallow(<ShareableInput {...mockItem} />)).toMatchSnapshot()
})
