import { DownOutlined, SendOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Tooltip } from 'antd'
import React, { FC, MouseEvent, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { baseAPIURL } from './../../../api/constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'

import './navbar.scss'

interface NavbarProps {
  onClick?: (event: MouseEvent<HTMLElement, MouseEvent>) => void
}

const Navbar: FC<NavbarProps> = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const checkUserRole = useSelector((state: RootState) => state.auth.sessionToken?.roles)

  const handleDownIconClick = (e: any) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/regulatory-permissions">Regulatory Permissions</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/regulatory-library">Resource Library</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="navbar__link--selected" className="navbar__link">
        <span className="navbar__link--item">My Dashboard</span>
      </NavLink>
      <NavLink to="/regulations" activeClassName="navbar__link--selected" className="navbar__link">
        <Dropdown overlay={menu} trigger={['click']}>
          <span className="ant-dropdown-link" onClick={handleDownIconClick}>
            <span className="navbar__link--item">Regulations</span>
            <DownOutlined
              onClick={handleDownIconClick}
              className={isClicked ? 'navbar__link--itemBackRotate' : 'navbar__link--itemRotate'}
            />
          </span>
        </Dropdown>
      </NavLink>
      {checkUserRole?.includes('device_user') || checkUserRole?.includes('customer_admin') ? (
        <NavLink
          to="route"
          onClick={(event) => {
            event.preventDefault()
            window.location.href = `${baseAPIURL}`
          }}
          activeClassName="navbar__link--selected"
          className="navbar__link"
        >
          <span className="navbar__link--item">
            <Tooltip title='Access FlightDeck to manage your Casia devices and more'>
              FlightDeck <SendOutlined className="sendIcon" />
            </Tooltip>
          </span>
        </NavLink>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Navbar
