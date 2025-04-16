interface Conversation {
  id: string
  type: 'direct' | 'group'
  name?: string
  avatar?: string
  participants: string[]
  lastMessageId?: string
  createdBy?: string
  admin?: string[]
  createdAt?: string | Date
  updatedAt?: string | Date
}

export default Conversation
