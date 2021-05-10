import React, { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import UserProfile from '../user-profile/UserProfile'
import { MenuOutlined } from '@ant-design/icons'
import './userProfileMobile.scss'

const UserProfileMobile: FC = () => {
  const menu = (
    <Menu className="userProfileMobile__container__dropdown">
      <Menu.Item key="0">
        <UserProfile />
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="userProfileMobile__container">
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName="userProfileMobile__container__info"
      >
        <MenuOutlined />
      </Dropdown>
    </div>
  )
}

export default UserProfileMobile
