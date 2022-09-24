import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from '@mui/material'

import DefaultLogo from '../../assets/logo-placeholder.png'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Info from '@mui/icons-material/InfoOutlined'
import Upload from '@mui/icons-material/Upload'

const GeneralDetails = ({ formik }: any) => {
  const [countriesList, setCountriesList] = useState<string[] | null>(null)
  const [preview, setPreview] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const fetchCountries = async () => {
    const res = await axios.get('https://restcountries.com/v3.1/region/ame')
    const resultingCountriesList = res.data.map((country: any) => {
      const countryName = country.name.common
      const countryFlag = country.flag
      return { name: countryName, flag: countryFlag }
    })
    setCountriesList(resultingCountriesList)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    if (!selectedFile) return setPreview('')

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  return (
    <Accordion>
      <AccordionSummary
        aria-controls='panel1a-content'
        expandIcon={<ExpandMoreIcon />}
        id='panel1a-header'
      >
        <Typography
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Info sx={{ mr: 2, color: '#7209b7' }} />
          Detalles generales
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Ingresa aquí los detalles generales sobre el hotel que deseas
          registrar.
        </Typography>

        {/* Logo field start */}
        <Grid container direction={'column'} sx={{ mt: 2 }}>
          <Avatar
            src={preview ? preview : DefaultLogo}
            sx={{ margin: '1rem auto', height: '170px', width: '170px' }}
            variant='rounded'
          />

          <Button
            component='label'
            style={{ margin: '0 auto' }}
            variant='outlined'
          >
            <Upload sx={{ mr: 1 }} />
            Sube el logo
            <input
              accept='image/*'
              hidden
              id='logo'
              name='logo'
              type='file'
              onChange={(event) => {
                if (!event.target.files) return

                const file = event.target.files[0]
                formik.setFieldValue('logo', file)
                setSelectedFile(file)
              }}
            />
          </Button>
          {formik.errors.logo && formik.touched.logo && (
            <FormHelperText sx={{ color: 'red', textAlign: 'center' }}>
              {formik.errors.logo}
            </FormHelperText>
          )}
        </Grid>
        {/* Logo field end */}

        {/* title field start */}
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
        {/* title field end */}

        {/* description field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            error={formik.touched.description && !!formik.errors.description}
            fullWidth
            helperText={formik.touched.description && formik.errors.description}
            multiline
            rows={3}
            id='description'
            label='Descripción (opcional)'
            name='description'
            onChange={formik.handleChange}
            placeholder='Crystal water, white sand private beaches, wildlife surrounding you, watersports, tours & activities, delicious food and cocktails and the best beach'
            type='text'
            value={formik.values.description}
            variant='outlined'
          />
        </Grid>
        {/* description field end */}

        {/* Country field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <InputLabel id='country-label'>País*</InputLabel>
          <Select
            fullWidth
            id='country'
            labelId='country-label'
            label='País*'
            error={formik.errors.country && formik.touched.country}
            name='country'
            onChange={formik.handleChange}
            value={formik.values.country}
          >
            {countriesList?.map((country: any) => (
              <MenuItem key={country.name} value={country.name}>
                {country.flag} {country.name}
              </MenuItem>
            ))}
          </Select>
          {formik.errors.country && formik.touched.country && (
            <FormHelperText sx={{ color: 'red', pl: 2 }}>
              {formik.errors.country}
            </FormHelperText>
          )}
        </Grid>
        {/* Country field end */}

        {/* State field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            error={formik.touched.locality && !!formik.errors.locality}
            fullWidth
            helperText={formik.touched.locality && formik.errors.locality}
            id='locality'
            label='Estado/Provincia*'
            name='locality'
            onChange={formik.handleChange}
            placeholder='Córdoba'
            type='text'
            value={formik.values.locality}
            variant='outlined'
          />
        </Grid>
        {/* State field end */}

        {/* Category field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <InputLabel id='category-label'>Categoría*</InputLabel>
          <Select
            fullWidth
            id='type'
            labelId='demo-simple-select-label'
            label='Categoría*'
            error={formik.errors.type && formik.touched.type}
            name='type'
            onChange={formik.handleChange}
            value={formik.values.type}
          >
            <MenuItem value={3}>3 estrellas</MenuItem>
            <MenuItem value={4}>4 estrellas</MenuItem>
            <MenuItem value={5}>5 estrellas</MenuItem>
          </Select>
        </Grid>
        {/* Category field end */}

        {/* Rating field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <InputLabel>Calificación</InputLabel>
          <Rating
            defaultValue={2.5}
            id='rating'
            name='rating'
            precision={0.5}
            size='large'
            sx={{ width: '100%' }}
            value={formik.values.rating}
            onChange={(event: any) =>
              formik.setFieldValue('rating', +event.currentTarget.value)
            }
          />
        </Grid>
        {/* Rating field end */}
      </AccordionDetails>
    </Accordion>
  )
}

export default GeneralDetails
