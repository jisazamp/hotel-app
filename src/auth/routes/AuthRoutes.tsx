import { Navigate, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AuthRoutes
