import IUser from '~/types/user'
import apiConfig from './apiConfig'
interface LoginCredentials {
  identifier: string
  password: string
}
interface LoginResponse {
  token: string
  user: IUser
}

const loginApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await apiConfig.post('auth/login', credentials)
      return response.data
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while login', err)
      throw err
    }
  }
}
export default loginApi
