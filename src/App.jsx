import { useState } from 'react'

import './App.css'

import Hero from './components/hero.jsx'
import NavBar from './components/Navbar.jsx'
import { Toaster } from 'react-hot-toast'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <NavBar/>
        <Hero/>
        
      
    </div>
   
    
  )
}

export default App
