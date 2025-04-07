import { Outlet } from 'react-router-dom'
import NavBar from '~/components/NavBar'

const NavbarLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
export default NavbarLayout
