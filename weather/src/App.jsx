import { useState } from 'react'
import './App.css'
import Weatherfile from './Weatherfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weatherfile />
    </>
  )
}

export default App
