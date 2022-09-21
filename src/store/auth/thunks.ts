import { AppDispatch } from '../store'
import { checkingCredentials } from './authSlice'
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
  }
}
