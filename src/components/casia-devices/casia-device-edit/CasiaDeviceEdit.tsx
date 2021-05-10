import React from 'react'
import {Link} from 'react-router-dom'
import ActionButtons from '../../action-buttons/ActionButtons'
import ShareableInput from '../../shareable/shareable-input/ShareableInput'
import ShareableSelect from '../../shareable/shareable-select/ShareableSelect'
import ShareableTextarea from '../../shareable/shareable-textarea/ShareableTextarea'
import './casiaDeviceEdit.scss'

const CasiaDeviceEdit = () => {
  return (
    <article className="casia__device__edit">
      <section className="casia__device__edit__list">
        <div className="casia__device__edit__list__items">
          <h3>Casia Devices</h3>
          <ul>
            <li>Casia Long Range, A3, Under maintenance</li>
            <li>Casia Long Range, A9, Active</li>
            <li>Casia 360, A3, Active</li>
          </ul>
        </div>
        <div className="casia__device__edit__list__form">
          <div className="casia__device__edit__list__form--title">
            <h3>Edit Casia Device</h3>
            <p>Serial #: H234 12348970123</p>
          </div>
          <ShareableInput label="" placeholder="Name"/>
          <ShareableTextarea label="Description"/>
          <ShareableInput label="Registration #"/>
          <ShareableSelect label="Installed on UAS"/>
          <ShareableSelect label="Status"/>
        </div>
      </section>
      <section className="casia__device__edit__buttons">
        <Link to="/casiadevice-form">
          <ActionButtons
            buttonText="Back"
            className="config__container__buttons--cancel"
          />
        </Link>
        <ActionButtons
          buttonText="Save"
          className="config__container__buttons--next"
        />
      </section>
    </article>
  )
}

export default CasiaDeviceEdit
