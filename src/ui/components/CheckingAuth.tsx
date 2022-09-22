import { CircularProgress, Grid } from '@mui/material'

const CheckingAuth = () => {
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
        sx={{
          width: '100',
        }}
      >
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  )
}

export default CheckingAuth
