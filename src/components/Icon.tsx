// Icon.tsx
import React from 'react'

interface IconProps {
  size?: string
  IconSrc?: string
  active?: boolean
  color?: string
  onClick?: () => void
  label?: string
}

const Icon: React.FC<IconProps> = ({ size = 'size-4', IconSrc, active = false, color, onClick, label }) => {
  return (
    <div className={`flex justify-center items-center cursor-pointer`} onClick={onClick} aria-label={label}>
      {IconSrc && <img src={IconSrc} className={`${size}`} alt={label || 'icon'} />}
    </div>
  )
}

export default Icon
