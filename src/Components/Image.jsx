import React from 'react';
import { NavLink } from 'react-router-dom';
import Github_clone from '../../public/github_clone.png';
import Medium_works from '../../public/Medium-works.png';
import Separatedigital from '../../public/Screenshot 2025-03-08 151133.png';
import Ledtvexpert from '../../public/Screenshot 2024-06-13 145151.png';
import Bizgroth from '../../public/Screenshot 2024-07-24 005759.png';
import Minefood from '../../public/Screenshot 2025-03-08 152547.png';
import OuterBorder from './OuterBorder';

function Image() {
  return (
    <div className='w-full md:w-[90vw] lg:w-[65vw] xl:w-[50vw] flex flex-col gap-1 transition-all duration-300 relative'>
     <OuterBorder/>
     <div className='w-full grid grid-cols-2 gap-1'>
          <NavLink to={`https://abhay7111github.netlify.app/`} className='w-full h-60 hover:shadow-xl shadow-blue-400 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Github_clone} className='w-full h-full object-cover  object-right hover:object-left opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`https://abhay7111.netlify.app/`} className='w-full h-60 hover:shadow-xl shadow-blue-400 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Medium_works} className='w-full h-full object-cover  object-right hover:object-left opacity-50  blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
     <div className='w-full grid grid-cols-1 md:h-[40vh] overflow-hidden  hover:shadow-xl shadow-blue-400'>
          <NavLink to={`https://separatedigital.netlify.app/`} className='w-full h-fit bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Separatedigital} className='w-full h-full object-cover opacity-50 hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
     <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-1 transition-all duration-300'>
          <NavLink to={`https://ledtvexpert.in/`} className='w-full h-60 hover:shadow-xl shadow-blue-400 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Ledtvexpert} className='w-full h-full object-cover  object-right hover:object-left opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`https://biz-growth.netlify.app/`} className='w-full h-60 hover:shadow-xl shadow-blue-400 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Bizgroth} className='w-full h-full object-cover object-right hover:object-left opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
          <NavLink to={`https://minefood.netlify.app/`} className='w-full h-60 hover:shadow-xl shadow-blue-400 bg-zinc-950 overflow-hidden border hover:border-blue-400 transition-all duration-300 border-blue-600/50 cursor-pointer'>
               <img src={Minefood} className='w-full h-full object-cover object-left hover:object-right opacity-50 blur-[2px] hover:blur-none hover:scale-[1.03] hover:opacity-95 transition-all duration-500' />
          </NavLink>
     </div>
    </div>
  )
}

export default Image