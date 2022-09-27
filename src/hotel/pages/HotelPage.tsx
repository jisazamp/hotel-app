import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NoHotelsView } from '../views'
import { useAppSelector } from '../../store'

import AddOutlined from '@mui/icons-material/AddOutlined'
import HotelLayout from './../layout/HotelLayout'
import HotelView from '../views/HotelView'

const HotelPage = () => {
  const navigate = useNavigate()
  const { hotels } = useAppSelector((state) => state.hotel)

  return (
    <HotelLayout>
      {hotels.length > 0 ? <HotelView /> : <NoHotelsView />}
      <IconButton
        onClick={() => navigate('/hotels/new')}
        size='large'
        sx={{
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9,
            transform: 'scale(1.1)',
          },
          transition: 'all 200ms ease-in',
          backgroundColor: 'error.main',
          bottom: { xs: 10, md: 10 },
          color: 'white',
          position: 'fixed',
          right: { xs: 5, md: 10 },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </HotelLayout>
  )
}

export default HotelPage
