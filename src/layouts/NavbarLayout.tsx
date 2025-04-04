import { Outlet } from 'react-router-dom'
import NavBar from '~/components/NavBar'

export default function NavbarLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
