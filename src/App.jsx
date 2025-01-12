import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeaderZonemaster} from '../src/Components/header'
import {Zona} from '../src/Components/Zona'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderZonemaster />
      <Zona />
    </div>
  );
}

export default App
