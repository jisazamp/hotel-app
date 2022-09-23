import { AppDispatch } from '../store'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyHotel } from './hotelSlice'

export const startNewHotel = () => {
  return async (dispatch: AppDispatch) => {
    const newHotel = {
      id: '',
      country: '',
      description: '',
      imageUrls: [],
      locality: '',
      logo: '',
      rating: 0,
      rooms: null,
      title: '',
      type: 3,
    }

    const newDoc = doc(collection(FirebaseDB, `hotels/hotel/registeredHotels`))
    await setDoc(newDoc, newHotel)

    newHotel.id = newDoc.id
    dispatch(addNewEmptyHotel(newHotel))
  }
}
