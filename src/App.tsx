import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/queryClient'
import { useAuthStore } from './store/useAuthStore'
import NavbarLayout from './layouts/NavbarLayout'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log(authUser)
  if (isCheckingAuth && !authUser) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader className='size-10 animate-spin'></Loader>
      </div>
    )
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<NavbarLayout />}>
            <Route index element={authUser ? <HomePage /> : <Navigate to='/login'></Navigate>} />
          </Route>
          {/* <Route path='/settings' element={<SettingPage />} />
          <Route path='/profile' element={<ProfilePage />} /> */}
          <Route path='/login' element={!authUser ? <LoginPage></LoginPage> : <Navigate to='/login'></Navigate>} />
          <Route path='/signup' element={!authUser ? <SignUpPage></SignUpPage> : <Navigate to='/signup'></Navigate>} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
