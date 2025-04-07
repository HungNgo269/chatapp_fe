import { create } from 'zustand'
import apiConfig from '~/services/apiConfig'
import toast from 'react-hot-toast'
import IUser from '~/types/user'
import authAPi from '~/services/auth'
interface AuthState {
  authUser: null
  iSigningUp: boolean
  isLoggingIn: boolean
  isUpdatingProfile: boolean
  isCheckingAuth: boolean
  checkAuth: () => Promise<void>
}
export const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  iSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await apiConfig.get('auth/check')
      set({ authUser: res.data })
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while login', err)
      throw err
    } finally {
      set({ isCheckingAuth: false })
    }
  },
  signup: async (user: IUser) => {
    set({ iSigningUp: true })
    try {
      const res = await authAPi.signup(user)
      set({ authUser: res.data })
      if (res) {
        toast.success('Đăng ký thành công')
      }
    } catch (error: unknown) {
      toast.error('Đã xảy ra lỗi khi đăng ký')
      const err = error as Error
      console.log('error while login', err)
      throw err
    } finally {
      set({ iSigningUp: false })
    }
  }
}))
