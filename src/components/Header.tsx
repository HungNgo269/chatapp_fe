import header from '~/assets/image/icon/header_friend.svg'
import message from '~/assets/image/icon/message-pending-svgrepo-com.svg'
import help from '~/assets/image/icon/help-circle-svgrepo-com.svg'

import Icon from './Icon'
import { useAuthStore } from '~/store/useAuthStore'

interface HeaderProps {
  propName?: string
}

const Header: React.FC<HeaderProps> = ({ propName }) => {
  const logout = useAuthStore((state) => state.logout)
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  return (
    <div
      className='h-(--max-height-header) w-full flex flex-row justify-between items-center border-b-1
     border-(--color-border) bg-(--color-primary-black)'
    >
      <div className='flex flex-row justify-center items-center w-full gap-4 text-(--text-normal)'>
        <Icon IconSrc={header}></Icon>
        <span
          onClick={() => {
            handleLogout()
          }}
        >
          Bạn bè
        </span>
      </div>
      <div className='ml-auto mr-2 flex flex-row justify-center items-center gap-8'>
        <Icon IconSrc={message}></Icon>
        <Icon IconSrc={help}></Icon>
      </div>
    </div>
  )
}

export default Header
