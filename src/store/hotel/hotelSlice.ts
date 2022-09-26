import { createSlice } from '@reduxjs/toolkit'

export type Hotel = {
  id: string | null
  country: string
  description: string
  imageUrls: string[] | null
  locality: string
  logo: string | null
  rating: number
  rooms: Room[] | null
  title: string
  type: number | string
}

export type Room = {
  numberOfRooms: number
  roomsAvailable: number
  type: 'single-room' | 'two-twin-bedroom' | 'one-queen-bedroom'
}

interface HotelState {
  canRedirect: boolean
  hotels: Hotel[]
  isSaving: boolean
  savedMessage: string | null
}

const initialState: HotelState = {
  canRedirect: false,
  hotels: [],
  isSaving: false,
  savedMessage: null,
}

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    creatingNewHotel: (state: HotelState, action) => {
      state.isSaving = action.payload
    },
    redirectUser: (state: HotelState, action) => {
      state.canRedirect = action.payload
    },
    addNewEmptyHotel: (state: HotelState, action) => {
      state.hotels.push(action.payload)
      state.isSaving = false
    },
    deleteHotelById: (state: HotelState, action) => {},
    setActiveHotel: (state: HotelState, action) => {},
    setHotels: (state: HotelState, action) => {},
    setSaving: (state: HotelState) => {},
    updateHotel: (state: HotelState) => {},
  },
})

export const {
  addNewEmptyHotel,
  redirectUser,
  creatingNewHotel,
  deleteHotelById,
  setActiveHotel,
  setHotels,
  setSaving,
  updateHotel,
} = hotelSlice.actions
