import { createSlice } from '@reduxjs/toolkit'

export type Hotel = {
  country: string
  description: string
  imageUrls: string[]
  locality: string
  logo: string
  rating: number
  rooms: Room[]
  title: string
  type: number
}

export type Room = {
  numberOfRooms: number
  roomsAvailable: number
  type: 'single-room' | 'two-twin-bedroom' | 'one-queen-bedroom'
}

interface HotelState {
  hotels: Hotel[] | null
  isSaving: boolean
  savedMessage: string | null
}

const initialState: HotelState = {
  hotels: null,
  isSaving: false,
  savedMessage: null,
}

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    addNewEmptyHotel: (state: HotelState, action) => {},
    deleteHotelById: (state: HotelState, action) => {},
    setActiveHotel: (state: HotelState, action) => {},
    setHotels: (state: HotelState, action) => {},
    setSaving: (state: HotelState) => {},
    updateHotel: (state: HotelState) => {},
  },
})

export const {
  addNewEmptyHotel,
  deleteHotelById,
  setActiveHotel,
  setHotels,
  setSaving,
  updateHotel,
} = hotelSlice.actions
