import { useState } from 'react'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material'

const RoomDetailsForm = () => {
  const [roomInfo, setRoomInfo] = useState({
    singleRoom: false,
    doubleRoom: false,
    queenRoom: false,
    title: '',
  })

  return (
    <Grid container>
      <Typography>Acomodaciones disponibles</Typography>
      <Grid item xs={12}>
        <FormGroup
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <FormControlLabel control={<Checkbox />} label='Sencilla' />
          <FormControlLabel control={<Checkbox />} label='Doble' />
          <FormControlLabel control={<Checkbox />} label='Matrimonial' />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default RoomDetailsForm
