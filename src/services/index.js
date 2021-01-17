import axios from 'axios'

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://rocky-gorge-52294.herokuapp.com'
    : 'http://localhost:3000'

const mainService = axios.create({
  baseURL
})

export const getMessage = () => mainService.get()
