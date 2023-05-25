import axios from 'axios'

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: process.env.API_URL || 'http://localhost:3333',
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
