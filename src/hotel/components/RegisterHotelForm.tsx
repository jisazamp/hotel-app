import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { registerHotelSchema } from '../models/RegisterHotel.model'
import styled from '@emotion/styled'
import { Button, Divider } from '@mui/material'

import { useAppDispatch } from '../../store/hooks'
import { startNewHotel } from '../../store/hotel/thunks'
import GeneralDetails from './GeneralDetails'
import { Hotel as HotelType } from '../../store/hotel'

import Header from '../../auth/components/Header'
import Hotel from '@mui/icons-material/Hotel'
import RoomDetails from './RoomDetails'

const FormContainer = styled.form`
  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
`

const RegisterHotelForm = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      country: '',
      description: '',
      id: null,
      imageUrls: null,
      locality: '',
      logo: null,
      rating: 0,
      room: {
        title: '',
        singleRoom: false,
        doubleRoom: false,
        queenRoom: false,
        singleRoomTotal: 0,
        doubleRoomTotal: 0,
        queenRoomTotal: 0,
        singleRoomAvailable: 0,
        doubleRoomAvailable: 0,
        queenRoomAvailable: 0,
      },
      rooms: [],
      title: '',
      type: '',
    },
    validationSchema: registerHotelSchema,
    onSubmit: (values) => {
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

      if (!values.room.singleRoom) values.room.singleRoomTotal = 0
      if (!values.room.doubleRoom) values.room.doubleRoomTotal = 0
      if (!values.room.queenRoom) values.room.queenRoomTotal = 0

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

      dispatch(startNewHotel(newHotel))
    },
  })

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Link style={{ textDecoration: 'none', marginBottom: '1rem' }} to='/'>
        <Button>Volver al inicio</Button>
      </Link>
      <Header
        text='Registro de nuevo hotel'
        icon={<Hotel sx={{ fontSize: '60px' }} />}
      />
      <Divider sx={{ mt: 2, mb: 3 }} />

      <GeneralDetails formik={formik} />

      <RoomDetails formik={formik} />

      <Button sx={{ mt: 4 }} type='submit' variant='contained' fullWidth>
        Registrar hotel
      </Button>
    </FormContainer>
  )
}

export default RegisterHotelForm
