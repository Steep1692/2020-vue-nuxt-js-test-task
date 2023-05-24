export const createResponse = (responseCode, data) => {
  return {
    responseCode,
    data,
  }
}

export const badRequest = () => {
  return createResponse(400)
}

export const successResponse = (data = null) => {
  return createResponse(200, data)
}

export const notAuthorized = () => {
  return createResponse(401)
}