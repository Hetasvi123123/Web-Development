import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Files/Home/Home'
import Technologies from './Files/Technologies/Technologies'
import Navbar from './Files/Home/Navbar'
import Features from './Files/Features/Features'
import Footer from './Files/Home/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/features' element={<Features />} />



      </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App