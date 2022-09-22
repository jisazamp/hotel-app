import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { hotelSlice } from './hotel/hotelSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    hotel: hotelSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
