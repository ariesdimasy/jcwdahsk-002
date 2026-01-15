import { useEffect, useRef, useState } from 'react'
import './App.css'
import Big from './components/Big'
import { Component1 } from './components/MyComponents'
import useCounter from './hooks/useCounter'

function App() {
 // name adalah state 
 // setName adalah function untuk mengubah state name
  const [name, setName] = useState('') // awalnya nilai name adalah string kosong
  const { count, increment, decrement } = useCounter(10, 5)
  
  const ref = useRef({
    foo:"bar",
    count:42
  })

  const handleGetValue = () => {
    alert(JSON.stringify(ref.current))
  }


  useEffect(() => {
    console.log('useEffect triggered')
},[name])

// useEffect (() => {
//   const id =  setInterval(() => {
//       console.log('Interval tick:', new Date().toLocaleTimeString())
//   }, 1000)
//   return () => {
//     // cleanup function
//     clearInterval(10)
//   }
// },[])

  return (
    <>
    <button onClick={handleGetValue}> get Ref </button>
    <h1> Hello, {name} </h1>
    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={() => decrement() }> - </button>
    <button onClick={() => increment() }> + </button>
    <h2> Count: {count} </h2>
    <Big  />
    <Component1 />
    </>
  )
}

export default App
