import jwt from 'jsonwebtoken'

const SECRET = 'secret'

export const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    SECRET,
    {
      expiresIn: 86400,
    }
  )
}

export const verifyToken = (token, cb) => {
  return jwt.verify(token, SECRET, cb)
}