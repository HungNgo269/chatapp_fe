import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/queryClient'
import { useAuthStore } from './store/useAuthStore'
import NavbarLayout from './layouts/NavbarLayout'

function App() {
  const { authUser } = useAuthStore()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<NavbarLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          {/* <Route path='/settings' element={<SettingPage />} />
          <Route path='/profile' element={<ProfilePage />} /> */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
