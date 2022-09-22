import { useState, useMemo } from 'react'
import {
  Alert,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { registerSchema } from '../models/RegisterForm.model'
import PersonOutline from '@mui/icons-material/PersonOutline'
import MailOutline from '@mui/icons-material/MailOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const { status, errorMessage } = useAppSelector((state) => state.auth)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const { email, password, firstName, lastName } = values
      dispatch(
        startCreatingUserWithEmailPassword({
          email,
          password,
          firstName,
          lastName,
        })
      )
    },
  })

  return (
    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
      <Grid item xs={12} sx={{ mt: 2 }}>
        {/* FirstName field start */}
        <TextField
          error={formik.touched.firstName && !!formik.errors.firstName}
          fullWidth
          helperText={formik.touched.firstName && formik.errors.firstName}
          id='firstName'
          label='Nombres'
          name='firstName'
          onChange={formik.handleChange}
          placeholder='John Emerit'
          type='text'
          value={formik.values.firstName}
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonOutline />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* FirstName field end */}

      {/* LastName field start */}
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          error={formik.touched.lastName && !!formik.errors.lastName}
          fullWidth
          helperText={formik.touched.lastName && formik.errors.lastName}
          id='lastName'
          label='Apellidos'
          name='lastName'
          onChange={formik.handleChange}
          placeholder='Doe Derp'
          type='text'
          value={formik.values.lastName}
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonOutline />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* Lastname field end */}

      {/* Email field start */}
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          error={formik.touched.email && !!formik.errors.email}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          id='email'
          label='Correo electrónico'
          name='email'
          onChange={formik.handleChange}
          placeholder='johndoe@mail.com'
          type='email'
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
      {/* Email field end */}

      {/* ConfirmEmail field start */}
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          error={formik.touched.confirmEmail && !!formik.errors.confirmEmail}
          fullWidth
          helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
          id='confirmEmail'
          label='Confirmar correo electrónico'
          name='confirmEmail'
          onChange={formik.handleChange}
          placeholder='johndoe@mail.com'
          type='email'
          value={formik.values.confirmEmail}
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
      {/* ConfirmEmail field end */}

      {/* Password field start */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <TextField
          error={formik.touched.password && !!formik.errors.password}
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
      {/* Password field end */}

      {/* ConfirmPassword field start */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <TextField
          error={
            formik.touched.confirmPassword && !!formik.errors.confirmPassword
          }
          fullWidth
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          id='confirmPassword'
          label='Confirmar contraseña'
          name='confirmPassword'
          onChange={formik.handleChange}
          placeholder='******'
          type={showPassword === true ? 'text' : 'password'}
          value={formik.values.confirmPassword}
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
      {/* ConfirmPassword field end */}

      {errorMessage && (
        <Alert sx={{ mt: 2, mb: 2 }} severity='error'>
          {errorMessage}
        </Alert>
      )}

      <Grid spacing={2} container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Button
            disabled={isCheckingAuthentication}
            fullWidth
            type='submit'
            variant='contained'
          >
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default RegisterForm
