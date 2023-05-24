export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  ip_address: string

  gender: Gender
}

export enum Gender {
  'Male',
  'Female',
}

export const ID_FIELD_KEY = 'id'
export const EMAIL_FIELD_KEY = 'email'