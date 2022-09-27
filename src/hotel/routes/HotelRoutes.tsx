import { Routes, Route, Navigate } from 'react-router-dom'
import HotelPage from '../pages/HotelPage'
import RegisterHotel from '../pages/RegisterHotel'
import HotelDetailView from '../views/HotelDetailView'

const HotelRoutes = () => {
  return (
    <Routes>
      <Route path='/hotels' element={<HotelPage />} />
      <Route path='/hotels/new' element={<RegisterHotel />} />
      <Route path='hotels/:id' element={<HotelDetailView />} />
      <Route path='/*' element={<Navigate to='/hotels' />} />
    </Routes>
  )
}

export default HotelRoutes
