import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import './Css/ScrollAanimatiion.css'
import './Css/Border.css'
import './Css/Font.css'
import './Css/Animation.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-fit bg-[#22448c]'>
      <div className='fixed w-full top-0 z-[99] '>
        <Nav/>
      </div>
      <div className='h-12 w-full bg-transparent'></div>
      <Outlet/>
    </div>
  )
}

export default App
