import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from '../Features/Store.js'
import { FirebaseProvider } from './Context/Firebase.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
