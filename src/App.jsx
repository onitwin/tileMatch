import {React, useState} from "react"
function App() {

  const [number,setNumber]=useState(9000)

  return (
    <>
    <div>
      <p className="text-3xl underline">hello world</p>
      <>{number}</>

    </div>
    </>
  )
}

export default App
