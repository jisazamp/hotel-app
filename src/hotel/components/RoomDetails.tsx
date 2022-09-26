import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Bed from '@mui/icons-material/Bed'
import RoomDetailsForm from './RoomDetailsForm'

const RoomDetails = ({ formik }: any) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)

  const onRoomDelete = (title: string) => {
    const newRooms = formik.values.rooms.filter(
      (room: any) => room.title !== title
    )
    formik.setFieldValue('rooms', newRooms)
  }

  const onRoomEdit = (room: any) => {
    formik.setFieldValue('room', room)
    setIsFormVisible(true)
    setEditing(true)
  }

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
        <Typography sx={{ mb: 4 }}>
          Registre acá las habitaciones y acomodaciones disponibles en el hotel
        </Typography>
        {isFormVisible ? (
          <RoomDetailsForm
            formik={formik}
            setIsVisible={setIsFormVisible}
            editing={editing}
            setEditing={setEditing}
          />
        ) : (
          <>
            {formik.values.rooms.map((room: any) => (
              <Card sx={{ backgroundColor: '#eaeaea', mt: 1 }} key={room.title}>
                <CardContent>
                  <Typography>{room.title}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'end' }}>
                  <Button
                    onClick={(title) => onRoomDelete(room.title)}
                    size='small'
                  >
                    Borrar
                  </Button>
                  <Button onClick={() => onRoomEdit(room)} size='small'>
                    Editar
                  </Button>
                </CardActions>
              </Card>
            ))}
            <Button
              onClick={() => setIsFormVisible(true)}
              fullWidth
              variant='text'
              sx={{ mt: 2 }}
            >
              Añadir nueva habitación
            </Button>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default RoomDetails
