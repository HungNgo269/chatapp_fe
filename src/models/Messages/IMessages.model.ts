//nhờ grok thay model từ IUser ở backend qua cho tiện
interface Message {
  conversationId: string // Thay Types.ObjectId thành string
  senderId: string // Thay Types.ObjectId thành string
  replyTo?: string // Thay Types.ObjectId thành string (nếu có)
  content: string
  timestamp: string | Date // Có thể là chuỗi ISO hoặc Date, tùy thuộc vào cách API trả về
  attachments?: string // Giữ nguyên vì đây đã là string
  status: 'TYPING' | 'SENDING' | 'DELIVERED' | 'READ'
  readBy?: string[] // Thay Types.ObjectId[] thành string[]
  createdAt?: string | Date // Thay thành string hoặc Date
  updatedAt?: string | Date // Thay thành string hoặc Date
}

export default Message
