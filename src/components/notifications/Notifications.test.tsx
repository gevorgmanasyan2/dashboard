/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'

it('should render Notifications component', () => {
  const mockItem = {
    visible: true || false,
    className: 'notification__container__modal',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    closeModal: () => {},
  }
  expect(shallow(<Notifications {...mockItem} />)).toMatchSnapshot()
})
