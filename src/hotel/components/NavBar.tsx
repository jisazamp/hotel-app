import { Dispatch, SetStateAction } from 'react'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import { useAppDispatch } from './../../store/hooks'
import { startSignOut } from './../../store/auth/thunks'

import MenuOutlined from '@mui/icons-material/MenuOutlined'
import LogOutOutlined from '@mui/icons-material/LogoutOutlined'

interface NavBarProps {
  drawerWidth: number
  openDrawer: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({ drawerWidth, openDrawer }: NavBarProps) => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(startSignOut())
  }

  return (
    <AppBar
      sx={{
        ml: { sm: `${drawerWidth}px` },
      }}
      position='fixed'
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          onClick={() => openDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          alignItems='center'
          container
          direction='row'
          justifyContent='space-between'
        >
          <Typography variant='h6' noWrap component='div'>
            HotelApp
          </Typography>

          <IconButton onClick={onLogout} color='inherit'>
            <LogOutOutlined />
            <Typography sx={{ fontSize: '1rem', ml: 1 }}>Salir</Typography>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
