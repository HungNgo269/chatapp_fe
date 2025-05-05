import { Outlet } from 'react-router-dom'
import Header from '~/components/Header'
import SideBarGroup from '~/components/Sidebar/SideBarGroup'

const SideBarLayout = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col bg-(--background) text-(--text-normal)'>
      <Header></Header>
      <div className='flex justify-start relative h-(--max-height-content) '>
        <SideBarGroup></SideBarGroup>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}
export default SideBarLayout
