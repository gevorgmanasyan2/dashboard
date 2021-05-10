export interface UserResponseType {
userData: UserDataType[]
}

export type UserDataType = {
  created_date: string
  edit_date: null
  email: string
  id: number
  is_active: boolean
  is_email_digest: boolean
  name: string
  password: string
  phone_number: string
  source_id: number
  username: string
}