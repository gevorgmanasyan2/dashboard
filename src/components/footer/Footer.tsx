import React, { FC } from 'react'
import './footer.scss'

const Footer: FC = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__terms">
        <p>Terms of Service</p>
      </div>
      <div className="footer__container__copyright">
        <p>Copyright Iris Automation, 2020, All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
