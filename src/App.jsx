import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleClick = () =>{
    setCount(count => count+1)
  }


  return (
    <>
       <h1>Prueba</h1>
       <button onClick={handleClick}>Cantidad de visitas {count}</button>
       <p>Numero de visitantes {count}</p>
    </>
  )
}

export default App
