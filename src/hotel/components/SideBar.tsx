import { Dispatch, SetStateAction } from 'react'
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

import { useAppSelector } from '../../store'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

interface SideBarProps {
  isOpen: boolean
  drawerWidth: number
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ isOpen, drawerWidth, setIsOpen }: SideBarProps) => {
  const handleSideBarClose = () => {
    setIsOpen(false)
  }

  const { displayName } = useAppSelector((state) => state.auth)

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        onClose={handleSideBarClose}
        open={isOpen}
        variant='temporary'
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' noWrap component='div'>
            {displayName}
          </Typography>

          <IconButton onClick={handleSideBarClose}>
            <KeyboardArrowLeftIcon fontSize='large' />
          </IconButton>
        </Toolbar>

        <Divider />

        <Grid
          container
          sx={{
            flexDirection: 'column',
            p: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12}>
            <Typography>
              Acá podría ir más contenido... El propósito de este SideBar es el
              de asegurarme que la sesión de usuario se está guardando
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  )
}

export default SideBar
