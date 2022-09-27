import RegisterHotelForm from '../components/RegisterHotelForm'
import HotelLayout from '../layout/HotelLayout'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store'
import NotFound from '../../ui/components/NotFound'

const HotelEditPage = () => {
  const { id } = useParams()
  const { hotels } = useAppSelector((state) => state.hotel)

  const hotelToEdit = hotels.find((hotel) => hotel.id === id)

  if (!hotelToEdit) return <NotFound />

  return (
    <HotelLayout>
      <RegisterHotelForm title='Editar hotel' initValues={hotelToEdit} />
    </HotelLayout>
  )
}

export default HotelEditPage
