import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast'
import authAPI, { SignupCredentials } from '~/services/authApi'
import { Socket, io } from 'socket.io-client'
import User from '~/models/User/IUser.model'

// const serverURL = import.meta.env.REACT_APP_SERVER_URL
const serverURL = 'http://localhost:8000'
interface LoginCredentials {
  identifier: string
  password: string
}

interface AuthState {
  authUser: User | null
  accessToken: string | null
  isSigningUp: boolean
  isLoggingIn: boolean
  isUpdatingProfile: boolean
  isCheckingAuth: boolean
  onlineUsers: User[]
  status: 'online' | 'offline' | 'banned'
  socket: Socket | null
  checkAuth: () => Promise<void>
  refreshToken: () => Promise<string>
  login: (credentials: LoginCredentials) => Promise<void>
  signup: (user: SignupCredentials) => Promise<void>
  logout: () => Promise<void>
  connectSocket: () => void
  disconnectSocket: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      authUser: null,
      accessToken: null,
      isSigningUp: false,
      isLoggingIn: false,
      isUpdatingProfile: false,
      isCheckingAuth: true,
      status: 'offline',
      socket: null,
      onlineUsers: [],
      checkAuth: async () => {
        try {
          if (get().accessToken === null) {
            const accessToken = await get().refreshToken()
            console.log('new accesstoken', accessToken)
            set({ accessToken: accessToken })
          }
          const authUser = await authAPI.checkAuth()
          console.log(authUser)
          set({ authUser: authUser, status: 'online' })
          get().connectSocket()
        } catch (error: unknown) {
          const err = error as Error
          console.log(err.message)
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

          set({ authUser: response.user, accessToken: response.accessToken, status: 'online' })
          get().connectSocket()
        } catch (error) {
          toast.error('Đăng nhập thất bại')
          throw error
        } finally {
          set({ isLoggingIn: false })
        }
      },

      signup: async (user: SignupCredentials) => {
        set({ isSigningUp: true })
        try {
          const data = await authAPI.signup(user)
          toast.success('Đăng ký thành công')
          get().connectSocket()

          return data
        } catch (error) {
          toast.error('Đã xảy ra lỗi khi đăng ký')
          throw error
        } finally {
          set({ isSigningUp: false })
        }
      },

      logout: async () => {
        try {
          await authAPI.logout()
          set({ authUser: null })
          toast.success('Logged out success')
          get().disconnectSocket()
        } catch (error) {
          console.error('Error during logout:', error)
        } finally {
          set({ authUser: null, accessToken: null, status: 'offline' })
          toast.success('Đã đăng xuất')
        }
      },
      connectSocket: () => {
        const { authUser, socket, accessToken } = get()
        if (!authUser || socket?.connected) return {}
        const newSocket = io(serverURL, {
          query: { userId: authUser._id, user: JSON.stringify(authUser) }, // Gửi authUser
          auth: { token: accessToken }
          // autoConnect: false
        })

        newSocket.connect()
        set({ socket: newSocket })

        newSocket.on('connect', () => {
          newSocket.emit('setOnline', authUser._id)
          console.log('Socket connected:', newSocket.id)
        })

        newSocket.on('disconnect', () => {
          newSocket.emit('setOffline', authUser._id)
          console.log('Socket disconnected')
        })
        newSocket.on('getOnlineUsers', (userIds) => {
          set({ onlineUsers: userIds })
        })
      },
      disconnectSocket: () => {
        if (get().socket?.connected) {
          get().socket?.disconnect()
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
