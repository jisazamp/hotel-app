import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import HotelApp from './HotelApp'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <HotelApp />
      </Router>
    </Provider>
  </React.StrictMode>
)
