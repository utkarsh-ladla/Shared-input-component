import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormType from './components/FormType'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Dynamic Form with Shared Inputs</h1>
    <FormType />
  </div>

  )
}

export default App
