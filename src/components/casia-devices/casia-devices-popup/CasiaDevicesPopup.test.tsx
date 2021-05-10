/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CasiaDevicesPopup from './CasiaDevicesPopup'

it('should render CasiaDevicesPopup component', () => {
  const mockItem = {
    visible: true || false,
    className: 'casiadevices__container__modal',
    okText: 'Ok',
    cancelText: 'Cancel',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    closeModal: () => {},
  }
  expect(shallow(<CasiaDevicesPopup {...mockItem} />)).toMatchSnapshot()
})
