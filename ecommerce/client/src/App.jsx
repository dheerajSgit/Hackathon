import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "client/src/components/ui/button"
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>  
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
