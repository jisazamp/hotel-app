import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseAuth } from './config'

export interface RegisterUserProps {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface SignInProps {
  email: string
  password: string
}

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error: any) {
    if (error)
      return {
        ok: false,
        code: error.code,
      }

    return {
      ok: false,
    }
  }
}

export const registerUserWithEmailPassword = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterUserProps) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid, photoURL } = resp.user
    const displayName = `${firstName} ${lastName}`
    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, { displayName })
    }

    return { ok: true, uid, photoURL }
  } catch (error: any) {
    if (error) return { ok: false, code: error.code }

    return { ok: false }
  }
}

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: SignInProps) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)

    return {
      ok: true,
      uid: resp.user.uid,
      email: resp.user.email,
      displayName: resp.user.displayName,
      photoURL: resp.user.photoURL,
    }
  } catch (error: any) {
    if (error) return { ok: false, code: error.code }
    return { ok: false }
  }
}
