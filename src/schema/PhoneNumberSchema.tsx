import { z } from 'zod'
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
export default phoneSchema
