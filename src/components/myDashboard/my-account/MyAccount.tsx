/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import ShareableInput from '../../shareable/shareable-input/ShareableInput'
import ActionButtons from '../../action-buttons/ActionButtons'
import Title from '../../title/Title'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import './myAccount.scss'
import config from '../../../config/config.sample.json'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUser, updateUserData, verifyCode } from '../../../redux/my-account/actions'
import { RootState } from '../../../redux/rootReducer'
import { UserDataType } from '../../../redux/my-account/model'
import ConfirmPopup from '../confirm-popup/ConfirmPopup'
import VerifyPopup from '../../verify-popup/VerifyPopup'
import IsLoading from '../../../spinner/IsLoading'

interface MyAccountProps {
  userData: UserDataType
  isLoading: boolean
}

const MyAccount: FC<MyAccountProps> = ({ userData, isLoading }) => {
  const [verifyPopupVisible, setVerifyPopupVisible] = useState<boolean>(false)
  const userID = useSelector((state: RootState) => state.auth.sessionToken?.user_id)
  const dispatch = useDispatch()
  const [twoFactorCode, setTwoFactorCode] = useState<string>('')

  const RESET_PASSWORD_URL = `${config.REACT_APP_AUTH_URL}/password_reset` as string

  const history = useHistory()

  useEffect(() => {
    dispatch(getUser(userID))
  }, [dispatch, userID])

  const openVerifyPopup = () => {
    setVerifyPopupVisible(true)
  }
  const closeVerifyPopup = () => {
    setVerifyPopupVisible(!verifyPopupVisible)
  }

  const verify = () => {
    dispatch(verifyCode())
    openVerifyPopup()
  }

  const handleSubmit = (values: any) => {
    dispatch(updateUserData({...values, two_factor_code: twoFactorCode}))
    dispatch(getUser(userID))
    closeVerifyPopup()
  }

  const resetPassword = () => {
    window.location.href = RESET_PASSWORD_URL
  }

  const confirm = () => {
    dispatch(updateUserData(userID))
    dispatch(getUser(userID))
    closeVerifyPopup()
  }

  const handleChangeCode = (code: string) => {
    setTwoFactorCode(code)
  }


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const emailRegExp = /^^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  return (
    <article className="myAccount__container">
      <Title titleText="My Account" level={3} />
      {isLoading ? (
        <IsLoading />
      ) : (
        <Formik
          initialValues={{
            id: userData?.id,
            username: userData?.username,
            name: userData?.name,
            email: userData?.email,
            phone_number: userData?.phone_number,
            is_email_digest: userData?.is_email_digest,
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .matches(emailRegExp, 'Email is not valid')
              .required('Email is not valid'),
            phone_number: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .required('Must enter a phone number'),
            is_email_digest: Yup.bool().oneOf([true, false], 'Required').required('Please check'),
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
                <form onSubmit={handleSubmit}>
                  <section className="myAccount__container__content">
                    <ShareableInput
                      label="Username"
                      name="user_name"
                      readOnly={true}
                      value={values?.username}
                    />
                    <ShareableInput
                      label="Full Name"
                      name="full_name"
                      readOnly={true}
                      value={values?.name}
                    />
                    <ShareableInput
                      label="Email address"
                      name="email"
                      value={values?.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={errors.email && touched.email ? 'error' : ''}
                      errorsMessage={errors.email && touched.email && errors.email}
                    />
                    <ShareableInput
                      label="Phone Number"
                      name="phone_number"
                      value={values?.phone_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={errors.phone_number && touched.phone_number ? 'error' : ''}
                      errorsMessage={
                        errors.phone_number && touched.phone_number && errors.phone_number
                      }
                    />
                    <Checkbox
                      onChange={handleChange}
                      name="is_email_digest"
                      checked={values?.is_email_digest}
                    >
                      Send emails as daily digest
                    </Checkbox>
                    <ActionButtons
                      buttonText="Reset Password"
                      className="config__container__buttons--cancel"
                      onClick={resetPassword}
                    />
                  </section>
                  <section className="casia__device__edit__buttons">
                    <ActionButtons
                      buttonText="Back"
                      className="config__container__buttons--cancel"
                      onClick={history?.goBack}
                    />
                    <ConfirmPopup
                      title="Do you want to continue ?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={verify}
                    >
                      <ActionButtons
                        buttonText="Save"
                        className="config__container__buttons--next"
                        buttonType={!(dirty && isValid)}
                      />
                    </ConfirmPopup>
                    <VerifyPopup
                      value={twoFactorCode}
                      openVerifyPopup={openVerifyPopup}
                      closeVerifyPopup={closeVerifyPopup}
                      handleChange={handleChangeCode}
                      handleSubmit={handleSubmit}
                      verifyPopupVisible={verifyPopupVisible}
                      confirm={confirm}
                    />
                  </section>
                </form>
              </>
            )
          }}
        </Formik>
      )}
    </article>
  )
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.user.userData,
    isLoading: state.user.isLoading,
  }
}

export default connect(mapStateToProps)(MyAccount)
