import { Hotel as HotelType } from '../../store/hotel'

interface SubmitHotelProps {
  formik: any
  values: any
}

export const submitHotelForm = ({ formik, values }: SubmitHotelProps) => {
  const {
    id,
    country,
    description,
    imageUrls,
    locality,
    logo,
    rating,
    rooms,
    title,
    type,
  } = formik.values

  if (!values.room.singleRoom) values.room.singleRoomTotal = ''
  if (!values.room.doubleRoom) values.room.doubleRoomTotal = ''
  if (!values.room.queenRoom) values.room.queenRoomTotal = ''

  const newHotel: HotelType = {
    id,
    country,
    description,
    imageUrls,
    locality,
    logo,
    rating,
    rooms,
    title,
    type,
  }

  return newHotel
}
