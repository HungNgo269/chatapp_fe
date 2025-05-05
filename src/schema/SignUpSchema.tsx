import { z } from 'zod'
import emailSchema from './EmailSchema'
import phoneSchema from './PhoneNumberSchema'

const signupSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(100, { message: 'Password must not exceed 100 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least 1 uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least 1 number' })
    .regex(/[!@#$%^&*]/, { message: 'Password must contain at least 1 special character' }),
  day_of_birth: z.date({ message: 'Date of birth is required' }).refine((date) => date <= new Date(), {
    message: "Date of birth can't be in the future"
  }),
  gender: z.enum(['male', 'female', 'other'], { message: 'Gender must be male, female, or other' }),
  identifier: z.union([emailSchema, phoneSchema], {
    errorMap: () => ({ message: 'Please enter a valid email or phone number' })
  }),
  avatar: z.string().url({ message: 'Profile picture must be a valid URL' }).optional()
})

export { signupSchema }
