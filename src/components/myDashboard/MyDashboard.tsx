import React, { FC } from 'react'
import DashboardActions from './dashboardActions/DashboardActions'
import './myDashboard.scss'
import Regulatory from './regulatory/Regulatory'

import { connect, useSelector } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

import { UnorderedListOutlined, PlusOutlined, RightCircleOutlined } from '@ant-design/icons'

import { Link } from 'react-router-dom'

import {
  deviceUserRole,
  waiverUserRole,
  customerAdminUserRole,
  flightCountAPI,
  devicesCountAPI,
  droneCountAPI,
  userCountAPI,
} from '../../api/constants'

import { Tooltip } from 'antd'
import Title from '../title/Title'

interface MyDashboardProps {
  deviceCount: number
  droneCount: number
  flightCount: number
  userCount: number
}

const MyDashboard: FC<MyDashboardProps> = ({ deviceCount, droneCount, flightCount, userCount }) => {
  const sessionToken = useSelector((state: RootState) => state.auth.sessionToken)
  const loggedUserType = sessionToken?.roles

  const data = [
    {
      id: 1,
      icon: <RightCircleOutlined />,
      title: 'Missions',
      count: 2,
      itemTitle: 'Active',
      itemInfo: '',
      role: '',
      apiEndpoint: '',
    },
    {
      id: 2,
      icon: <RightCircleOutlined />,
      title: 'Flights',
      count: flightCount,
      itemTitle: 'This month',
      itemInfo: '',
      role: deviceUserRole,
      apiEndpoint: flightCountAPI,
    },
    {
      id: 3,
      icon: <RightCircleOutlined />,
      title: 'Casia devices',
      count: deviceCount,
      itemTitle: '',
      itemInfo: 'Software upgrade due',
      role: deviceUserRole,
      apiEndpoint: devicesCountAPI,
    },
    {
      id: 4,
      icon: <RightCircleOutlined />,
      title: 'Drones',
      count: droneCount,
      itemTitle: 'In service',
      itemInfo: '',
      role: deviceUserRole,
      apiEndpoint: droneCountAPI,
    },
    {
      id: 5,
      icon: <RightCircleOutlined />,
      title: 'Crew members',
      count: userCount,
      itemTitle: 'Active',
      itemInfo: '',
      role: customerAdminUserRole,
      apiEndpoint: userCountAPI,
    },
    {
      id: 6,
      icon: <RightCircleOutlined />,
      title: 'Locations',
      count: userCount,
      itemTitle: '',
      itemInfo: '',
      role: customerAdminUserRole,
      apiEndpoint: userCountAPI,
    },
  ]


  const checkLink = (title: string) => {
    if (title === 'Casia devices') {
      return {
        link: '/casiadevice',
        addLink: '/casiadevice',
      }
    } else if (title === 'Locations') {
      return {
        link: '/locations',
        addLink: '/addlocation',
      }
    } else {
      return {
        link: '/',
        addLink: '/casiadevice',
      }
    }
  }

  const filteredData = loggedUserType
    ? data.filter(function (el) {
      return loggedUserType.includes(el.role)
    })
    : data

  return (
    <article className="dashboard__container">
      <Title level={2} titleText="My Dashboard" />
      <div className="dashboard__container__elements">
        {filteredData.map((item) => (
          <DashboardActions
            key={item.id}
            icon={item.icon}
            title={item.title}
            count={item.count}
            itemTitle={item.itemTitle}
            itemInfo={item.itemInfo}
            apiEndpoint={item.apiEndpoint}
            loc={checkLink(item.title)}
          />
        ))}
        {loggedUserType && loggedUserType.includes(waiverUserRole) ? (
          <div className="dashboard__container__regulatory">
            <div className="dashboard__container__regulatory__element">
              <Title titleText={'Regulatory Permission'} level={3} />
              <div className="dashboard__container__regulatory__element--icon">
                <Link to={'/search-regulatory-permission'}>
                  <Tooltip title="View All">
                    <UnorderedListOutlined />
                  </Tooltip>
                </Link>
              </div>
            </div>
            <div className="dashboard__container__regulatory__components">
              <div className="dashboard__container__regulatory__components__content">
                <Regulatory />
              </div>
              <div className="dashboard__container__regulatory__icon">
                <Link to="/new-regulatory-permission">
                  <PlusOutlined />
                </Link>
              </div>
              <div className="dashboard__container__regulatory__footer">
                <Link to="/regulatory-library">
                  <p>Visit Regulatory Resource Library</p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="dashboard__container__empty" />
        )}
      </div>
    </article>
  )
}

const mapStateToProps = (state: any) => {
  return {
    deviceCount: state.data.deviceCount,
    droneCount: state.data.droneCount,
    flightCount: state.data.flightCount,
    userCount: state.data.userCount,
    waivers: state.waiver.waivers,
  }
}

export default connect(mapStateToProps)(MyDashboard)
