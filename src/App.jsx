import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Father } from './components/container/father'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Father/>
    </div>
  )
}

export default App
