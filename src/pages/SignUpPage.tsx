import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '~/assets/image/icon/facebook_text.svg'
import CommonButton from '~/components/CommonButton'
import InputField from '~/components/InputField'
import UnderlineLink from '~/components/UnderlineLink'
import { signupSchema } from '~/schema/SignUpSchema'
import authAPi from '~/services/authApi'
type SignupInput = z.infer<typeof signupSchema>

const SignUpPage: React.FC = () => {
  const navigate = useNavigate()

  const methods = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {}
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitting }
  } = methods

  const onSubmit = async (data: SignupInput) => {
    try {
      const result = await authAPi.signup(data)
      if (result.status === 200) {
        navigate('/')
      }
    } catch (error: unknown) {
      const err = error as Error
      console.log('error while login', err)
      throw err
    }
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      <div className='h-fit w-full flex flex-col justify-center items-center relative bg-[#f0f2f5]'>
        <img src={facebook} className='w-fit h-10 sm:w-fit sm:h-16 mb-10' alt='Facebook Logo' />
        <div className='max-w-96 shadow-2xl rounded-2xl '>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 justify-center items-center w-full'>
              <div className='flex flex-col justify-center items-center w-full border-b-1 border-gray-400 px-4 py-2.5'>
                <span className='text-2xl font-bold'>Tạo tài khoản mới</span>
                <span className='text-gray-500 text-base'>Nhanh chóng và dễ dàng</span>
              </div>

              <div className='flex flex-col gap-4 w-full p-4'>
                <div className='flex flex-row gap-4'>
                  <div>
                    <InputField size='h-8' name='last_name' placeholder='Họ' />
                    {errors.last_name && <span className='text-red-500 text-xs'>{errors.last_name.message}</span>}
                  </div>
                  <div>
                    <InputField name='first_name' placeholder='Tên' />
                    {errors.first_name && <span className='text-red-500 text-xs'>{errors.first_name.message}</span>}
                  </div>
                </div>

                <div>
                  <InputField name='username' placeholder='Tên người dùng' />
                  {errors.username && <span className='text-red-500 text-xs'>{errors.username.message}</span>}
                </div>

                <div>
                  <InputField name='password' type='password' placeholder='Mật khẩu' />
                  {errors.password && <span className='text-red-500 text-xs'>{errors.password.message}</span>}
                </div>

                <div>
                  <InputField name='day_of_birth' type='date' placeholder='Ngày sinh' />
                  {errors.day_of_birth && <span className='text-red-500 text-xs'>{errors.day_of_birth.message}</span>}
                </div>

                <div>
                  <select {...methods.register('gender')} className='w-full p-2 border rounded'>
                    <option value=''>Chọn giới tính</option>
                    <option value='male'>Nam</option>
                    <option value='female'>Nữ</option>
                    <option value='other'>Khác</option>
                  </select>
                  {errors.gender && <span className='text-red-500 text-xs'>{errors.gender.message}</span>}
                </div>

                <div>
                  <InputField name='identifier' placeholder='Email hoặc số điện thoại' />
                  {errors.identifier && <span className='text-red-500 text-xs'>{errors.identifier.message}</span>}
                </div>
              </div>

              <div className='flex flex-col justify-center items-center w-full pb-4 px-4 text-gray-500 text-xs text-wrap'>
                <span>
                  Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.
                  <UnderlineLink size='xs' label=' Tìm hiểu thêm.' color='blue' />
                </span>
                <br />
                <span>
                  Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                  <UnderlineLink size='xs' label=' Điều khoản, Chính sách quyền riêng tư ' color='blue' />
                  và
                  <UnderlineLink size='xs' label=' Chính sách cookie ' color='blue' />
                  của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                </span>
              </div>

              <div className='w-40'>
                <CommonButton
                  content='Đăng ký'
                  isSubmitting={isSubmitting}
                  type='submit'
                  loadingText='Đang đăng ký'
                  color='green'
                />
              </div>

              <div className='pb-6'>
                <Link to='/login'>
                  <span className='text-lg text-blue-500'>Bạn đã có tài khoản ư?</span>
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
