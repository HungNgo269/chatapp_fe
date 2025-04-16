interface User {
  first_name: string
  last_name: string
  username: string
  password: string
  day_of_birth: string | Date
  gender: 'male' | 'female' | 'other'
  email?: string
  phone_number?: string
  avatar?: string
  status: 'online' | 'offline' | 'banned'
  contact: string[]
  lastSeen: string | Date
  created_at?: string | Date
  updated_at?: string | Date
}
export default User
