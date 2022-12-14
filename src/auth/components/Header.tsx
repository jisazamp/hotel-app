import { Box, Typography } from '@mui/material'

interface HeaderProps {
  text: string
  icon?: JSX.Element
}

const Header = ({ text, icon }: HeaderProps) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {icon && icon}
      <Typography variant='h5' sx={{ textAlign: 'center' }}>
        {text}
      </Typography>
    </Box>
  )
}

export default Header
