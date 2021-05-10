/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import CasiaDeviceConfig from './CasiaDeviceConfig'

it('should render CasiaDeviceConfig component', () => {
  expect(shallow(<CasiaDeviceConfig />)).toMatchSnapshot()
})

// test('should call setItemDisabled method', () => {
//   const wrapper = shallow(<CasiaDeviceConfig />)
//   const params = {isDisabled:true}
//   const instance = wrapper.instance()  CasiaDeviceConfig
//   const value = true
//   instance.setItemDisabled(params,false)

//   expect(wrapper.instance().setIsDisabled.has(1)).toBeTruthy()


//   wrapper.instance().setItemDisabled(params, false)


//   expect(wrapper.instance().setIsDisabled.has(1)).toBeFalsy()
// })