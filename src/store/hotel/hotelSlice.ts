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
  isLoading: boolean
}

const initialState: HotelState = {
  canRedirect: false,
  hotels: [],
  isSaving: false,
  isLoading: false,
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
    deleteHotelById: (state: HotelState, action) => {
      state.hotels = state.hotels.filter((hotel) => hotel.id !== action.payload)
    },

    setHotels: (state: HotelState, action) => {
      state.hotels = action.payload
    },
    setIsLoading: (state: HotelState, action) => {
      state.isLoading = action.payload
    },
    updateHotel: (state: HotelState, action) => {
      const idx = state.hotels.findIndex((el) => el.id === action.payload.id)
      state.hotels[idx] = action.payload
    },
  },
})

export const {
  addNewEmptyHotel,
  redirectUser,
  creatingNewHotel,
  deleteHotelById,
  setHotels,
  updateHotel,
  setIsLoading,
} = hotelSlice.actions
