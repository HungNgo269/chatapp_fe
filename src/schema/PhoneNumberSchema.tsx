import { z } from 'zod'
import libphonenumber from 'google-libphonenumber'

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()
const phoneSchema = z.string().refine(
  (number) => {
    try {
      const phoneNumber = phoneUtil.parse(number)
      return phoneUtil.isValidNumber(phoneNumber)
    } catch (error) {
      return false
    }
  },
  { message: 'Số điện thoại không hợp lệ' }
)
export default phoneSchema
