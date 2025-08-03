import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Loginpage from './components/Loginpage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App