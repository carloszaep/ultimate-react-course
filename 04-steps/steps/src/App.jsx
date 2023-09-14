import './App.css'
import { useState } from 'react';



const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  const [step, setStep] = useState(1)
  const [isOn, setIsOn] = useState(false)


  const handlerPrevious = () => {
    if (step === 1) {
      setStep(3)
      return
    }
    setStep(e => e -= 1)
  }
  const handlerNext = () => {
    if (step === 3) {
      setStep(1)
      return
    }
    setStep(e => e += 1)
  }

  const handlerIsOn = () => {
    setIsOn(e => !e)
  }



  return (

    <>
      <button className='close' onClick={handlerIsOn}>{isOn ? 'x' : "open"}</button>
      {
        isOn && <div className='steps'>
          <div className='numbers'>

            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>

          </div>

          <p className='message'>Step {step}: {messages[step - 1]}</p>
          <div className='buttons'>
            <button style={{ background: '#7950f2', color: "#fff" }} onClick={handlerPrevious}>Previous</button>
            <button style={{ background: '#7950f2', color: "#fff" }} onClick={handlerNext}>Next</button>
          </div>
        </div>
      }
    </>


  )
}

export default App
