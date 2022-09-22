import { Grid, Typography, Button, TextField } from '@mui/material'
import SaveOutlined from '@mui/icons-material/SaveOutlined'
import { ImageGallery } from '../components'

const HotelView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ marginBottom: 1 }}
    >
      <Grid item>
        <Typography
          textAlign={{ xs: 'center' }}
          fontSize={39}
          fontWeight='light'
        >
          18 de agosto, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button color='primary' sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          fullWidth
          label='Título'
          placeholder='Ingrese un título'
          sx={{ border: 'none', mb: 1 }}
          type='text'
          variant='filled'
        />

        <TextField
          fullWidth
          minRows={5}
          multiline
          placeholder='¿Qué sucedió en el día?'
          type='text'
          variant='filled'
        />
      </Grid>

      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  )
}

export default HotelView
