import { useState } from 'react'
import AuthLayout from '../layout/AuthLayout'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'

import MailOutline from '@mui/icons-material/MailOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Person from '@mui/icons-material/Person'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Google from '@mui/icons-material/Google'
import Header from '../components/Header'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debe contener un mínimo de 8 caracteres')
    .required('La contraseña es requerida'),
})

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <AuthLayout>
      <Header
        text='Inicio de sesión'
        icon={<Person sx={{ fontSize: '40px' }} />}
      />

      <Grid container>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              error={formik.touched.email && Boolean(formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              id='email'
              label='Correo electrónico'
              name='email'
              onChange={formik.handleChange}
              placeholder='john@mail.com'
              type='text'
              value={formik.values.email}
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              error={formik.touched.password && Boolean(formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              id='password'
              label='Contraseña'
              name='password'
              onChange={formik.handleChange}
              placeholder='******'
              type={showPassword === true ? 'text' : 'password'}
              value={formik.values.password}
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlined />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword === true ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid spacing={2} container sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button variant='contained' fullWidth>
                <Google sx={{ mr: 1 }} /> Google
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </AuthLayout>
  )
}

export default LoginPage
