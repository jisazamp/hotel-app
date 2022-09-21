import { AppDispatch } from '../store'
import { checkingCredentials, logout, login } from './authSlice'
import { signInWithGoogle } from '../../firebase/providers'

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.code))

    dispatch(login(result))
  }
}
