import { useState } from "react"

function App() {

  let [counter , setCounter] = useState(10)
  
  const addValue = () => {
    //console.log("clicked" , counter)
    if( counter < 20 ){
      counter = counter + 1
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if( counter > 0 ){
      setCounter( counter - 1 )
    }
  }

  return (
    <>
    <h1>We are making counter</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <hr />
    <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
