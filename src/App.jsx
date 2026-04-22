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
          <Route path='/' element={<Home />} />
          <Route path='/Bollywood' element={<Bollywood />} />
          <Route path='/Hollywood' element={<Hollywood />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/Fitness' element={<Fitness />} />
          <Route path='/Technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App