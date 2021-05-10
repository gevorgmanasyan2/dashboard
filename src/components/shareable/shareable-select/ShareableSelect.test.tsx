/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import ShareableSelect from './ShareableSelect'

it('should render ShareableSelect component', () => {
  const mockItem = {
    label: 'Status',
  }
  expect(shallow(<ShareableSelect {...mockItem} />)).toMatchSnapshot()
})
