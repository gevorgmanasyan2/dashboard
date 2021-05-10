import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {RouteComponentProps } from 'react-router-dom'
import { login } from '../redux/auth/actions'

const VerifyToken: FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch()
  const params: any = props.match.params

  useEffect(() => {
    if (params.token) {
      dispatch(login(encodeURIComponent(params.token)))
    }
  }, [params.token,dispatch])

  return <></>
}

export default VerifyToken
