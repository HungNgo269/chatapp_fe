import { useState } from 'react'
import ListMessageCard from './ListMessageCard'

interface ListMessageProps {
  propName?: string
}

const friendsList = [
  {
    id: '1',
    fullName: 'Nguyen Van A',
    lastSeen: new Date('2025-04-15T10:30:00')
  },
  {
    id: '2',

    fullName: 'Tran Thi B',
    lastSeen: new Date('2025-04-14T18:45:00')
  },
  {
    id: '3',

    fullName: 'Le Van C',
    lastSeen: new Date('2025-04-16T08:20:00')
  },
  {
    id: '4',
    fullName: 'Pham Thi D',
    lastSeen: new Date('2025-04-13T22:15:00')
  },
  {
    id: '5',
    fullName: 'Hoang Van E',
    lastSeen: new Date('2025-04-15T09:00:00')
  }
]
const ListMessage: React.FC<ListMessageProps> = ({ propName }) => {
  const [active, setActive] = useState('1')
  return (
    <div>
      {friendsList.map((friend) => (
        <ListMessageCard
          data={friend}
          onClick={() => {
            setActive(friend.id)
          }}
          active={active === friend.id}
        ></ListMessageCard>
      ))}
    </div>
  )
}

export default ListMessage
