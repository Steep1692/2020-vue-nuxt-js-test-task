import { badRequest, successResponse } from './responses'
import { ID_FIELD_KEY } from '../models/user'
import { withAuth } from './auth'
import { usersArray, findUserBy } from '../db/db'

export const Get = withAuth((req) => {
  const { id = null, count = 10, offset = 0 } = req

  if (id) {
    const { model } = findUserBy(id, ID_FIELD_KEY)

    if (model) {
      return successResponse(model)
    }
  } else {
    return successResponse(usersArray.slice(offset, count))
  }

  return badRequest()
})

export const Set = withAuth((req) => {
  const { id, user } = req
  
  if (id && user) {
    const { model, indexInArray } = findUserBy(id, ID_FIELD_KEY)

    if (userToEditObject) {
      usersArray[indexInArray] = {
        ...model,
        ...user,
      }

      return successResponse()
    }
  }

  return badRequest()
})

export const Delete = withAuth((req) => {
  const { id } = req

  if (id) {
    const { model, indexInArray } = findUserBy(id, ID_FIELD_KEY)

    if (model) {
      usersArray.splice(indexInArray, 1)

      return successResponse()
    }
  }

  return badRequest()
})

export const Add = withAuth((req) => {
  const { user } = req

  if (user) {
    usersArray.push(user)

    return successResponse()
  }

  return badRequest()
})