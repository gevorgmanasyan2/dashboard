/* eslint-disable @typescript-eslint/camelcase */
import fetch from 'node-fetch'
import {config} from '../api/constants'
import configEnv from '../config/config.sample.json'

//encrypt
export const encrypt = async (encrypted: any) => {
  const encryption: any =  await fetch(
    `${configEnv.REACT_APP_AUTH_URL}/encrypt/${encrypted}`, config()
  )

  const encrypted_json = await encryption.json()

  return encrypted_json.encrypted

}

//decrypt
export const decrypt = async (decrypted: string) => {
  const decryption: any =   await fetch(
    `${configEnv.REACT_APP_AUTH_URL}/get_jwt/${(decrypted)}`, config()
  )

  const decrypted_json = await decryption.json()
    
  return await decrypted_json
}

//redirect periodly
export const RedirectLoginPage31 = (URL: string) => {
  try {
    const currentTime = new Date().getTime()
    const token = JSON.parse(sessionStorage.getItem('token') as string)
    const tokenTime = new Date(token.token_timestamp as string).getTime()
    const tokenTimeout = Number(configEnv.REACT_APP_TOKEN_TIMEOUT) * 1000
    const timeout =
    currentTime > tokenTime ? tokenTimeout - (currentTime - tokenTime) : tokenTimeout
    setTimeout(function () {
      window.location.href = URL
    }, timeout)
  } catch (error) {
    window.location.href = URL
  }
}
