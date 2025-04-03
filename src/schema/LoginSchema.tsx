import { z } from 'zod'

const emailSchema = z.string().email({
  message: 'Định dạng email không hợp lệ'
})

import libphonenumber from 'google-libphonenumber'
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()
const phoneSchema = z.string().refine(
  (number) => {
    try {
      const phoneNumber = phoneUtil.parse(number)
      return phoneUtil.isValidNumber(phoneNumber)
    } catch (error) {
      // Chỉ log lỗi trong môi trường development
      if (process.env.NODE_ENV === 'development') {
        console.error('Lỗi phân tích số điện thoại:', error)
      }
      return false
    }
  },
  { message: 'Số điện thoại không hợp lệ' }
)

// import validator from 'validator'
// const phoneSchema = z.string().refine(validator.isMobilePhone)

const loginSchema = z.object({
  identifier: z.union([emailSchema, phoneSchema], {
    errorMap: () => ({ message: 'Vui lòng nhập email hoặc số điện thoại hợp lệ' })
  }),
  password: z
    .string()
    .min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
    .max(100, { message: 'Mật khẩu không được vượt quá 100 ký tự' })
    .regex(/[A-Z]/, { message: 'Mật khẩu phải chứa ít nhất 1 chữ cái in hoa' })
    .regex(/[0-9]/, { message: 'Mật khẩu phải chứa ít nhất 1 số' })
    .regex(/[!@#$%^&*]/, { message: 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt' })
})

export { loginSchema, phoneSchema, emailSchema }
