import { z } from 'zod'

const emailSchema = z.string().email({
  message: 'Định dạng email không hợp lệ'
})

export default emailSchema
