
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Service from "./pages/Service"

function App() {
  

  return (
    <>
    <h1> Welcome </h1>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
