import { z } from 'zod'
import emailSchema from './EmailSchema'
import phoneSchema from './PhoneNumberSchema'

const loginSchema = z.object({
  identifier: z.union([emailSchema, phoneSchema], {
    errorMap: () => ({ message: 'Please enter a valid email or phone number' })
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(100, { message: 'Password must not exceed 100 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least 1 uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least 1 number' })
    .regex(/[!@#$%^&*]/, { message: 'Password must contain at least 1 special character' })
})

export { loginSchema }
