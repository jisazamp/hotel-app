import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
    </Routes>
  )
}

export default AppRouter
