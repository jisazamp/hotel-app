import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components'
import { useState } from 'react'

interface HotelLayoutProps {
  children?: JSX.Element | JSX.Element[]
}

const drawerWidth = 300

const HotelLayout = ({ children }: HotelLayoutProps) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <Box className='animate__animated animate__fadeIn animate__faster'>
      {/* Navbar */}
      <NavBar openDrawer={setIsDrawerVisible} drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <SideBar
        isOpen={isDrawerVisible}
        setIsOpen={setIsDrawerVisible}
        drawerWidth={drawerWidth}
      />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  )
}

export default HotelLayout
