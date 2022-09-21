import { useState } from 'react'
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { validationSchema } from '../models/LoginForm.model'

import MailOutline from '@mui/icons-material/MailOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Google from '@mui/icons-material/Google'

const LoginForm = () => {
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
    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
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
                  {showPassword === true ? <VisibilityOff /> : <Visibility />}
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
  )
}

export default LoginForm
