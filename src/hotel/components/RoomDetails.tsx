import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Bed from '@mui/icons-material/Bed'
import { Room } from '../../store/hotel'
import RoomDetailsForm from './RoomDetailsForm'

const RoomDetails = ({ formik }: any) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Bed sx={{ mr: 2 }} />
          Habitaciones
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RoomDetailsForm />
        <Button fullWidth onClick={() => setIsFormVisible(true)} variant='text'>
          Añadir nueva habitación
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default RoomDetails
