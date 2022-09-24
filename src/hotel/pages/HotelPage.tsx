import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddOutlined from '@mui/icons-material/AddOutlined'
import HotelLayout from './../layout/HotelLayout'
import { NoHotelsView } from '../views'

const HotelPage = () => {
  const navigate = useNavigate()

  return (
    <HotelLayout>
      <NoHotelsView />
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
