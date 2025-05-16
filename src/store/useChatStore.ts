import { create } from 'zustand'
import toast from 'react-hot-toast'
import conversationApi from '~/services/conversationApi'
import Message from '~/models/Messages/IMessages.model'
import User from '~/models/User/IUser.model'

// Định nghĩa interface ChatState
interface ChatState {
  messages: Message[]
  users: User[]
  selectedUser: User | null
  isUsersLoading: boolean
  isMessagesLoading: boolean
  getUser: () => Promise<void>
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  users:[],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  getUser: async () => {
    set({ isUsersLoading: true })
    try {
      const res = await conversationApi.getListFriend()
      console.log('res', res)
      set({ users: res })
      console.log()
    } catch (error: unknown) {
      const err = error as Error
      toast.error(err.message)
    } finally {
      set({ isUsersLoading: false })
    }
  }
}))
