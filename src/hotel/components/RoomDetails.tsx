import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Bed from '@mui/icons-material/Bed'

const accomodations = [
  { prop: 'singleRoom', label: 'Sencilla' },
  { prop: 'doubleRoom', label: 'Doble' },
  { prop: 'queenRoom', label: 'Matrimonial' },
]

const RoomDetails = ({ formik }: any) => {
  const handleRoomAdd = () => {
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
        {formik.values.rooms.map((room: any) => (
          <Typography
            sx={{ backgroundColor: '#cacaca', m: 2, borderRadius: 1, p: 2 }}
            key={room.title}
          >
            {room.title}
          </Typography>
        ))}

        <Grid container>
          {/* Room name field start */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='title'
              label='Nombre habitación*'
              value={formik.values.room.title}
              name='title'
              onChange={(event: any) =>
                formik.setFieldValue('room', {
                  ...formik.values.room,
                  title: event.target.value,
                })
              }
              placeholder='Beach Club'
              type='text'
              variant='outlined'
            />
          </Grid>
          {/* Room name field end */}

          {/* Accomodations available field start */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Acomodaciones disponibles</Typography>
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
          <Typography>Total de habitaciones por acomodación</Typography>
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
        <Typography>
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

        <Button onClick={handleRoomAdd} fullWidth variant='text' sx={{ mt: 2 }}>
          Añadir nueva habitación
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default RoomDetails
