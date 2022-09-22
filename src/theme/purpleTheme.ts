import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#ffbe0b',
    },
    error: {
      main: red.A700,
    },
  },
})
