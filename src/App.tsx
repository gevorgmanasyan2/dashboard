import React, { FC, useEffect } from 'react'
import Layout from './components/layout/Layout'
import Development from './components/dev-mode/Development'
import Auth from './Auth/Auth'
import { useSelector } from 'react-redux'
import { RootState } from './redux/rootReducer'

const App: FC = () => {
  // useEffect(() => {
  //   if (!window.location.pathname.includes('/login')) {
  //     sessionStorage.setItem('location', window.location.pathname)
  //   }
  // }, [])

  const auth = useSelector((state: RootState) => state.auth.isLoggedIn)
  // return !auth ? (
  //   <Auth />
  // ) : (
  //   <div>
  //     {process.env.NODE_ENV === 'development' && <Development />}
  //     <Layout />
  //   </div>
  // )
  return <Layout />
}

export default App
