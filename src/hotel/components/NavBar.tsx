import { Dispatch, SetStateAction } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppDispatch } from './../../store/hooks'
import { startSignOut } from './../../store/auth/thunks'
import {
  AppBar,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'

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
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          alignItems='center'
          container
          direction='row'
          justifyContent='space-between'
        >
          <Link component={RouterLink} to='/'>
            <IconButton sx={{ color: 'white', fontSize: '1.3rem' }}>
              HotelApp
            </IconButton>
          </Link>

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
