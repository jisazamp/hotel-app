import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../store'
import { CheckingAuth } from './../ui/components/'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { useAppDispatch } from './../store/hooks'
import { logout, login } from '../store/auth/'
import HotelRoutes from './../hotel/routes/HotelRoutes'
import AuthRoutes from '../auth/routes/AuthRoutes'

const AppRouter = () => {
  const { status } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(null))

      const { photoURL, displayName, email, uid } = user
      dispatch(login({ photoURL, displayName, email, uid }))
    })
  }, [])

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<HotelRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AppRouter
