import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'

interface InputSearchProps {
  placeHolder?: string
}

const InputSearch: React.FC<InputSearchProps> = ({ placeHolder = 'Search...' }) => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <div className='w-full flex flex-row px-4 relative'>
      <WestOutlinedIcon
        className={`${
          searchActive ? 'absolute left-2 top-2' : 'hidden'
        } rounded-r-2xl hover:fill-gray-500 cursor-pointer`}
        onClick={() => setSearchActive(false)}
      />
      <SearchOutlinedIcon className={`absolute left-2 top-2 ${searchActive ? 'hidden' : ''}`} />
      <input
        type='search'
        placeholder={placeHolder}
        className='w-full p-1.5 pl-10'
        onClick={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
      />
    </div>
  )
}

export default InputSearch
