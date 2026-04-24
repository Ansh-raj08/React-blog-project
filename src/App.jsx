import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Technology from './components/Technology'
import Navbar from './components/Navbar'
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/food' element={<Food />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App