import { Routes, Route, Navigate } from 'react-router-dom'
import HotelPage from '../pages/HotelPage'

const HotelRoutes = () => {
  return (
    <Routes>
      <Route path='/hotels' element={<HotelPage />} />
      <Route path='/*' element={<Navigate to='/hotels' />} />
    </Routes>
  )
}

export default HotelRoutes
