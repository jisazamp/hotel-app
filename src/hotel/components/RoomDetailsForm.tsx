import { useState } from 'react'
import { validateRoomForm } from '../utils/validateRoomForm'
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

const accomodations = [
  { prop: 'singleRoom', label: 'Sencilla' },
  { prop: 'doubleRoom', label: 'Doble' },
  { prop: 'queenRoom', label: 'Matrimonial' },
]

const RoomDetailsForm = ({
  formik,
  setIsVisible,
  editing,
  setEditing,
}: any) => {
  const [errors, setErrors] = useState({
    title: '',
    accomodations: '',
    numberOfRooms: '',
  })

  const handleRoomAdd = () => {
    const { formErrors } = validateRoomForm(formik.values.room)
    setErrors(formErrors)

    if (
      formErrors.title ||
      formErrors.accomodations ||
      formErrors.numberOfRooms
    )
      return

    if (editing) {
      const newRooms = formik.values.rooms.map((room: any) =>
        room.id === formik.values.room.id ? formik.values.room : room
      )
      formik.setFieldValue('rooms', newRooms)
      formik.setFieldValue('room', {
        title: '',
        singleRoom: false,
        doubleRoom: false,
        queenRoom: false,
        singleRoomTotal: 0,
        doubleRoomTotal: 0,
        queenRoomTotal: 0,
        singleRoomAvailable: 0,
        doubleRoomAvailable: 0,
        queenRoomAvailable: 0,
      })
      setIsVisible(false)
      setEditing(false)
      return
    }

    formik.values.room.id = Date.now()
    formik.setFieldValue('rooms', [...formik.values.rooms, formik.values.room])

    formik.setFieldValue('room', {
      title: '',
      singleRoom: false,
      doubleRoom: false,
      queenRoom: false,
      singleRoomTotal: 0,
      doubleRoomTotal: 0,
      queenRoomTotal: 0,
      singleRoomAvailable: 0,
      doubleRoomAvailable: 0,
      queenRoomAvailable: 0,
    })
    setIsVisible(false)
    setEditing(false)
  }

  return (
    <div>
      <Grid container>
        {/* Room name field start */}
        <Grid item xs={12}>
          <TextField
            error={!!errors.title}
            fullWidth
            helperText={errors.title}
            id='title'
            label='Nombre de la  habitación*'
            name='title'
            placeholder='Beach Club'
            type='text'
            value={formik.values.room.title}
            variant='outlined'
            onChange={(event: any) =>
              formik.setFieldValue('room', {
                ...formik.values.room,
                title: event.target.value,
              })
            }
          />
        </Grid>
        {/* Room name field end */}

        {/* Accomodations available field start */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography
            sx={{ color: errors.accomodations ? 'error.main' : 'inherit' }}
          >
            Acomodaciones disponibles*
          </Typography>
          {errors.accomodations && (
            <FormHelperText sx={{ color: 'error.main' }}>
              {errors.accomodations}
            </FormHelperText>
          )}
          <FormGroup
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { md: 'center' },
            }}
          >
            {accomodations.map((item) => (
              <FormControlLabel
                key={item.prop}
                checked={formik.values.room[item.prop]}
                control={<Checkbox />}
                label={item.label}
                value={formik.values.room[item.prop]}
                onChange={() =>
                  formik.setFieldValue('room', {
                    ...formik.values.room,
                    [item.prop]: !formik.values.room[item.prop],
                  })
                }
              />
            ))}
          </FormGroup>
        </Grid>
        {/* Accomodations available field end */}

        {/* Total accomodations field start */}
        <Typography sx={{ color: errors.numberOfRooms && 'error.main' }}>
          Total de habitaciones por acomodación
        </Typography>
        <Grid
          item
          xs={12}
          sx={{
            mt: 2,
            mb: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          {accomodations.map((item) => (
            <TextField
              disabled={!formik.values.room[item.prop]}
              fullWidth
              key={item.prop}
              label={`# total ${item.label.toLowerCase()}`}
              type='number'
              variant='outlined'
              value={formik.values.room[`${item.prop}Total`]}
              onChange={(event: any) =>
                formik.setFieldValue('room', {
                  ...formik.values.room,
                  [`${item.prop}Total`]: +event.target.value,
                })
              }
            />
          ))}
        </Grid>
      </Grid>
      {/* Total accomodations field end */}

      {/* Available accomodations field start */}
      <Typography sx={{ color: errors.numberOfRooms && 'error.main' }}>
        Total de habitaciones disponibles por acomodación
      </Typography>
      <Grid
        item
        xs={12}
        sx={{
          mt: 2,
          mb: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        {accomodations.map((item) => (
          <TextField
            disabled={!formik.values.room[item.prop]}
            fullWidth
            key={item.prop}
            label={`# disponibles ${item.label.toLowerCase()}`}
            type='number'
            variant='outlined'
            value={formik.values.room[`${item.prop}Available`]}
            onChange={(event: any) =>
              formik.setFieldValue('room', {
                ...formik.values.room,
                [`${item.prop}Available`]: +event.target.value,
              })
            }
          />
        ))}
      </Grid>
      {/* Available accomodations field end */}

      {errors.numberOfRooms && (
        <Alert severity='error'>{errors.numberOfRooms}</Alert>
      )}

      <Button onClick={handleRoomAdd} fullWidth variant='text' sx={{ mt: 2 }}>
        Registrar habitación
      </Button>
    </div>
  )
}

export default RoomDetailsForm
