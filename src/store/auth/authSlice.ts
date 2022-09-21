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
  status: 'not-authenticated',
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
    login: (state: AuthState, action) => {},
    logout: (state: AuthState, payload) => {},
    checkingCredentials: (state: AuthState) => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
