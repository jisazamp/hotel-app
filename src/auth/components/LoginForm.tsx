import { useMemo, useState } from 'react'
import { useFormik } from 'formik'
import {
  Alert,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'

import {
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from '../../store/auth/thunks'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { validationSchema } from '../models/LoginForm.model'

import MailOutline from '@mui/icons-material/MailOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Google from '@mui/icons-material/Google'

const LoginForm = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values
      dispatch(startLoginWithEmailAndPassword({ email, password }))
    },
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  return (
    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
      <Grid item xs={12} sx={{ mt: 2 }}>
        {/* email field start */}
        <TextField
          error={formik.touched.email && !!formik.errors.email}
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
      {/* email field end */}

      {/* password field start */}
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
      {/* password field end */}

      {errorMessage && (
        <Alert sx={{ mt: 2 }} severity='error'>
          {errorMessage}
        </Alert>
      )}

      <Grid spacing={2} container sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Button
            disabled={isAuthenticating}
            fullWidth
            type='submit'
            variant='contained'
          >
            Iniciar sesión
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            disabled={isAuthenticating}
            fullWidth
            onClick={() => dispatch(startGoogleSignIn())}
            variant='contained'
          >
            <Google sx={{ mr: 1 }} /> Iniciar con Google
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm
