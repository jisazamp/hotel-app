import { ThemeProvider, CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme'

interface AppThemeProps {
  children?: JSX.Element | JSX.Element[]
}

const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
