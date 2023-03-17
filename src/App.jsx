import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CorrectGrammer from './Components/CorrectGrammer'
import Home from './Components/Home'
import JsOneLiner from './Components/JsOneLiner'
import JsToPy from './Components/JsToPy'
import QandA from './Components/QandA'
import TranslateHardtoSimple from './Components/TranslateHardtoSimple'
import './style.css'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/qanda' element={<QandA/>} />
          <Route path='/correctgrammer' element={<CorrectGrammer/>} />
          <Route path='/translatetosimple' element={<TranslateHardtoSimple/>} />
          <Route path='/convetjstopy' element={<JsToPy/>} />
          <Route path='/jsoneliner' element={<JsOneLiner/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App