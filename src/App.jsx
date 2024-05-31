// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import Headshot from './components/Headshot.jsx'
import Personalinfo from './components/Personalinfo.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  
  return (
    <div className="app-frame">
      <Headshot />
      <Personalinfo />
      <Footer />
    </div>
  )
}

export default App


