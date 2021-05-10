import React, { FC } from 'react'
import ShareableInput from '../../shareable/shareable-input/ShareableInput'
import ShareableTextarea from '../../shareable/shareable-textarea/ShareableTextarea'
import ShareableSelect from '../../shareable/shareable-select/ShareableSelect'
import casiaImg from '../../../assets/images/casia1.png'
import './casiaDeviceForm.scss'
import ActionButtons from '../../action-buttons/ActionButtons'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

const CasiaDeviceForm: FC = () => {
  return (
    <article className="casia__device__form">
      <section className="casia__device__form__title">
        <h3>Un-configured Casia Devices</h3>
      </section>
      <section className="casia__device__form__content">
        <div className="casia__device__form__content__elements">
          <ShareableInput label="Give your Casia 360 a nickname" />
          <ShareableTextarea label="Enter a description" />
          <ShareableInput label="Registration #" />
          <ShareableSelect label="Which Drone will your Casia 360 be installed on?" />
        </div>
        <div className="casia__device__form__items">
          <div className="casia__device__form__items__header">
            <p className="casia__device__form__items__header--title">Casia 360</p>
          </div>
          <div className="casia__device__form__items__image">
            <img src={casiaImg} alt="" />
            <p className="casia__device__form__items__header--serial">Serial #: ASD 54220358</p>
          </div>
        </div>
      </section>
      <section className="casia__device__form__buttons">
        <ActionButtons
          buttonText="Save and Finish Later"
          className="config__container__buttons--cancel"
        ></ActionButtons>
        <Link to="/casiadevice-edit">
          <ActionButtons
            icon={<RightOutlined className="right__arrow" />}
            buttonText="Next"
            className="config__container__buttons--next"
          ></ActionButtons>
        </Link>
      </section>
    </article>
  )
}

export default CasiaDeviceForm
