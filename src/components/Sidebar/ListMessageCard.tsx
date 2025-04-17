import ava from '~/assets/image/icon/default_ava.svg'
interface ListMessageCardProps {
  data?: any
  onClick: () => void
  active: boolean
}

const ListMessageCard: React.FC<ListMessageCardProps> = ({ data, onClick, active }) => {
  return (
    <div
      className={`${active ? 'bg-(--color-dark-blue)  ' : 'hover:bg-gray-400'}
flex flex-row justify-start items-center`}
      onClick={onClick}
    >
      <img srcSet={ava} className='size-14'></img>
      <div className='flex flex-col justify-center items-start gap-4'>
        <span>{data.fullName}</span>
        <div className='flex flex-row justify-center items-start'>
          <span>Last Message </span>
          <span>{data.lastSeen.toLocaleString()} </span>
        </div>
      </div>
    </div>
  )
}

export default ListMessageCard
