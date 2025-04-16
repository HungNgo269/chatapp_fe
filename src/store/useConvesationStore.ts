import create from 'zustand'
import second from 'react-hot-toast'
import IUser from '~/types/user'

// interface ConversationState{
//   messages:[],
//   users:[],
//   selectedUser:IUser |null,
//   isUserLoading:boolean,
//   isMessagesLoading:boolean
// }

export const useConvesationStore = create ((set)=>({
  messages:[],
  users:[],
  selectedUser:null,
  isUserLoading:false,
  isMessagesLoading:false

  getUsers: async()=>{
    set({isUserLoading:true})
    try {
      const res = await 
    } catch (error) {
      
    }
  }
}))