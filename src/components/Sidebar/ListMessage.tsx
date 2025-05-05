import { useState } from 'react'
import ListMessageCard from './ListMessageCard'
import { useAuthStore } from '~/store/useAuthStore'
import User from '~/models/User/IUser.model'

interface ListMessageProps {
  propName?: string
}

const ListMessage: React.FC<ListMessageProps> = ({ propName }) => {
  const [active, setActive] = useState('')
  const { onlineUsers, authUser } = useAuthStore()
  const onlineFriendList = onlineUsers.filter((user) => {
    return user._id !== authUser?._id
  })
  console.log(onlineFriendList)
  return (
    <div>
      {onlineFriendList.map((friend: User) => (
        <ListMessageCard
          data={friend}
          onClick={() => {
            setActive(friend._id)
          }}
          active={active === friend._id}
        ></ListMessageCard>
      ))}
    </div>
  )
}

export default ListMessage
