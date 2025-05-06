import ListMessage from './ListMessage'
import NavigationButton from '../NavigationButton'
import message from '~/assets/image/icon/message-pending-svgrepo-com.svg'
import Icon from '../Icon'

interface SideBarProps {
  propName?: string
}

const images = [
  { id: 1, img: message },
  { id: 2, img: message },
  { id: 3, img: message },
  { id: 4, img: message },
  { id: 5, img: message }
]

const SideBar: React.FC<SideBarProps> = ({ propName }) => {
  return (
    <div
      className='flex flex-col justify-start w-24 md:w-[360px]  border-r-1
     border-(--color-border)  '
    >
      <div className='flex flex-row justify-between items-center'>
        <span>Tìm hoặc bắt đầu cuộc trò chuyện</span>
      </div>
      <div className='flex flex-col  justify-center items-center w-full h-fit'>
        <NavigationButton>
          <Icon IconSrc={images[0].img} size='size-5'></Icon>
          <span> Bạn bè</span>
        </NavigationButton>
        <NavigationButton>
          <Icon IconSrc={images[0].img} size='size-5'></Icon>

          <span> Nitro</span>
        </NavigationButton>
        <NavigationButton>
          <Icon IconSrc={images[0].img} size='size-5'></Icon>

          <span> Cửa hàng</span>
        </NavigationButton>
      </div>
      <div className='flex flex-col  justify-center items-center w-full'>
        <span className='flex flex-row justify-start text-sm'>Tin nhắn trực tiếp</span>
      </div>
    </div>
  )
}

export default SideBar
