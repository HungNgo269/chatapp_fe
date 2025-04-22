interface IUser {
  _id: string
  first_name: string
  last_name: string
  username: string
  password: string
  day_of_birth: Date
  gender: 'male' | 'female' | 'other'
  email?: string
  phone_number?: string
  avatar?: string
  created_at: Date
  updated_at: Date
}
export default IUser
