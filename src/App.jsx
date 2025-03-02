import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import './Css/ScrollAanimatiion.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <Nav/>
      <div className='Animation_nav_space_1'></div>
      <Outlet/>
    </div>
  )
}

export default App
