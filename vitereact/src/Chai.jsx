import { useState } from "react"

function Chai() {

    const [color , setColor] = useState("olive")

    const makeGreen = () => {   // i can also declare it as a function or also declare can first button
        setColor("green")
    }

    const makeBlue = () => {
        setColor("blue")
    }
    return(
        <div style={{backgroundColor:color , height:"500px"}} >
            <button onClick={() => setColor("red")} style={{width:"150px"}}>Red</button>
            <button onClick={makeGreen}>Green</button>
            <button onClick={makeBlue}>Blue</button>
        </div>
    )
}

export default Chai