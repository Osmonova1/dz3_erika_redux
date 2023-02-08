import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLatency from './components/latency.jsx'

function App() {
const [value, setValue] = useState("")
const latencyValue =useLatency(value, 500)
const handleChange = (e)=>{
  setValue(e.target.value)
}
useEffect(() => {}, [latencyValue])
  return (
    <div className="App">
     <input type="text" value={value}  onChange={handleChange}/>
     <p>Text:{value}</p>
     <p>Delay Text:{latencyValue}</p>
    </div>
  )
}

export default App
