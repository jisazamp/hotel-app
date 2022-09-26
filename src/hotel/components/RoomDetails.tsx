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

import RoomDetailsForm from './RoomDetailsForm'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Bed from '@mui/icons-material/Bed'

export type Room = {
  title: string
  singleRoom: boolean
  doubleRoom: boolean
  queenRoom: boolean
  singleRoomTotal: number | null
  doubleRoomTotal: number | null
  queenRoomTotal: number | null
  singleRoomAvailable: number | null
  doubleRoomAvailable: number | null
  queenRoomAvailable: number | null
}

const RoomDetails = ({ formik }: any) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)

  const onRoomDelete = (title: string) => {
    const deleteConfirmation = confirm(
      `¿Está seguro que desea eliminar la habitación ${title}?`
    )

    if (!deleteConfirmation) return

    const newRooms = formik.values.rooms.filter(
      (room: Room) => room.title !== title
    )
    formik.setFieldValue('rooms', newRooms)
  }

  const onRoomEdit = (room: Room) => {
    formik.setFieldValue('room', room)
    setIsFormVisible(true)
    setEditing(true)
  }

  const renderRoomCards = () => {
    if (formik.values.rooms.length === 0)
      return (
        <Typography sx={{ color: '#a9a9a9', textAlign: 'center', p: 1, mb: 2 }}>
          Aún no hay habitaciones registradas para este hotel
        </Typography>
      )

    return formik.values.rooms.map((room: any) => (
      <Card sx={{ mt: 1, border: '1px solid #f0f0f0' }} key={room.title}>
        <CardContent>
          <Typography>{room.title}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'end', backgroundColor: '#f0f0f0' }}>
          <Button onClick={() => onRoomDelete(room.title)} size='small'>
            Borrar
          </Button>
          <Button onClick={() => onRoomEdit(room)} size='small'>
            Editar
          </Button>
        </CardActions>
      </Card>
    ))
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
          Registra acá las habitaciones y acomodaciones disponibles en el hotel
        </Typography>
        {isFormVisible ? (
          <RoomDetailsForm
            editing={editing}
            formik={formik}
            setEditing={setEditing}
            setIsVisible={setIsFormVisible}
          />
        ) : (
          <>
            {renderRoomCards()}
            <Button
              onClick={() => setIsFormVisible(true)}
              fullWidth
              variant='outlined'
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
