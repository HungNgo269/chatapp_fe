import ava from '~/assets/image/icon/default_ava.svg'
import User from '~/models/User/IUser.model'
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
flex flex-row justify-start items-center`}
      onClick={onClick}
    >
      <img srcSet={ava} className='size-14'></img>
      <div className='flex flex-col justify-center items-start gap-4'>
        <span>{data?.first_name}</span>s
        <div className='flex flex-row justify-center items-start'>
          <span>Last Message </span>
          <span>{'cc'} </span>
        </div>
      </div>
    </div>
  )
}

export default ListMessageCard
