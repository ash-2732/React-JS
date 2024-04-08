import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bg from './components/Bg.jsx'
import Slider from './components/Slider.jsx'
import Passwordgen from './components/Passwordgen.jsx'
import CurrencyCon from './components/CurrencyCon.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrencyCon/>
  </React.StrictMode>,
)
