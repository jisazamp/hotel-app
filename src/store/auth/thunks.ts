import { AppDispatch } from '../store'
import { checkingCredentials, logout, login } from './authSlice'
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers'
import { RegisterUserProps } from '../../firebase/providers'

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

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  firstName,
  lastName,
}: RegisterUserProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, code } = await registerUserWithEmailPassword({
      email,
      password,
      firstName,
      lastName,
    })

    if (!ok) return dispatch(logout(code))

    const displayName = `${firstName} ${lastName}`
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}
