import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
  Rating,
  Link,
  Button,
  CardActions,
  IconButton,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Hotel, startHotelDeleteById } from '../../store/hotel'
import { useAppDispatch } from '../../store'
import { useNavigate } from 'react-router-dom'

import FavoriteIcon from '@mui/icons-material/Favorite'
import DefaultLogo from '../../assets/logo-placeholder.png'

interface HotelCardProps {
  hotel: Hotel
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <Grid key={hotel.id} item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          position: 'relative',
          backgroundColor: '#eae2b7',
          color: 'black',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
        }}
      >
        <CardHeader
          avatar={
            <Avatar src={DefaultLogo} sx={{ height: '80px', width: '80px' }} />
          }
          title={hotel.country}
          titleTypographyProps={{ color: '#003049', fontWeight: '900' }}
          subheader={`Hotel ${hotel.type} estrellas`}
          subheaderTypographyProps={{ fontWeight: '700' }}
        />

        <Divider />

        <CardContent>
          <Grid container alignItems='center'>
            {/* Hotel title, rating and locality start */}
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: '#003049',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >{`${hotel.title}`}</Typography>

              <Grid
                item
                xs={12}
                sx={{
                  alignItems: { xs: 'center', lg: 'center' },
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  justifyContent: { xs: 'center', lg: 'space-between' },
                  pl: 1,
                  pr: 1,
                }}
              >
                <Typography sx={{ fontWeight: '700' }}>
                  {hotel.locality}
                </Typography>
                <Rating readOnly precision={0.5} value={hotel.rating} />
              </Grid>
            </Grid>
            {/* Hotel title, rating and locality end */}

            {/* Hotel description start */}
            <Grid item sx={{ mt: 2 }}>
              <Typography>{hotel.description}</Typography>
            </Grid>
            {/* Hotel description end */}

            {/* Hotel details button start */}
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Link
                sx={{ textDecoration: 'none' }}
                component={RouterLink}
                to={`/hotels/${hotel.id}`}
              >
                <Button fullWidth variant='outlined'>
                  Ver detalles
                </Button>
              </Link>
            </Grid>
            {/* Hotel details button end */}
          </Grid>
        </CardContent>

        <Divider />

        <CardActions
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <Grid item>
            <Button
              onClick={() => navigate(`/hotels/edit/${hotel.id}`)}
              variant='text'
              sx={{ mr: 1 }}
            >
              Editar
            </Button>
            <Button
              onClick={() => {
                const flag = confirm(
                  `¿Está seguro que desea eliminar el hotel ${hotel.title}?`
                )
                hotel.id && flag && dispatch(startHotelDeleteById(hotel.id))
              }}
              variant='text'
            >
              Borrar
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default HotelCard
