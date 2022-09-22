import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

import TurnedInNot from '@mui/icons-material/TurnedInNot'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useAppSelector } from '../../store'

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
        variant='temporary'
        open={isOpen}
        onClose={handleSideBarClose}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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

        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={'Duis laboris sunt voluptate aliqua.'}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default SideBar
