import { badRequest, successResponse, notAuthorized } from './responses'
import { ID_FIELD_KEY, EMAIL_FIELD_KEY } from '../models/user'
import { verifyToken, generateToken } from '../utils/jwt'
import { findUserBy } from '../db/db'

export const withAuth = (apiEndpointMethod) => {
  return (req) => {
    const { token } = req
    
    return verifyToken(token, (err, userData) => {

      if (err) {
        return notAuthorized()
      }

      return apiEndpointMethod(req, userData)
    })
  }
}

export const Login = (req) => {
  const { email } = req

  if (email) {
    const { model } = findUserBy(email, EMAIL_FIELD_KEY)

    if (model) {
      return successResponse(
        generateToken(model[ID_FIELD_KEY])
      )
    }

  }

  return badRequest()
}

export const IsAuth = withAuth((req, userData) => {
  return successResponse(userData)
})