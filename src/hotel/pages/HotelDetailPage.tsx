import HotelLayout from '../layout/HotelLayout'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store'

import NotFound from '../../ui/components/NotFound'

const HotelDetailPage = () => {
  return (
    <HotelLayout>
      <h1>Detalles</h1>
    </HotelLayout>
  )
}

export default HotelDetailPage
