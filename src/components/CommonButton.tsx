interface CommonButtonProps {
  content?: string
  color?: 'green' | 'blue'
  size?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isSubmitting?: boolean //tạo trạng thái khi xử lý
  loadingText?: string // nội dung khi đang subbmiit
}
//các trạng thái mặc định

const CommonButton = ({
  content,
  color = 'blue',
  size = 'w-full max-w-80',
  type = 'button',
  disabled = false,
  isSubmitting = false,
  loadingText = 'Đang xử lý...'
}: CommonButtonProps) => {
  const colorCus = {
    green: 'bg-green-500',
    blue: 'bg-blue-500'
  }[color]
  return (
    <button
      disabled={disabled || isSubmitting}
      type={type}
      className={`${size} ${colorCus}  flex h-10 items-center justify-center border rounded-md
        px-3.5 text-base font-medium text-white hover:text-white select-none
        hover:opacity-90 focus-visible:outline-2 focus-visible:-outline-offset-1
        focus-visible:outline-blue-500 active:opacity-90 disabled:cursor-not-allowed`}
    >
      {isSubmitting ? loadingText : content}
    </button>
  )
}

export default CommonButton
