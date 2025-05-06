interface NavigationButtonProps {
  width?: string
  height?: string
  IconSrc?: string
  active?: boolean
  shape?: string
  onClick?: () => void
  children?: React.ReactNode
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  width,
  height,
  IconSrc,
  active,
  onClick,
  children,
  shape
}) => {
  return (
    <div
      className={`flex flex-row justify-start items-center cursor-pointer w-full h-fit pr-4 p-2
    ${active ? 'text-(--interactive-hover)' : 'text-(--interactive-normal)'} ${shape}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default NavigationButton
