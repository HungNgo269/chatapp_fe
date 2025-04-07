import { Link } from 'react-router-dom'

interface UnderlineLinkProps {
  to?: string
  label?: string
  bold?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg'
  color?: 'blue' | 'black'
}

const UnderlineLink = ({ to = '/', label, bold = false, size = 'base', color = 'black' }: UnderlineLinkProps) => {
  const fontWeight = bold ? 'font-bold' : 'font-normal'
  const textSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  }[size]
  //object property access. => lấy property trong object tương ứng với key
  const textcolor = {
    black: 'text-black',
    blue: 'text-blue-800'
  }[color]
  return (
    <Link to={to} className={`hover:underline ${fontWeight} ${textSize} ${textcolor}`}>
      {label}
    </Link>
  )
}

export default UnderlineLink
