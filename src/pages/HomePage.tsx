import ChatContainer from '~/components/chat/ChatContainer'

interface HomePageProps {
  propName?: string
}

const HomePage: React.FC<HomePageProps> = ({ propName }) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Trang Chủ</h1>

      <div className='grid grid-cols-1 gap-6'>
        <section>
          <h2 className='text-xl font-semibold mb-4'>Chat Room</h2>
          <div className='h-[600px]'>
            <ChatContainer />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
