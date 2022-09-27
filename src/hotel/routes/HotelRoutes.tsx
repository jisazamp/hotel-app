import { Routes, Route, Navigate } from 'react-router-dom'
import HotelPage from '../pages/HotelPage'
import RegisterHotel from '../pages/RegisterHotel'
import HotelDetailPage from '../pages/HotelDetailPage'
import NotFound from '../../ui/components/NotFound'
import HotelEditPage from '../pages/HotelEditPage'

const HotelRoutes = () => {
  return (
    <Routes>
      <Route path='/hotels' element={<HotelPage />} />
      <Route path='/hotels/new' element={<RegisterHotel />} />
      <Route path='hotels/:id' element={<HotelDetailPage />} />
      <Route path='hotels/edit/:id' element={<HotelEditPage />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path='/*' element={<Navigate to='/hotels' />} />
    </Routes>
  )
}

export default HotelRoutes
