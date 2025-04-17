import { Outlet } from 'react-router-dom'
import Header from '~/components/Header'
import SideBar from '~/components/Sidebar/SideBar'

const SideBarLayout = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      <Header></Header>
      <div className='flex justify-start relative h-(--max-height-content) '>
        <SideBar></SideBar>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}
export default SideBarLayout
