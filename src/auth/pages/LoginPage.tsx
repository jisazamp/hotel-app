import { Grid, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '@mui/icons-material/Login'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <AuthLayout>
      <Header
        text='Iniciar sesión'
        icon={<Login sx={{ fontSize: '40px' }} />}
      />

      <Grid container>
        <LoginForm />

        <Grid sx={{ mt: 2 }} container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      </Grid>
    </AuthLayout>
  )
}

export default LoginPage
