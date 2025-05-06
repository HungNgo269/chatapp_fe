import ava from '~/assets/image/icon/default_ava.svg'
import User from '~/models/User/IUser.model'
import message from '~/assets/image/icon/message-pending-svgrepo-com.svg'

interface ListMessageCardProps {
  data?: User
  onClick: () => void
  active: boolean
}

const ListMessageCard: React.FC<ListMessageCardProps> = ({ data, onClick, active }) => {
  console.log(data)
  return (
    <div
      className={`${active ? 'bg-(--color-dark-blue)  ' : 'hover:bg-gray-400'}
flex flex-row justify-start items-center h-10 w-full`}
      onClick={onClick}
    >
      <img srcSet={ava} className='size-8 rounded-full grow-0 shrink-0 pl-1'></img>
      <div className='flex flex-col justify-center items-start '>
        <span className='items-start  font-semibold text-(--header-primary)    overflow-hidden whitespace-nowrap overflow-ellipsis'>
          {data?.username}
        </span>
        <div className=' items-start  font-medium text-(--header-secondary)    overflow-hidden whitespace-nowrap overflow-ellipsis'>
          Ngoại tuyến//thay đổi nè
        </div>
      </div>
    </div>
  )
}

export default ListMessageCard
