import icon from '~/assets/image/icon/message-pending-svgrepo-com.svg'

interface MessageNotiProps {
  propName?: string
}

const MessageNoti: React.FC<MessageNotiProps> = ({ propName }) => {
  return (
    <div>
      <img src={icon} />
    </div>
  )
}

export default MessageNoti
