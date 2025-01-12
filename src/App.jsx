import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeaderZonemaster} from '../src/Components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <HeaderZonemaster/>
      <p >
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
