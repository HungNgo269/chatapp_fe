import Message from '~/models/Messages/IMessages.model'

interface ChatMessageProps {
  message: Message
  key?: number
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, key }) => {
  return (
    <div>
      <p key={key}>
        <strong>{message.senderId}</strong>: {message.content}
      </p>
    </div>
  )
}

export default ChatMessage
