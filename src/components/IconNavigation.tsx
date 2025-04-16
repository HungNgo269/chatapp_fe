import { SvgIconComponent } from '@mui/icons-material'

interface IconNavigationProps {
  size?: string
  IconSrc?: SvgIconComponent
  active?: boolean
  color?: string
  onClick?: () => void
  label?: string
}

const IconNavigation: React.FC<IconNavigationProps> = ({
  size = 'size-10',
  IconSrc,
  active = false,
  color,
  onClick,
  label
}) => {
  return (
    <div
      className={`flex justify-center items-center 
      ${active ? 'text-blue-600 border-b-2 border-blue-800 bg-blue-300' : 'text-gray-600 hover:bg-gray-300'}  `}
      onClick={onClick}
    >
      {IconSrc && <IconSrc className={`${size} ${active ? 'text-blue-600' : 'text-gray-500'}`} />}
    </div>
  )
}

export default IconNavigation
