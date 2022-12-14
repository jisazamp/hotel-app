import { AppDispatch } from '../store'
import { checkingCredentials, logout, login } from './authSlice'
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
  loginWithEmailAndPassword,
  logoutFirebase,
} from '../../firebase/providers'
import { RegisterUserProps, SignInProps } from '../../firebase/providers'

export const checkingAuthentication = () => {
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

export const startLoginWithEmailAndPassword = ({
  email,
  password,
}: SignInProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials())
    const result = await loginWithEmailAndPassword({ email, password })

    if (!result.ok) return dispatch(logout(result.code))

    dispatch(login(result))
  }
}

export const startSignOut = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase()
    dispatch(logout(null))
  }
}
