import { IconButton } from '@mui/material'
import AddOutlined from '@mui/icons-material/AddOutlined'
import HotelLayout from './../layout/HotelLayout'
import { NoHotelsView, HotelView } from '../views'

const HotelPage = () => {
  return (
    <HotelLayout>
      <NoHotelsView />
      {/* <HotelView /> */}
      <IconButton
        size='large'
        sx={{
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
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
