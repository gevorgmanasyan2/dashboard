/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Popup from './Popup'

it('should render Popup component', () => {
  const mockItem = {
    className: 'modal',
    visible: false,
    children: <div></div>,
    footer: null,
    modalTitle: 'title',
    okButtonText:'save',
    cancelButtonText:'cancel',
    closeModal: () => {}
  }
  expect(shallow(<Popup {...mockItem} />)).toMatchSnapshot()
})
