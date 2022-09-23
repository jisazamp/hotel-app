import { Grid, Typography } from '@mui/material'
import HotelOutlined from '@mui/icons-material/HotelOutlined'

const NoHotelsView = () => {
  return (
    <>
      <Grid
        alignItems='center'
        container
        direction='column'
        justifyContent='center'
        spacing={0}
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: 2,
          minHeight: 'calc(100vh - 110px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Grid item xs={12}>
          <HotelOutlined sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid sx={{ padding: '0 1rem', textAlign: 'center' }} item xs={12}>
          <Typography color='white' variant='h5'>
            Selecciona o crea un hotel
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default NoHotelsView
