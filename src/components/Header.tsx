import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutlined'
import ShortsVideoIcon from '@mui/icons-material/OndemandVideoOutlined'
import GroupsIcon from '@mui/icons-material/GroupsOutlined'
import MarketIcon from '@mui/icons-material/StorefrontOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import IconNavigation from './IconNavigation'
import { useState } from 'react'
interface HeaderProps {
  propName?: string
}

const Header: React.FC<HeaderProps> = ({ propName }) => {
  const leftSideItem = [
    { id: 'Logo', icon: FacebookOutlinedIcon, label: 'Logo' },
    { id: 'Search', icon: SearchOutlinedIcon, label: 'Search' }
  ]
  const navigationItem = [
    { id: 'Home', icon: HomeIcon, label: 'Home' },
    { id: 'Friends', icon: PeopleIcon, label: 'Friends' },
    { id: 'ShortsVideo', icon: ShortsVideoIcon, label: 'ShortsVideo' },
    { id: 'Market', icon: MarketIcon, label: 'Market' },
    { id: 'Group', icon: GroupsIcon, label: 'Group' }
  ]
  const rightSideItem = [
    { id: 'Menu', icon: MenuOutlinedIcon, label: 'Menu' },
    { id: 'Noti', icon: NotificationsOutlinedIcon, label: 'Noti' },
    { id: 'Avatar', icon: AccountCircleOutlinedIcon, label: 'Avatar' }
  ]
  const [active, setActive] = useState('Home')
  return (
    <div className='h-(--max-height-header) w-full flex flex-row justify-between items-center '>
      <div className='flex flex-row justify-start items-center'>
        {leftSideItem.map((item) => (
          <IconNavigation
            key={item.id}
            IconSrc={item.icon}
            size='size-10'
            onClick={() => setActive(item.id)}
            active={active === item.id} //=> nếu item.id giống với active id thì nó sẽ active
            label={item.label}
          ></IconNavigation>
        ))}
      </div>
      <div className='flex flex-row justify-between items-center'>
        {navigationItem.map((item) => (
          <IconNavigation
            key={item.id}
            IconSrc={item.icon}
            size='size-10'
            onClick={() => setActive(item.id)}
            active={active === item.id}
            label={item.label}
          ></IconNavigation>
        ))}
      </div>
      <div className='flex flex-row items-center '>
        {rightSideItem.map((item) => (
          <IconNavigation
            key={item.id}
            IconSrc={item.icon}
            size='size-10'
            onClick={() => setActive(item.id)}
            active={active === item.id}
            label={item.label}
          ></IconNavigation>
        ))}
      </div>
    </div>
  )
}

export default Header
