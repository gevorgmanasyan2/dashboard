import React, { FC } from 'react'
import Popup from '../../Popup/Popup'
import './casiaDevicesPopup.scss'
import { Link } from 'react-router-dom'

interface CasiaDevicesProps {
  className: string
  visible: boolean
  okText: string
  cancelText: string
  closeModal: () => void
}

const CasiaDevices: FC<CasiaDevicesProps> = ({ visible, closeModal }) => {
  return (
    <div className="casiadevices__container">
      <Popup
        className="casiadevices__container__modal"
        visible={visible}
        closeModal={closeModal}
        modalTitle="Your New Casia device"
        okButtonText={
          <Link to="/casiadevice" onClick={closeModal}>
            Let&apos;s Go!
          </Link>
        }
        cancelButtonText="Come back later"
      >
        <p className="casiadevices__container__modal--info">
          Our records show that you have a Casia Device that has not yet been configured
        </p>
        <p className="casiadevices__container__modal--offer">
          Would you like to get started now?(takes about 1 hour)
        </p>
      </Popup>
    </div>
  )
}

export default CasiaDevices
