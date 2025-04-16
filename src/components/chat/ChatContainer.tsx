import React, { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import Message from '~/models/Messages/IMessages.model'
import { useAuthStore } from '~/store/useAuthStore'
import ChatMessage from './ChatMessage'

const ChatContainer: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [currentMessage, setCurrentMessage] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const currentUser = useAuthStore.getState().authUser
  console.log('currentUSer', currentUser)
  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (data: Message) => {
        console.log('data', data)
        setMessages((prev) => [...prev, data])
      })
      return () => {
        socket.off('receive_message')
      }
    }
  }, [socket])

  const connect = () => {
    const newSocket = io('http://localhost:8000')
    setSocket(newSocket)
    setIsConnected(true)
  }

  const disconnect = () => {
    if (socket) {
      socket.disconnect()
      setSocket(null)
      setIsConnected(false)
    }
  }

  const sendMessage = () => {
    if (socket && currentMessage) {
      const newMessage = {
        conversationId: 'test',
        senderId: currentUser._id,
        content: currentMessage,
        timestamp: Date.now(),
        status: 'SENDING'
      }
      setMessages((prev) => [...prev, newMessage])
      socket.emit('send_message', {
        conversationId: 'test',
        senderId: currentUser._id,
        content: currentMessage,
        timestamp: Date.now(),
        status: 'SENDING'
      })
      setCurrentMessage('')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chat</h1>
      <div>
        <button onClick={connect} disabled={isConnected}>
          Kết nối
        </button>
        <button onClick={disconnect} className='border-2' disabled={!isConnected}>
          Ngắt kết nối
        </button>
      </div>
      <div>
        <input
          type='text'
          placeholder='Tin nhắn'
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Gửi
        </button>
      </div>
      <div>
        <h3>Tin nhắn:</h3>
        {messages.map((msg: Message, index) => (
          <ChatMessage message={msg} key={index}></ChatMessage>
        ))}
      </div>
    </div>
  )
}

export default ChatContainer
