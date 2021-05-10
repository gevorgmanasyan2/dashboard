/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import DashboardActions from './DashboardActions'
import { RightCircleOutlined } from '@ant-design/icons'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

it('should render Regulatory component', () => {
  const mockItem = {
    icon: <RightCircleOutlined />,
    title: 'Missions',
    count: 2,
    isLoading: false,
    itemTitle: 'Active',
    itemInfo: 'Software upgrade due',
    apiEndpoint: '/users/count_active',
    loc: {addLink:'/addlocation',link:'/'},
    onClick: () => {}
  }
  expect(shallow(
    <Provider store={store}>
      <DashboardActions {...mockItem} />
    </Provider>
  )).toMatchSnapshot()
})
