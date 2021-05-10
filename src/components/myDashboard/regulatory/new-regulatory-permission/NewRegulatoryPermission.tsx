/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useEffect } from 'react'
import ActionButtons from '../../../action-buttons/ActionButtons'
import ShareableInput from '../../../shareable/shareable-input/ShareableInput'
import ShareableTextarea from '../../../shareable/shareable-textarea/ShareableTextarea'
import ShareableSelect from '../../../shareable/shareable-select/ShareableSelect'
import Title from './../../../title/Title'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addWaiver, fetchWaiverTypeData } from '../../../../redux/waiver/actions'
import { Select } from 'antd'

import './newRegulatoryPermission.scss'

const NewRegulatoryPermission: FC = () => {
  const waiverTypes = useSelector((state: any) => state.waiver.waiverTypes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWaiverTypeData())
  }, [dispatch])

  const history = useHistory()
  const { Option } = Select

  const handleSubmit = (values: any) => {
    dispatch(addWaiver(values))
  }

  return (
    <article className="newRegulatory__container">
      <Title titleText="New Regulatory Permission" level={3} />
      <Formik
        initialValues={{
          permission_name: '',
          description: '',
          permission_type: waiverTypes?.map((waiverType: any) => waiverType.name),
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object().shape({
          permission_name: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          permission_type: Yup.string().required('Required'),
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
            setFieldValue,
            setFieldTouched,
          } = props

          return (
            <>
              <form onSubmit={handleSubmit}>
                <section className="newRegulatory__container__content">
                  <ShareableInput
                    label="Give your permission a unique name"
                    name="permission_name"
                    value={values.permission_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.permission_name && touched.permission_name ? 'error' : ''}
                    errorsMessage={
                      errors.permission_name && touched.permission_name && errors.permission_name
                    }
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
                  <ShareableSelect
                    label="Permission type"
                    name="permission_type"
                    placeholder="Select a type"
                    value={values.permission_type}
                    data={waiverTypes}
                    onBlur={() => setFieldTouched('permission_type', false)}
                    onChange={(option) => setFieldValue('permission_type', option)}
                    className={errors.permission_type && touched.permission_type? 'error' : ''}
                    // errorsMessage={errors.permission_type && touched.permission_type && errors.permission_type}
                  >
                    {waiverTypes?.map((waiverType: any) => {
                      return (
                        <Option key={waiverType.id} value={waiverType.name}>
                          {waiverType.name}
                        </Option>
                      )
                    })}
                  </ShareableSelect>
                </section>
                <section className="casia__device__edit__buttons">
                  <ActionButtons
                    buttonText="Cancel"
                    className="config__container__buttons--cancel"
                    onClick={history?.goBack}
                  />
                  <ActionButtons
                    buttonType={!(dirty && isValid)}
                    buttonText="Save"
                    className="config__container__buttons--next"
                    onClick={handleSubmit}
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

export default NewRegulatoryPermission
