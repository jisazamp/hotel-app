import { Typography, Grid } from '@mui/material'

interface AuthLayoutProps {
  children?: JSX.Element | JSX.Element[] | string
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Grid
      alignItems='center'
      container
      direction='column'
      justifyContent='center'
      spacing={0}
      sx={{
        backgroundColor: 'primary.main',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          padding: 3,
          width: { md: 450 },
        }}
      >
        {children}
      </Grid>
    </Grid>
  )
}

export default AuthLayout
