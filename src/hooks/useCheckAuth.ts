import { useEffect } from 'react'
import { useAppSelector, useAppDispatch, logout, login } from '../store'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'

export const useCheckAuth = () => {
  const { status } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(null))

      const { photoURL, displayName, email, uid } = user
      dispatch(login({ photoURL, displayName, email, uid }))
    })
  }, [])

  return { status }
}
