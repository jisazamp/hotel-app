import { Grid } from '@mui/material'
import { useAppSelector } from '../../store'

import HotelCard from '../components/HotelCard'

const HotelView = () => {
  const { hotels } = useAppSelector((state) => state.hotel)

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      spacing={2}
      sx={{
        marginBottom: 1,
        padding: { xs: 1, md: 2, lg: 3 },
      }}
    >
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </Grid>
  )
}

export default HotelView
