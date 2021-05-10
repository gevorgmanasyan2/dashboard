import { RightCircleOutlined, SendOutlined } from '@ant-design/icons'
import React, { FC, Fragment, useState } from 'react'
import CasiaDevices from '../casia-devices/casia-devices-popup/CasiaDevicesPopup'
import Popup from '../Popup/Popup'
import './notification.scss'

interface NotificationProps {
  className: string
  visible: boolean
  closeModal: () => void
}

const noteData = [
  {
    id: 1,
    icon: <SendOutlined />,
    message: 'You have a new, unconfigured Casia 360 device. Configure it now',
    status: 'unRead',
    date: 'One day ago',
  },
  {
    id: 2,
    icon: <RightCircleOutlined />,
    message: 'Your Iris Agent has left you a message: Please upload special image for',
    status: 'readed',
    date: '3 days ago',
  },
  {
    id: 3,
    icon: <SendOutlined />,
    message: 'You have a new, unconfigured Casia 360 device. Configure it now',
    status: 'readed',
    date: '3 days ago',
  },
  {
    id: 4,
    icon: <RightCircleOutlined />,
    message: 'Your Iris Agent has left you a message: Please upload special image for',
    status: 'unRead',
    date: 'One week ago',
  },
  {
    id: 5,
    icon: <SendOutlined />,
    message: 'You have a new, unconfigured Casia 360 device. Configure it now',
    status: 'readed',
    date: '3 weeks ago',
  },
]

const Notification: FC<NotificationProps> = ({ visible, closeModal }) => {
  const [isCasiaOpen, setIsCasiaOpen] = useState<boolean>(false)

  const openCasiaModal = () => {
    setIsCasiaOpen(true)
    closeModal()
  }

  const closeCasiaModal = () => setIsCasiaOpen(!isCasiaOpen)
  return (
    <div className="notification__container">
      <Popup
        className="notification__container__modal"
        visible={visible}
        closeModal={closeModal}
        footer={null}
        modalTitle="Notifications"
      >
        {noteData.map((item) => (
          <Fragment key={item.id}>
            <div
              className="notification__container__modal__content"
              onClick={() => openCasiaModal()}>
              <div className="notification__container__modal__content--icon">{item.icon}</div>
              <div className="notification__container__modal__content--message">
                <p className={item.status === 'unRead' ? 'bold' : 'default'}>{item.message}</p>
              </div>
              <div
                className={
                  item.status === 'unRead' ? 'notification__container__modal__content--status' : ''
                }
              ></div>
            </div>
            <div className="notification__container__modal__content--date">{item.date}</div>
          </Fragment>
        ))}
      </Popup>
      <CasiaDevices
        className=""
        visible={isCasiaOpen}
        closeModal={closeCasiaModal}
        okText="Cancel"
        cancelText="OK"
      />
    </div>
  )
}

export default Notification
