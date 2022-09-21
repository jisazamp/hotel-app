import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBtFk5suDBE9jCFNM8vm4KPlX8rpwBOMFs',
  authDomain: 'hotel-app-d77c5.firebaseapp.com',
  projectId: 'hotel-app-d77c5',
  storageBucket: 'hotel-app-d77c5.appspot.com',
  messagingSenderId: '298767690946',
  appId: '1:298767690946:web:7973d574559bde727d9f5b',
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
