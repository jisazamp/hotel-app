import { Dispatch, SetStateAction } from 'react'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import { useAppDispatch } from './../../store/hooks'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import LogOutOutlined from '@mui/icons-material/LogoutOutlined'
import { startSignOut } from './../../store/auth/thunks'

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
          <IconButton onClick={onLogout} color='error'>
            <LogOutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
