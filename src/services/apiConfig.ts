import axios from 'axios'
const apiConfig = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// apiConfig.interceptors.request.use(
//   (config) => {
//     const token = 'test'
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => Promise.reject(error)
// )
export default apiConfig
