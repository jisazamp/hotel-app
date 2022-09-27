import { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Divider } from '@mui/material'
import styled from '@emotion/styled'

import Header from '../../auth/components/Header'
import GeneralDetails from './GeneralDetails'
import RoomDetails from './RoomDetails'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { startNewHotel } from '../../store/hotel/thunks'
import { registerHotelSchema } from '../models/RegisterHotel.model'
import { initialValues } from '../models/RegisterHotelForm.model'

import Hotel from '@mui/icons-material/Hotel'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined'
import { submitHotelForm } from '../utils/submitHotelForm'
import { redirectUser } from '../../store/hotel'

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
  const navigate = useNavigate()
  const { isSaving, canRedirect } = useAppSelector((state) => state.hotel)

  const formik: any = useFormik({
    initialValues,
    validationSchema: registerHotelSchema,
    onSubmit: (values) => {
      const newHotel = submitHotelForm({ formik, values })
      dispatch(startNewHotel(newHotel))
    },
  })

  useEffect(() => {
    if (!canRedirect) return

    navigate('/')
    dispatch(redirectUser(false))
  }, [canRedirect])

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Link style={{ textDecoration: 'none', marginBottom: '1rem' }} to='/'>
        <Button sx={{ mb: 2 }} variant='outlined'>
          <ArrowLeftOutlined /> Ir al inicio
        </Button>
      </Link>
      <Header
        text='Registro de nuevo hotel'
        icon={<Hotel sx={{ fontSize: '60px' }} />}
      />
      <Divider sx={{ mt: 2, mb: 3 }} />

      <GeneralDetails formik={formik} />

      <RoomDetails formik={formik} />

      <Button
        disabled={isSaving}
        sx={{ mt: 4 }}
        type='submit'
        variant='contained'
        fullWidth
      >
        {isSaving ? 'Guardando...' : 'Registrar hotel'}
      </Button>
    </FormContainer>
  )
}

export default RegisterHotelForm
