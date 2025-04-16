import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'
import IUser from '~/types/user'
import authAPI from '~/services/authApi'

interface LoginCredentials {
  identifier: string
  password: string
}

interface AuthState {
  authUser: IUser | null
  accessToken: string | null
  iSigningUp: boolean
  isLoggingIn: boolean
  isUpdatingProfile: boolean
  isCheckingAuth: boolean
  checkAuth: () => Promise<void>
  refreshToken: () => Promise<string>
  login: (credentials: LoginCredentials) => Promise<void>
  signup: (user: any) => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      authUser: null,
      accessToken: null,
      iSigningUp: false,
      isLoggingIn: false,
      isUpdatingProfile: false,
      isCheckingAuth: true,

      checkAuth: async () => {
        try {
          const authUser = await authAPI.checkAuth()
          console.log(authUser)
          set({ authUser: authUser })
        } catch (error) {
          set({ authUser: null, accessToken: null })
        } finally {
          set({ isCheckingAuth: false })
        }
      },

      refreshToken: async () => {
        try {
          const accessToken = await authAPI.refreshToken()
          console.log('accessToken', accessToken)
          set({ accessToken: accessToken })
          return accessToken
        } catch (error) {
          console.error('Error refreshing token:', error)
          set({ authUser: null, accessToken: null })
          throw error
        }
      },

      login: async (credentials: LoginCredentials) => {
        set({ isLoggingIn: true })
        try {
          const response = await authAPI.login(credentials)
          console.log('responese lgin', response)
          set({ authUser: response.user, accessToken: response.accessToken })
        } catch (error) {
          toast.error('Đăng nhập thất bại')
          throw error
        } finally {
          set({ isLoggingIn: false })
        }
      },

      signup: async (user: any) => {
        set({ iSigningUp: true })
        try {
          const data = await authAPI.signup(user)
          // Handle signup response if needed
          toast.success('Đăng ký thành công')
          return data
        } catch (error) {
          toast.error('Đã xảy ra lỗi khi đăng ký')
          throw error
        } finally {
          set({ iSigningUp: false })
        }
      },

      logout: async () => {
        try {
          await authAPI.logout()
        } catch (error) {
          console.error('Error during logout:', error)
        } finally {
          set({ authUser: null, accessToken: null })
          toast.success('Đã đăng xuất')
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        authUser: state.authUser
      })
    }
  )
)
