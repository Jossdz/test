import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://rocky-gorge-52294.herokuapp.com/auth'
    : 'http://localhost:3000/auth'

const authService = axios.create({
  baseURL,
  withCredentials: true
})

export const loginProcess = user => authService.post('/login', user)
export const signupProcess = user => authService.post('/signup', user)
export const getCurrentUser = () => authService.get('/profile')
export const logoutProcess = () => authService.get('/logout')
