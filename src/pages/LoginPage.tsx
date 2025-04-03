import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import messenger from '~/assets/image/icon/messenger-color-svgrepo-com.svg'
import { loginSchema } from '~/schema/LoginSchema'
import { z } from 'zod'
import { useState } from 'react'

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
      <img src={messenger} className='w-10 h-10 sm:w-16 sm:h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-10' />
      <form className='flex flex-col gap-4 justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-start gap-1'>
          <label className='text-gray-900 line-clamp-1 mb-4 text-base md:text-xl lg:text-lg'>
            Kết nối với những người bạn yêu quý.
          </label>
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
        <button
          disabled={isSubmitting}
          type='submit'
          className='flex h-10 items-center justify-center border w-full rounded-2xl
            px-3.5 text-base font-medium text-white hover:text-white bg-blue-500 select-none
            hover:bg-blue-300 focus-visible:outline-2 focus-visible:-outline-offset-1
            focus-visible:outline-blue-500 active:bg-gray-100 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>
    </div>
  )
}
