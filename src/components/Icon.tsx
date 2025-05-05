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
      {IconSrc && (
        <img
          src={IconSrc}
          className={`${size}`}
          style={{
            filter: active
              ? 'invert(var(--icon-default, 45%)) sepia(75%) saturate(1000%) hue-rotate(200deg) brightness(100%)'
              : 'invert(var(--icon-hover, 60%)) sepia(10%) saturate(300%) hue-rotate(180deg)'
          }}
          alt={label || 'icon'}
        />
      )}
    </div>
  )
}

export default Icon
