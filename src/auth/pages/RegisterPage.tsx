import { Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'
import Person2 from '@mui/icons-material/Person2'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <Header text='Registrarse' icon={<Person2 sx={{ fontSize: '40px' }} />} />

      <RegisterForm />

      <Grid sx={{ mt: 2 }} container direction='row' justifyContent='end'>
        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
        <Link component={RouterLink} color='inherit' to='/auth/login'>
          Inicia sesión
        </Link>
      </Grid>
    </AuthLayout>
  )
}

export default RegisterPage
