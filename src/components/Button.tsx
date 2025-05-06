interface ButtonProps {
  children?: React.ReactNode
  bg?: string
  textColor?: string
  active?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, bg = 'bg-gray-200', textColor = 'text-black', active, onClick }) => {
  return (
    <button
      className={`flex justify-center items-center text-base px-4 py-2 rounded-md transition-colors
        ${active ? 'bg-blue-500 text-white' : `${bg} ${textColor}`}
        hover:bg-blue-400 hover:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-300`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
