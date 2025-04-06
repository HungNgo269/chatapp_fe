import { create } from 'zustand'
import apiConfig from '~/services/apiConfig'
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
  }
}))
