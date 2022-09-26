interface UseRoomValidateProps {
  title: string
  singleRoom: boolean
  doubleRoom: boolean
  queenRoom: boolean
  singleRoomAvailable: number
  doubleRoomAvailable: number
  queenRoomAvailable: number
  singleRoomTotal: number
  doubleRoomTotal: number
  queenRoomTotal: number
}

export const validateRoomForm = (room: UseRoomValidateProps) => {
  let formErrors = {
    title: '',
    accomodations: '',
    numberOfRooms: '',
  }

  const {
    singleRoom,
    doubleRoom,
    queenRoom,
    singleRoomAvailable,
    singleRoomTotal,
    doubleRoomAvailable,
    doubleRoomTotal,
    queenRoomAvailable,
    queenRoomTotal,
  } = room

  if (!room.title)
    formErrors = {
      ...formErrors,
      title: 'Ingrese un nombre para la habitación',
    }
  if (!singleRoom && !doubleRoom && !queenRoom)
    formErrors = {
      ...formErrors,
      accomodations: 'Seleccione por lo menos un tipo de acomodación',
    }
  if (
    singleRoomAvailable > singleRoomTotal ||
    doubleRoomAvailable > doubleRoomTotal ||
    queenRoomAvailable > queenRoomTotal
  )
    formErrors = {
      ...formErrors,
      numberOfRooms:
        'La cantidad de habitaciones disponibles no puede ser mayor al número de habitaciones',
    }

  return { formErrors }
}
