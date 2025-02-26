import { useState } from 'react'
import './App.css'
import Authform from './Authform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Authform/>
    </>
  )
}

export default App
