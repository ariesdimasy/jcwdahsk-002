import { useState } from "react"
import './App.css'
import { useTheme } from "./context/ThemeContext"
import { useCounterStore } from "./stores/counter.store"

localStorage.setItem("myName","Aries")
localStorage.setItem("address",JSON.stringify({
  'street':'Jalan Merdeka',
  'city':'Jakarta'
}))

function App() {

  const [user, setUser] = useState({ name:"Dimas"})
  const {theme} = useTheme()
  const counter = useCounterStore((state) => state.count)

  return (
   
    <div  className={theme}  style={{ padding:20 , border: '1px solid black' }} >
     <div>User : {user.name}</div>
     <div>Myname : {localStorage.getItem("myName")}</div>
      <div>Address : {JSON.parse(localStorage.getItem("address"))?.street} </div>
     <div style={{ fontSize: 40 }}>{counter}</div>
     <Dashboard user={user} />
    </div>
    
  )
}

sessionStorage.setItem  ("sessionName","Session Dimas")

function Dashboard({ user } : { user: { name:string}}){
  return(<div style={{ padding:20 , border: '1px solid blue' }}>
     <div> Dashboard </div>
     <div> { sessionStorage.getItem("sessionName") }</div>
     <div> { user.name }</div>
     <button  onClick={() => sessionStorage.setItem("sessionName","Session Updated Dimas")}> Update Session Name </button>
     <button  onClick={() => sessionStorage.removeItem("sessionName")}> Remove Session Name </button>
     <Profile user={user} />
  </div>)
 
}

function Profile({ user } : { user: { name:string}}){

  const {theme, setTheme} = useTheme()

  return (<div style={{ padding:20 , border: '1px solid red' }}>
    <div> Profile  </div>
    <div>{user.name}</div>
     <button onClick={() => localStorage.removeItem("myName")}> Remove Name </button>
      <button onClick={() => localStorage.clear()}> Clear All </button>
      <hr></hr>
      <div>
        <span> Current Theme : {theme.toUpperCase()}</span>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Toggle Theme </button>
      </div>
      <div>
        {/* <button onClick={() => useCounterStore((state) => state.decrement)}> - </button>
        <button onClick={() => useCounterStore((state) => state.increment)}> + </button> */}
          <button onClick={() => useCounterStore.getState().decrement()}> - </button>
        <button onClick={() => useCounterStore.getState().increment()}> + </button>
      </div>
  </div>)
}

export default App
