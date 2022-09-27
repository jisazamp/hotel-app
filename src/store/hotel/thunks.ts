import { AppDispatch } from '../store'
import { FirebaseDB } from '../../firebase/config'
import { creatingNewHotel, updateHotel } from './hotelSlice'
import { Hotel } from './hotelSlice'
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore/lite'
import {
  addNewEmptyHotel,
  deleteHotelById,
  redirectUser,
  setHotels,
} from './hotelSlice'

export const startNewHotel = (payload: Hotel) => {
  return async (dispatch: AppDispatch) => {
    dispatch(creatingNewHotel(true))

    const newDoc = doc(collection(FirebaseDB, `hotels/hotel/registeredHotels`))
    const newHotel = payload
    newHotel.logo = ''
    newHotel.id = newDoc.id

    await setDoc(newDoc, newHotel)
    dispatch(addNewEmptyHotel(newHotel))
    dispatch(creatingNewHotel(false))
    dispatch(redirectUser(true))
  }
}

export const startUpdateHotel = (payload: Hotel) => {
  return async (dispatch: AppDispatch) => {
    dispatch(creatingNewHotel(true))

    const newHotel = payload
    newHotel.logo = ''

    const docRef = doc(
      FirebaseDB,
      'hotels/hotel',
      `registeredHotels/${payload.id}`
    )

    await setDoc(docRef, newHotel)
    dispatch(updateHotel(payload))
    dispatch(creatingNewHotel(false))
    dispatch(redirectUser(true))
  }
}

export const startHotelFetch = () => {
  return async (dispatch: AppDispatch) => {
    const collectionRef = collection(
      FirebaseDB,
      'hotels/hotel/registeredHotels'
    )
    const fetchedHotels: Hotel[] = []
    const docs = await getDocs(collectionRef)
    docs.forEach((doc) =>
      fetchedHotels.push({
        country: doc.data().country,
        description: doc.data().description,
        id: doc.data().id,
        imageUrls: doc.data().imageUrls,
        locality: doc.data().locality,
        logo: doc.data().logo,
        rating: doc.data().rating,
        rooms: doc.data().rooms,
        title: doc.data().title,
        type: doc.data().type,
      })
    )
    dispatch(setHotels(fetchedHotels))
  }
}

export const startHotelDeleteById = (hotelId: string) => {
  return async (dispatch: AppDispatch) => {
    const docRef = doc(
      FirebaseDB,
      'hotels/hotel',
      `registeredHotels/${hotelId}`
    )
    deleteDoc(docRef).then(() => dispatch(deleteHotelById(hotelId)))
  }
}
