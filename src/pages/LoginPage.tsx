import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import messenger from '~/assets/image/icon/messenger-color-svgrepo-com.svg'
import { loginSchema } from '~/schema/LoginSchema'
import { z } from 'zod'
import { useState } from 'react'
import CommonButton from '~/components/CommonButton'
import { Link } from 'react-router-dom'

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

export default function LoginPage() {
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
    } catch (error) {
      setLoginError('Thông tin đăng nhập không hợp lệ')
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
            <input
              {...register('identifier')}
              type='text'
              required
              placeholder='Email hoặc số điện thoại'
              aria-label='Email hoặc số điện thoại'
              className='h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900
              focus:outline-2 focus:-outline-offset-1 focus:outline-black mb-2'
            />

            {errors.identifier && <p className='text-sm text-red-800'>{errors.identifier.message}</p>}

            <input
              {...register('password')}
              type='password'
              required
              placeholder='Mật khẩu'
              aria-label='Mật khẩu'
              className='h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900
              focus:outline-2 focus:-outline-offset-1 focus:outline-black'
            />
            {errors.password && <p className='text-sm text-red-800'>{errors.password.message}</p>}
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
          <span className='text-gray-400'>Ghi nhớ đăng nhập</span>
        </label>
      </div>
      <footer className='mb-[20px] absolute bottom-0 w-full'>
        <div className='flex justify-center space-x-6 text-sm'>
          <Link to='/' className='hover:underline font-normal  text-base'>
            Chưa dùng Facebook?
          </Link>
          <Link to='/' className='hover:underline font-bold  text-base'>
            Quên mật khẩu
          </Link>
          <Link to='/' className='hover:underline font-normal  text-base'>
            Chính sách quyền riêng tư
          </Link>
          <Link to='/' className='hover:underline font-normal  text-base'>
            Điều khoản
          </Link>
          <Link to='/' className='hover:underline font-normal  text-base'>
            Chính sách cookie
          </Link>
          <Link to='/' className='hover:underline font-normal  text-base '>
            © Meta 2025
          </Link>
        </div>
      </footer>
    </div>
  )
}
