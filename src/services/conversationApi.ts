import apiConfig from './apiConfig'

const conversationApi = {
  getListFriend: async () => {
    try {
      const response = await apiConfig.get('/contact/friends')
      return response.data
    } catch (error: unknown) {
      const err = error as Error
      console.log(err.message)
    }
  }
}
export default conversationApi
