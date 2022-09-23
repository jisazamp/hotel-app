import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'

import { NavBar, SideBar } from '../components'

interface HotelLayoutProps {
  children?: JSX.Element | JSX.Element[]
}

const drawerWidth = 300

const HotelLayout = ({ children }: HotelLayoutProps) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <Box className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth} openDrawer={setIsDrawerVisible} />

      <SideBar
        drawerWidth={drawerWidth}
        isOpen={isDrawerVisible}
        setIsOpen={setIsDrawerVisible}
      />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default HotelLayout
