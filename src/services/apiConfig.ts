import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '~/store/useAuthStore'

// Extend the InternalAxiosRequestConfig type to include _retry
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

const apiConfig = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

let isRefreshing = false
let failedQueue: { resolve: (value: unknown) => void; reject: (reason?: any) => void }[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

// ĐẶT REQUEST INTERCEPTOR TRƯỚC
apiConfig.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken
    console.log('accesstoken in request interceptor:', accessToken)

    if (accessToken) {
      // Đảm bảo headers luôn tồn tại
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Bearer ${accessToken}`
    } else {
      console.log('No access token available')
    }

    return config
  },
  (error) => {
    console.error('Request interceptor error:', error)
    return Promise.reject(error)
  }
)
//logic: lặp lại việc gửi request đến refresh token để lấy access token mỗi khi bị 401.
apiConfig.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig | undefined

    if (!originalRequest) {
      return Promise.reject(error)
    }

    console.log('Response error status:', error.response?.status)
    console.log('Original request retry status:', originalRequest._retry)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            if (token) {
              // Đảm bảo headers luôn tồn tại
              originalRequest.headers = originalRequest.headers || {}
              originalRequest.headers['Authorization'] = `Bearer ${token}`
            }
            return apiConfig(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        console.log('Attempting to refresh token...')
        // Try to refresh the token
        const newToken = await useAuthStore.getState().refreshToken()
        console.log('New token received:', newToken)

        // If we got a new token, update the header and retry the request
        if (newToken) {
          // Đảm bảo headers luôn tồn tại
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`

          // Process any requests that came in while we were refreshing
          processQueue(null, newToken)

          return apiConfig(originalRequest)
        } else {
          console.error('Failed to get new token')
          processQueue(new Error('Failed to refresh token'))
          useAuthStore.getState().logout()
          return Promise.reject(error)
        }
      } catch (refreshError) {
        console.error('Error during token refresh:', refreshError)
        processQueue(refreshError)
        useAuthStore.getState().logout()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default apiConfig
