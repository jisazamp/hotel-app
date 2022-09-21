import { Grid } from '@mui/material'
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
      </Grid>
    </AuthLayout>
  )
}

export default LoginPage
