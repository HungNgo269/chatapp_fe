import toast from 'react-hot-toast'
import apiConfig from './apiConfig'

interface LoginCredentials {
  identifier: string
  password: string
}

export interface SignupCredentials {
  first_name: string
  last_name: string
  username: string
  password: string
  day_of_birth: Date
  gender: 'male' | 'female' | 'other'
  email?: string
  phone_number?: string
}

interface LoginResponse {
  user: any
  accessToken: string
}

const authAPI = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await apiConfig.post<LoginResponse>('auth/login', credentials)
      if (response.status === 200) {
        toast.success('Đăng nhập thành công')
        return response.data
      }
      return response.data
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while login', err)
      toast.error('Đăng nhập thất bại')
      throw err
    }
  },

  signup: async (credentials: SignupCredentials) => {
    try {
      const response = await apiConfig.post('auth/signup', credentials)
      if (response.status === 201) {
        // signup trả về 201, không phải 200
        toast.success('Đăng ký thành công')
        return response.data
      } else {
        return response.statusText
      }
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while signup', err)
      toast.error('Đăng ký thất bại')
      throw err
    }
  },

  refreshToken: async () => {
    try {
      const response = await apiConfig.get('auth/refresh-token')
      console.log('Refresh token response:', response.data)
      return response.data
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while refreshtoken', err)
      throw err
    }
  },

  checkAuth: async () => {
    try {
      const response = await apiConfig.get('auth/check')
      console.log(response)
      return response.data
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while checkAuth', err)
      throw err
    }
  },

  logout: async () => {
    try {
      return await apiConfig.post('auth/logout')
    } catch (error) {
      throw new error()
    }
  }
}

export default authAPI
