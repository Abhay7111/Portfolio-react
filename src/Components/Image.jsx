import React from 'react'
import { NavLink } from 'react-router-dom'

function Image() {
  return (
    <div className='w-full md:w-[90vw] lg:w-[65vw] xl:w-[50vw] flex flex-col gap-1 transition-all duration-300'>
     <div className='w-full grid grid-cols-2 gap-1'>
          <NavLink to={`/`} className='w-full h-60 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/8808733/file/original-376e1dd4def23e842c7122eaf4cf42e0.jpg?resize=1024x768&vertical=center" className='w-full h-full object-cover opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`/`} className='w-full h-60 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/17166989/file/original-4c22651b90cb479c1e847d27c515cba9.png?resize=1024x768&vertical=center" className='w-full h-full object-cover opacity-50 hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
     <div className='w-full grid grid-cols-1 md:h-[40vh] overflow-hidden'>
          <NavLink to={`/`} className='w-full h-fit bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/17828262/file/original-aa258036ac6130cc829db1436efb9f0f.png?resize=772x579&vertical=center" className='w-full h-full object-cover opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
     <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-1 transition-all duration-300'>
          <NavLink to={`/`} className='w-full h-60 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/18202092/file/original-f1959a106ccce4840971ed6a3e9aadee.png?resize=1024x768&vertical=center" className='w-full h-full object-cover opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`/`} className='w-full h-60 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/31371582/file/original-29c741bf4e61bb6bb78360cd9c52ce30.png?resize=1024x768&vertical=center" className='w-full h-full object-cover opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`/`} className='w-full h-60 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src="https://cdn.dribbble.com/userupload/12744646/file/original-a01a7662e022b77b46b181bed5f5b5df.png?resize=772x579&vertical=center" className='w-full h-full object-cover opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
    </div>
  )
}

export default Image