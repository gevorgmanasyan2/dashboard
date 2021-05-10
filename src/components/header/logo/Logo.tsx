import React, { FC } from 'react'
import HeaderLogo from '../../../assets/icons/logo.png'
import HeaderMobileLogo from '../../../assets/icons/mobile-logo.png'
import './logo.scss'
import { Link } from 'react-router-dom'

const Logo: FC = () => {
  return (
    <div className="logo__container">
      <Link to="/">
        <img src={HeaderLogo} alt="logo" className="logo__container__image" />
        <img src={HeaderMobileLogo} alt="logo" className="logo__container__mobile" />
      </Link>
    </div>
  )
}

export default Logo
