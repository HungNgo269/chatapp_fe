import message from '~/assets/image/icon/message-pending-svgrepo-com.svg'
import Icon from '../Icon'

interface SideBarGroupProps {
  propName?: string
}

const images = [
  { id: 1, img: message },
  { id: 2, img: message },
  { id: 3, img: message },
  { id: 4, img: message },
  { id: 5, img: message }
]
const SideBarGroup: React.FC<SideBarGroupProps> = ({ propName }) => {
  return (
    <div className='flex flex-col'>
      <h1>propName</h1>
      {images.map((item) => (
        <Icon key={item.id} size='size-10' IconSrc={item.img} />
      ))}
    </div>
  )
}

export default SideBarGroup
