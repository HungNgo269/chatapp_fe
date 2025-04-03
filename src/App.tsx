import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage'
import ProfilePage from './pages/ProfilePage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/settings' element={<SettingPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
