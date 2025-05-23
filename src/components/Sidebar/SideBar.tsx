import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconNavigation from '../IconNavigation'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InputSearch from '../InputSearch'
import ListMessage from './ListMessage'

interface SideBarProps {
  propName?: string
}
const SideBar: React.FC<SideBarProps> = ({ propName }) => {
  return (
    <div
      className='flex flex-col justify-start w-24 md:w-[360px]  border-r-1
     border-(--color-border) text-(--) '
    >
      <div className='flex flex-row justify-between items-center'>
        <h1>Đoạn chat</h1>
        <div className='flex flex-row justify-between items-center'>
          <IconNavigation IconSrc={MoreHorizIcon}></IconNavigation>
          <IconNavigation IconSrc={EditOutlinedIcon}></IconNavigation>
        </div>
      </div>
      <InputSearch></InputSearch>
      <div>
        <span>Tin nhắn trực tiếp</span>
      </div>
      <ListMessage></ListMessage>
    </div>
  )
}

export default SideBar
