import { useState } from 'react'
import Button from '~/components/Button'
import ListMessage from '~/components/Sidebar/ListMessage'

interface HomePageProps {
  propName?: string
}

const HomePage: React.FC<HomePageProps> = ({ propName }) => {
  const [activeButton, setActiveButton] = useState<string>('online')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleButtonClick = (filter: string) => {
    setActiveButton(filter)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='flex flex-col justify-start items-start gap-4 rounded p-4 '>
      <div className='flex flex-row justify-start items-center gap-4 rounded'>
        <span className='text-lg font-semibold'>Bạn bè</span>
        <Button active={activeButton === 'online'} onClick={() => handleButtonClick('online')}>
          Trực tuyến
        </Button>
        <Button active={activeButton === 'all'} onClick={() => handleButtonClick('all')}>
          Tất cả
        </Button>
        <Button active={activeButton === 'addFriend'} onClick={() => handleButtonClick('addFriend')}>
          Thêm bạn
        </Button>
      </div>
      <input
        type='search'
        placeholder='Tìm kiếm bạn bè...'
        value={searchQuery}
        onChange={handleSearchChange}
        className='w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
      />
      <div className='w-full'>
        {activeButton === 'online' && (
          <div className=''>
            <h3 className='text-gray-500 text-sm font-medium mx-4 my-4'>
              Bạn bè trực tuyến - {searchQuery ? 'Đang tìm kiếm' : '??'}
            </h3>
            <ListMessage filter='online' searchQuery={searchQuery} />
          </div>
        )}
        {activeButton === 'all' && (
          <div className=''>
            <h3 className='text-gray-500 text-sm font-medium mx-4 my-4'>
              Tất cả bạn bè - {searchQuery ? 'Đang tìm kiếm' : '??'}
            </h3>
            <ListMessage filter='all' searchQuery={searchQuery} />
          </div>
        )}
        {activeButton === 'addFriend' && (
          <div className=''>
            <h3 className='text-gray-500 text-sm font-medium mx-4 my-4'>Thêm bạn mới</h3>
            <p className='text-gray-600'>Chức năng thêm bạn đang phát triển...</p>
            {/* Có thể thêm form hoặc logic thêm bạn ở đây */}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
