import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated'
  uid: string | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action) => {
      const { payload } = action

      state.status = 'authenticated'
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    logout: (state: AuthState, action) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = action.payload
    },
    checkingCredentials: (state: AuthState) => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
