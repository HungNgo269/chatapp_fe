import React from 'react'

interface Props {
  content?: string
  color?: string
  size?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isSubmitting?: boolean //tạo trạng thái khi xử lý
  loadingText?: string // nội dung khi đang subbmiit
}
//các trạng thái mặc định
const CommonButton: React.FC<Props> = ({
  content,
  color = 'bg-blue-500',
  size = 'w-full max-w-80',
  type = 'button',
  disabled = false,
  isSubmitting = false,
  loadingText = 'Đang xử lý...'
}) => {
  return (
    <button
      disabled={disabled || isSubmitting}
      type={type}
      className={`${size} flex h-10 items-center justify-center border rounded-2xl
        px-3.5 text-base font-medium text-white hover:text-white ${color} select-none
        hover:bg-blue-300 focus-visible:outline-2 focus-visible:-outline-offset-1
        focus-visible:outline-blue-500 active:bg-gray-100 disabled:cursor-not-allowed`}
    >
      {isSubmitting ? loadingText : content}
    </button>
  )
}

export default CommonButton
