import { useState } from 'react'
import './css/App.css'
import Footer from './components/Footer'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'


function App() {
  return (
    <div className="App">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
