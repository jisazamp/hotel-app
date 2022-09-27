import AppTheme from './theme/AppTheme'
import AppRouter from './router/AppRouter'
import { useAppDispatch } from './store/hooks'
import { useEffect } from 'react'
import { startHotelFetch } from './store/hotel'

const HotelApp = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startHotelFetch())
  }, [])

  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  )
}

export default HotelApp
