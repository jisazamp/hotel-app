import { Grid } from '@mui/material'
import AuthLayout from '../layout/AuthLayout'
import Person from '@mui/icons-material/Person'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <AuthLayout>
      <Header
        text='Inicio de sesión'
        icon={<Person sx={{ fontSize: '40px' }} />}
      />

      <Grid container>
        <LoginForm />
      </Grid>
    </AuthLayout>
  )
}

export default LoginPage
