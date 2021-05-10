import React, { FC } from 'react'
import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import UserProfile from './user-profile/UserProfile'
import './header.scss'
import UserProfileMobile from './user-profile-mobile/UserProfileMobile'

const Header: FC = () => {
  return (
    <div className="header__container">
      <Logo />
      <Navbar />
      <div className="header__container__mobile">
        <UserProfile />
      </div>
      <UserProfileMobile />
    </div>
  )
}

export default Header
