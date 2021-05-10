import React, {FC} from 'react'
import { Switch, Route } from 'react-router-dom'
import { encrypt } from './crypto'
import VerifyToken from './verifyToken'
import config from '../config/config.sample.json'

const Auth: FC = () => {
  const [redirectLink, setRedirectLink] = React.useState('')
  React.useEffect(() => {
    async function getUrl() {
      const AUTH_URL = `${config.REACT_APP_AUTH_URL}/login?next=` as string
      const BASE_URL = config.REACT_APP_URL as string
      const encryption = await encrypt(BASE_URL)
      const url = `${AUTH_URL}${encodeURIComponent(encryption)}`
      setRedirectLink(url)
    }
    getUrl()
  }, [])

  const RedirectLoginPage = () => {
    window.location.href = redirectLink
    return null
  }

  if (!redirectLink) return null

  return (
    <>
      <Switch>
        <Route exact path="/login/:token" component={VerifyToken} />
        <Route path="*" render={() => RedirectLoginPage()} />
      </Switch>
    </>
  )
}

export default Auth
