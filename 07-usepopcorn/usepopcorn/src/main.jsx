import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StartRating from './StartRating.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StartRating maxRating={5} />
    <StartRating maxRating={10} />
    <StartRating />
  </React.StrictMode>,
)
