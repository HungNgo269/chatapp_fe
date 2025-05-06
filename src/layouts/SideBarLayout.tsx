import { Outlet } from 'react-router-dom'
import Header from '~/components/Header'
import SideBar from '~/components/Sidebar/SideBar'
import SideBarGroup from '~/components/Sidebar/SideBarGroup'

const SideBarLayout = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col bg-(--background) text-(--text-normal)  text-base/normal '>
      <Header></Header>
      <div className='flex justify-start relative h-(--max-height-content) '>
        <SideBarGroup></SideBarGroup>
        <SideBar></SideBar>
        <main className='w-full h-screen overflow-x-hidden overflow-y-scroll'>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}
export default SideBarLayout
