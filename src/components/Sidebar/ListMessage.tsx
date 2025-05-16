import { useEffect, useState } from 'react'
import ListMessageCard from './ListMessageCard'
import User from '~/models/User/IUser.model'
import { useNavigate } from 'react-router-dom'
import { useChatStore } from '~/store/useChatStore'
interface ListMessageProps {
  props: string
}

const ListMessage: React.FC<ListMessageProps> = ({}) => {
  const { users, getUser } = useChatStore()
  const onlineUsers = users.filter((user) => user.status === 'online')
  console.log('onlineUsers', onlineUsers)
  const [active, setActive] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [getUser])

  const handleOnclick = (id: string) => {
    setActive(id)
    navigate(`channels/@me/${id}`)
  }

  return (
    <div className='w-full'>
      {Array.isArray(onlineUsers) && onlineUsers.length > 0
        ? onlineUsers.map((friend: User) => (
            <ListMessageCard
              key={friend._id}
              data={friend}
              onClick={() => handleOnclick(friend._id)}
              active={active === friend._id}
            />
          ))
        : 'Không có ai đang online cả'}
    </div>
  )
}

export default ListMessage
