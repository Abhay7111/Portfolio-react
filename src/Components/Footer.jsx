import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-fit border-t border-blue-400/10'>
     <div className=' w-full h-fit grid grid-cols-1 sm:grid-cols-2'>
          <div className='w-full h-32 border-b border-blue-400/10 flex items-center justify-center'>
          <NavLink to={'/'} className={`text-xl font-bold px-2`}>Abhay7111</NavLink>
          </div>
          <div className='w-full h-32 border-b border-blue-400/10 flex items-center justify-center px-2'>
          <div className='w-full h-fit flex items-center justify-around gap-2'>
          <NavLink to={'/'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Home</NavLink>
            <NavLink to={'/blog'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Blog</NavLink>
            <NavLink to={'/about'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> About</NavLink>
            <NavLink to={'/projects'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Projects</NavLink>
          </div>
          </div>
     </div>
     <div className='w-full h-fit flex items-center justify-start text-xs opacity-35 font-light py-2 px-2'>© Copyright 2025</div>
    </div>
  )
}

export default Footer