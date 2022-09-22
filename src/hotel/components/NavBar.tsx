import { Dispatch, SetStateAction } from 'react'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import LogOutOutlined from '@mui/icons-material/LogoutOutlined'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'

interface NavBarProps {
  drawerWidth: number
  openDrawer: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({ drawerWidth, openDrawer }: NavBarProps) => {
  return (
    <AppBar
      sx={{
        ml: { sm: `${drawerWidth}px` },
      }}
      position='fixed'
    >
      <Toolbar>
        <IconButton
          onClick={() => openDrawer(true)}
          color='inherit'
          edge='start'
          sx={{ mr: 2 }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h6' noWrap component='div'>
            HotelApp
          </Typography>
          <IconButton color='error'>
            <LogOutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
