import apiConfig from './apiConfig'
import second from './apiConfig'

const conversationApi = {
  getOnlineFriends: async () => {
    try {
      const response = await apiConfig.get('/friends/online')
    } catch (error) {}
  }
}
export default conversationApi
