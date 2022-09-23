import styled from '@emotion/styled'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { registerHotelSchema } from '../models/RegisterHotel.model'
import { useFormik } from 'formik'
import Header from '../../auth/components/Header'
import Hotel from '@mui/icons-material/Hotel'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Info from '@mui/icons-material/InfoOutlined'
import Bed from '@mui/icons-material/Bed'

const FormContainer = styled.form`
  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
`

const RegisterHotelForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: registerHotelSchema,
    onSubmit: (values) => {
      console.log('hola')
    },
  })

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Header
        text='Registro de nuevo hotel'
        icon={<Hotel sx={{ fontSize: '60px' }} />}
      />
      <Divider sx={{ mt: 2, mb: 3 }} />

      {/* General details start */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Info sx={{ mr: 2 }} />
            Detalles generales
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              error={formik.touched.title && !!formik.errors.title}
              fullWidth
              helperText={formik.touched.title && formik.errors.title}
              id='title'
              label='Nombre*'
              name='title'
              onChange={formik.handleChange}
              placeholder='Mística Hostel'
              type='text'
              value={formik.values.title}
              variant='outlined'
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              error={formik.touched.description && !!formik.errors.description}
              fullWidth
              helperText={
                formik.touched.description && formik.errors.description
              }
              multiline
              rows={2}
              id='description'
              label='Descripción (opcional)'
              name='description'
              onChange={formik.handleChange}
              placeholder='Mística Hostel'
              type='text'
              value={formik.values.description}
              variant='outlined'
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* General Details End */}

      {/* Rooms info start */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Bed sx={{ mr: 2 }} />
            Habitaciones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Rooms info end */}

      <Button sx={{ mt: 4 }} type='submit' variant='contained' fullWidth>
        Añadir habitación
      </Button>
    </FormContainer>
  )
}

export default RegisterHotelForm
