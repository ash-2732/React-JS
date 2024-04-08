import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username : "Ashik",
    age : 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "hahahaha" btnText = "click me"/>
      <Card username = "lets go" btnText = "view profile"/>
    </>
  )
}

export default App
