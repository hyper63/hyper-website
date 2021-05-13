import jwt from 'jsonwebtoken'

export function token() {
  return jwt.sign({sub: 'web'}, import.meta.env.VITE_API_SECRET, { audience: 'https://webcms-api.hyper.io'})
}
