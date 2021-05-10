import { RightOutlined } from '@ant-design/icons'
import React, { FC, Fragment, useState } from 'react'
import casia1Img from '../../../assets/images/casia1.png'
import casia2Img from '../../../assets/images/casia2.png'
import './casiaDeviceConfig.scss'
import ActionButtons from '../../action-buttons/ActionButtons'
import { Link } from 'react-router-dom'
import Title from '../../title/Title'

const casiaData = [
  {
    id: 1,
    title: 'Casia 360',
    serial: 'H234 12348970123',
    img: casia1Img,
  },
  {
    id: 2,
    title: 'Casia Long Range',
    serial: 'H250 12898970123',
    img: casia2Img,
  },
]

const CasiaDeviceConfig: FC = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  return (
    <article className="config__container">
      <section className="config__container__title">
        <Title titleText="Un-configured Casia Devices" level={2} />
        <p onClick={() => setIsDisabled(false)}>Select the device you want to configure:</p>
      </section>
      <section className="config__container__casia">
        {casiaData.map((casia) => (
          <Fragment key={casia.id}>
            <section
              className="config__container__casia__devices"
              onClick={() => setIsDisabled(false)}
            >
              <div className="config__container__casia__devices__element">
                <p className="config__container__casia__devices__element--title">{casia.title}</p>
                <p className="config__container__casia__devices__element--serial">
                  Serial #: {casia.serial}
                </p>
              </div>
              <div className="config__container__casia__devices__image">
                <img src={casia.img} alt="" />
              </div>
            </section>
          </Fragment>
        ))}
      </section>
      <section className="config__container__buttons">
        <Link to="/">
          <ActionButtons
            className="config__container__buttons--cancel"
            buttonText="Back"
          ></ActionButtons>
        </Link>
        <Link to="/casiadevice-form">
          <ActionButtons
            className="config__container__buttons--next"
            icon={<RightOutlined className="right__arrow" />}
            buttonType={isDisabled}
            buttonText="Next"
          ></ActionButtons>
        </Link>
      </section>
    </article>
  )
}

export default CasiaDeviceConfig
