import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import messenger from '~/assets/image/icon/messenger-color-svgrepo-com.svg'
import { loginSchema } from '~/schema/LoginSchema'
import { z } from 'zod'
import { useState } from 'react'
import CommonButton from '~/components/CommonButton'
import UnderlineLink from '~/components/UnderlineLink'
import InputField from '~/components/InputField'

type LoginInput = z.infer<typeof loginSchema>

// Hàm gọi API đăng nhập (thay bằng API thực tế của bạn)
async function loginUser(data: LoginInput) {
  // Ví dụ API call thực tế:
  // const response = await fetch('/api/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) throw new Error('Đăng nhập thất bại');
  // return response.json();

  // Giả lập kết quả sau 1 giây
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true }
}

interface LoginPageProps {
  propName?: string
}

const LoginPage: React.FC<LoginPageProps> = ({ propName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      identifier: '',
      password: ''
    }
  })

  const [loginError, setLoginError] = useState<string | null>(null)

  const onSubmit = async (data: LoginInput) => {
    try {
      const response = await loginUser(data)
      if (response.success) {
        console.log('Đăng nhập thành công:', data)
        // Thêm logic chuyển hướng, ví dụ: window.location.href = '/dashboard';
      }
    } catch (error: unknown) {
      const err = error as Error
      setLoginError(err.message)
      console.log('error while login', err)
      throw err
    }
  }
  const { watch } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })
  console.log('Identifier:', watch('identifier'))
  console.log('Errors:', errors)
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='h-fit w-full flex flex-col justify-center items-center relative'>
        <img src={messenger} className='w-10 h-10 sm:w-16 sm:h-16 md:w-32 md:h-32  mb-10' />
        <form className='flex flex-col gap-4 justify-center items-center ' onSubmit={handleSubmit(onSubmit)}>
          <label className='text-gray-900 line-clamp-1 mb-4 text-base  md:text-3xl p-2'>
            Kết nối với những người bạn yêu quý.
          </label>
          <div className='flex flex-col items-start gap-1 max-w-80 w-full'>
            <InputField name='identifier' type='text' placeholder='Email hoặc số điện thoại' />
            <InputField name='password' type='password' placeholder='Mật khẩu' />
          </div>
          {loginError && <div className='text-sm text-red-800'>{loginError}</div>}
          <CommonButton
            content='Đăng nhập'
            isSubmitting={isSubmitting}
            type='submit'
            loadingText='Đang đăng nhập'
          ></CommonButton>
        </form>
        {/* todo  */}
        <label className='flex flex-row items-center gap-2 mt-4'>
          <input type='checkbox' className='h-4 w-4' />
          <span className='text-gray-500'>Ghi nhớ đăng nhập</span>
        </label>
      </div>
      <footer className='mb-[20px] absolute bottom-0 w-full'>
        <div className='flex justify-center space-x-6 text-sm'>
          <UnderlineLink label='Chưa dùng Facebook' />
          <UnderlineLink bold label='Quên mật khẩu' />
          <UnderlineLink label='Chính sách quyền riêng tư' />
          <UnderlineLink label='Điều khoản' />
          <UnderlineLink label='Chính sách cookie' />
          <UnderlineLink label='© Meta 2025' />
        </div>
      </footer>
    </div>
  )
}
export default LoginPage
