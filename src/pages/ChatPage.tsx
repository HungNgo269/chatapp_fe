import { useAuthStore } from '~/store/useAuthStore'

interface ChatPageProps {
  propName?: string
}

const ChatPage: React.FC<ChatPageProps> = ({ propName }) => {
  const currentuser = useAuthStore().authUser
  return (
    <div className='flex flex-col '>
      <div className='flex flex-row justify-between items-center border-(--color-border) min-h-12'>
        <div className='flex flex-row justify-start items-center h-8 p-4 pl-5'>
          <span>ava .</span>
          <span>{currentuser?.username}</span>
        </div>
        <div className='flex flex-row justify-start items-center'>
          <span>call</span>
          <span>callvideo</span>

          <span>pin message</span>
          <span>add</span>
          <span>userinfo</span>
        </div>
      </div>
      <div></div>
      <h1>{currentuser?._id}</h1>
      <span>Leftside UserInfo</span>
    </div>
  )
}

export default ChatPage
