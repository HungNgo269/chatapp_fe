// import { useState } from 'react'
// import ListMessageCard from './ListMessageCard'
// import { useAuthStore } from '~/store/useAuthStore'

// interface ListMessageProps {
//   propName?: string
// }

// const ListMessage: React.FC<ListMessageProps> = ({ propName }) => {
//   const [active, setActive] = useState('1')
//   const { onlineUsers, authUser } = useAuthStore()
//   const onlineFriendList = onlineUsers.find((myself) => {
//     return !myself._id === authUser?._id
//   })
//   return (
//     <div>
//       {onlineFriendList.map((friend) => (
//         <ListMessageCard
//           data={friend}
//           onClick={() => {
//             setActive(friend.id)
//           }}
//           active={active === friend.id}
//         ></ListMessageCard>
//       ))}
//     </div>
//   )
// }

// export default ListMessage
