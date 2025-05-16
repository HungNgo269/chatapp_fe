import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/queryClient'
import { useAuthStore } from './store/useAuthStore'
import SideBarLayout from './layouts/SideBarLayout'
import { useEffect } from 'react'
import ChatPage from './pages/ChatPage'
function App() {
  const { authUser, checkAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  // import { Loader } from 'lucide-react'
  // if (isCheckingAuth && !authUser) {
  //   return (
  //     <div className='h-screen flex items-center justify-center'>
  //       <Loader className='size-10 animate-spin'></Loader>
  //     </div>
  //   )
  // }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<SideBarLayout />}>
            <Route index element={authUser ? <HomePage /> : <Navigate to='/login' />} />
          </Route>
          <Route path='channels/@me/:id' element={<SideBarLayout />}>
            <Route index element={authUser ? <ChatPage /> : <Navigate to='/login' />} />
          </Route>
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
          <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
