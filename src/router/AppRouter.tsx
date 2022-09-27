import { Routes, Route, Navigate } from 'react-router-dom'
import { CheckingAuth } from './../ui/components/'
import { useCheckAuth } from './../hooks/useCheckAuth'

import HotelRoutes from './../hotel/routes/HotelRoutes'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { useAppDispatch } from '../store'
import { useAppSelector } from '../store'
import { useEffect } from 'react'
import { startHotelFetch } from '../store/hotel/thunks'

const AppRouter = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.hotel)

  useEffect(() => {
    dispatch(startHotelFetch())
  }, [])

  const { status } = useCheckAuth()

  if (status === 'checking') return <CheckingAuth />

  if (isLoading) return <CheckingAuth />

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
