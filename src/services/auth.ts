import toast from 'react-hot-toast'
import apiConfig from './apiConfig'
interface LoginCredentials {
  identifier: string
  password: string
}
interface SignupCredentials {
  first_name: string
  last_name: string
  username: string
  password: string
  day_of_birth: Date
  gender: 'male' | 'female' | 'other'
  email?: string
  phone_number?: string
}

const authAPi = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await apiConfig.post('auth/login', credentials)
      if (response.status === 200) {
        toast.success('Đăng nhập thành công')
        return response
      }
      return response
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
      if (response.status === 200) {
        toast('Đăng ký thành công')
        return response
      } else {
        return response.statusText
      }
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while signup', err)
      toast.error('Đăng ký thất bại')
      throw err
    }
  }
}

export default authAPi
