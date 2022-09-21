import { useState } from 'react'
import AuthLayout from '../layout/AuthLayout'
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import MailOutline from '@mui/icons-material/MailOutline'
import LockOutlined from '@mui/icons-material/LockOutlined'
import Person from '@mui/icons-material/Person'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <AuthLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Header */}
        <Person sx={{ fontSize: '40px' }} />
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          Inicio de sesión
        </Typography>
      </Box>
      <FormControl variant='standard'>
        <Grid container>
          {/* Mail input */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Correo electrónico'
              placeholder='john@mail.com'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
              type='text'
            />
          </Grid>
          {/* Mail input end */}

          {/* Password input */}
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label='Contraseña'
              placeholder='******'
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
              variant='outlined'
              type={showPassword === true ? 'text' : 'password'}
            />
          </Grid>
          {/* Password input end */}

          <Grid xs={12} sx={{ mt: 2 }}>
            <Button variant='contained' fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </AuthLayout>
  )
}

export default LoginPage
