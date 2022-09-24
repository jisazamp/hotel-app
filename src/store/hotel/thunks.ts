import { AppDispatch } from '../store'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyHotel } from './hotelSlice'
import { Hotel } from './hotelSlice'

export const startNewHotel = (payload: Hotel) => {
  return async (dispatch: AppDispatch) => {
    const newDoc = doc(collection(FirebaseDB, `hotels/hotel/registeredHotels`))
    const newHotel = payload
    newHotel.logo = ''
    newHotel.id = newDoc.id

    await setDoc(newDoc, newHotel)
    dispatch(addNewEmptyHotel(newHotel))
  }
}
