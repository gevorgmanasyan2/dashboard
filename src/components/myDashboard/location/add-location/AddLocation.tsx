/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ShareableInput from './../../../shareable/shareable-input/ShareableInput'
import ShareableTextarea from './../../../shareable/shareable-textarea/ShareableTextarea'
import ActionButtons from './../../../action-buttons/ActionButtons'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { addLocation } from '../../../../redux/location/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/rootReducer'
import { Alert } from 'antd'
import './addlocation.scss'

const Addlocation: FC = () => {
  const [message, setMessage] = useState<ReactNode>(null)

  const dispatch = useDispatch()
  const { responseMessage } = useSelector((state: RootState) => state.location)

  const handleSubmit = (values: any) => {
    dispatch(addLocation(values))
  }

  useEffect(() => {
    if (responseMessage) {
      setMessage(<Alert message={responseMessage} type="success" showIcon />)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }, [responseMessage])

  return (
    <article className="dashboard__addlocation__container">
      <h3 className="dashboard__addlocation__container__title">Add location</h3>
      <Formik
        initialValues={{
          name: '',
          full_name: '',
          description: '',
          latitude: 0,
          longitude: 0,
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          full_name: Yup.string().required('Required'),
          description: Yup.string(),
          latitude: Yup.number().typeError('Must be number').required('Required'),
          longitude: Yup.number().typeError('Must be number').required('Required'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props

          return (
            <>
              {message}
              <form onSubmit={handleSubmit}>
                <section className="dashboard__addlocation__container__content">
                  <ShareableInput
                    label="Name"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.name && touched.name ? 'error' : ''}
                    errorsMessage={errors.name && touched.name && errors.name}
                  />
                  <ShareableInput
                    label="Full Name"
                    name="full_name"
                    value={values.full_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.full_name && touched.full_name ? 'error' : ''}
                    errorsMessage={errors.full_name && touched.full_name && errors.full_name}
                  />
                  <ShareableTextarea
                    label="Description"
                    name="description"
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.description && touched.description ? 'error' : ''}
                    errorsMessage={errors.description && touched.description && errors.description}
                  />
                  <ShareableInput
                    label="Latitude"
                    name="latitude"
                    value={values.latitude}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.latitude && touched.latitude ? 'error' : ''}
                    errorsMessage={errors.latitude && touched.latitude && errors.latitude}
                  />
                  <ShareableInput
                    label="Longitude"
                    name="longitude"
                    value={values.longitude}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.longitude && touched.longitude ? 'error' : ''}
                    errorsMessage={errors.longitude && touched.longitude && errors.longitude}
                  />
                </section>
                <section className="dashboard__addlocation__container__buttons">
                  <Link to="/">
                    <ActionButtons
                      buttonText="Cancel"
                      className="config__container__buttons--cancel"
                    />
                  </Link>
                  <ActionButtons
                    buttonType={!(dirty && isValid)}
                    onClick={handleSubmit}
                    buttonText="Save"
                    className="config__container__buttons--next"
                  />
                </section>
              </form>
            </>
          )
        }}
      </Formik>
    </article>
  )
}

export default Addlocation
