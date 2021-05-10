import React from 'react'
import { Result } from 'antd'
import './notFound.scss'
import { Link, useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()
  return (
    <div className='not__found__page'>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <div className='not__found__page__content'>
            <p className='not__found__page__content__info'>
              Please &nbsp;<span onClick={history?.goBack}>return</span>&nbsp;to the previous page or go to&nbsp;
              <Link to="/">dashboard</Link>&nbsp;page
            </p>
          </div>
        }
      />
    </div>
  )
}

export default NotFound
