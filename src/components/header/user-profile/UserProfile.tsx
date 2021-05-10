/* eslint-disable quotes */
import React, { FC, useState } from 'react'
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import './userProfile.scss'
import Badge from '../../badge/Badge'
import Notifications from '../../notifications/Notifications'
import { Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import config from '../../../config/config.sample.json'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'

const UserProfile: FC = () => {
  const name = useSelector((state: RootState) => state.auth.sessionToken?.name)
  const AUTH_URL = `${config.REACT_APP_AUTH_URL}/` as string
  const [visible, setVisible] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(!visible)
  }

  const handleLogout = () => {
    window.location.href = AUTH_URL
  }

  const handleDownIconClick = (e: any) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  const menu = (
    <Menu className="userProfile__container__dropdown">
      <Menu.Item key="1">
        <Link to="/my-account">My Account</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <span onClick={handleLogout}>Logout</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <div className="userProfile__container">
        <div className="userProfile__container__icons">
          <Badge count={7} size="small" />
          <BellOutlined onClick={openModal} />
        </div>
        <div className="userProfile__container__icons">
          <Badge count={2} size="small" />
          <UserOutlined />
        </div>
        <Dropdown overlay={menu} trigger={['click']} overlayClassName="userProfile__container__info">
          <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <span className="ant-dropdown-link--name">{name}</span>
            <DownOutlined
              className={
                isClicked ? 'ant-dropdown-link--itemBackRotate' : 'ant-dropdown-link--itemRotate'
              }
              onClick={handleDownIconClick}
            />
          </span>
        </Dropdown>
      </div>
      <Notifications className="" visible={visible} closeModal={closeModal} />
    </>
  )
}

export default UserProfile
