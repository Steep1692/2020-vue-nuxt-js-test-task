import '../api/users'

export default async (req, res, next) => {
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')

  url = url.split('/')

  const method = url.pop()
  const controller = url.slice(1).join('/')
  const api = require('../api/' + controller)
  const {responseCode, data} = await api[method](req)

  res.statusCode = responseCode
  res.end(JSON.stringify(data))
}
