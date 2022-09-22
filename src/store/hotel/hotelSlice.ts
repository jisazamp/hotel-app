import { createSlice } from '@reduxjs/toolkit'

export type Hotel = {
  country: string
  description: string
  locality: string
  logo: string
  title: string
  type: number
  rating: number
}

interface HotelState {
  isSaving: boolean
  messageSaved: string | null
  hotels: [] | null
}

const initialState: HotelState = {
  isSaving: false,
  messageSaved: null,
  hotels: null,
}

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = hotelSlice.actions
