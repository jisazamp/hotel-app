import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  displayName: string | null
  email: string | null
  errorMessage: string | null
  photoURL: string | null
  status: 'checking' | 'not-authenticated' | 'authenticated'
  uid: string | null
}

const initialState: AuthState = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking',
  uid: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action) => {
      const { payload } = action

      state.displayName = payload.displayName
      state.email = payload.email
      state.errorMessage = null
      state.photoURL = payload.photoURL
      state.status = 'authenticated'
      state.uid = payload.uid
    },
    logout: (state: AuthState, action) => {
      state.displayName = null
      state.email = null
      state.errorMessage = action.payload
      state.photoURL = null
      state.status = 'not-authenticated'
      state.uid = null
    },
    checkingCredentials: (state: AuthState) => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
