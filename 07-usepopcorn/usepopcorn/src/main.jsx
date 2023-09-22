import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StartRating from './StartRating.jsx'


function Test() {
  const [a, setA] = useState(1)

  return (
    <>
      <p>{a}</p>
      <StartRating onSetRatingHandler={setA} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test />

  </React.StrictMode>,
)
