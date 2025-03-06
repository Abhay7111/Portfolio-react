import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Borderoutlines from './Borderoutlines';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {setOpenMenu((prevMenuOpen) => !prevMenuOpen);};
  return (
    <div className='w-full h-12 bg-[#22448c] flex items-center justify-between px-2 text-white'>
      {openMenu && <div onClick={toggleMenu} className='absolute top-0 left-0 w-full h-[100vh] z-10'></div>}
      <div className='w-full border-t border-b border-[#d9d6f8]/20 px-7 sm:px-10 py-[2px] relative flex items-center justify-between'>
        <span className='absolute -top-[6px] hidden md:block left-10 w-[1px] h-[150%] border-l border-[#d9d6f8]/20 '></span>
        <span className='absolute -top-[6px] left-6 md:left-2 w-[1px] h-[150%] border-l border-[#d9d6f8]/20 '></span>
        <span className='absolute -top-[6px] hidden md:block right-10 w-[1px] h-[150%] border-l border-[#d9d6f8]/20 '></span>
        <span className='absolute -top-[6px] right-5 md:right-2 w-[1px] h-[150%] border-l border-[#d9d6f8]/20 '></span>
      <NavLink to={'/'} className={`text-xl font-bold px-2`}>Abhay7111</NavLink>
      <div className='hidden md:block md:w-[40%] lg:w-[60%]'>
        <div className='flex items-center justify-end'>
          <div className='w-full flex items-center justify-between px-3 2xl:w-1/2 text-sm'>
            <NavLink to={'/'} className={({isActive}) => ` ${isActive? 'bg-[#d9d6f857] text-[#ffffff]' : 'hover:text-[#d9d6f8]'} px-1 `}>Home</NavLink>
            <NavLink to={'/blog'} className={({isActive}) => ` ${isActive? 'bg-[#d9d6f857] text-[#ffffff]' : 'hover:text-[#d9d6f8]'} px-1 `}>Blog</NavLink>
            <NavLink to={'/about'} className={({isActive}) => ` ${isActive? 'bg-[#d9d6f857] text-[#ffffff]' : 'hover:text-[#d9d6f8]'} px-1 `}>About</NavLink>
            <NavLink to={'/projects'} className={({isActive}) => ` ${isActive? 'bg-[#d9d6f857] text-[#ffffff]' : 'hover:text-[#d9d6f8]'} px-1 `}>Projects</NavLink>
          </div>
        </div>
      </div>
      <div onClick={toggleMenu} className='w-8 h-8 bg-blue-400/10 hover:bg-blue-400/20 border border-[#d9d6f8]/20 cursor-pointer transition-all p-1 relative flex items-center justify-center md:hidden'>
      <i className="ri-menu-4-line text-[25px]  active:scale-75 transition-all duration-300"></i>
      {openMenu && (
        <div className='w-[60vw] min-h-fit bg-[#22448C] hover:border-[#d9d6f8] absolute top-14 right-6 transition-all duration-200 shadow-xl shadow-transparent hover:shadow-blue-500'>
          <div className='flex flex-col gap-2 p-2 relative w-full z-10'>
            <NavLink to={'/'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Home</NavLink>
            <NavLink to={'/blog'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Blog</NavLink>
            <NavLink to={'/about'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> About</NavLink>
            <NavLink to={'/projects'} className={({isActive}) => ` ${isActive? ' bg-[#3453a8] border_left font-medium' : 'hover:text-[#d9d6f8] hover:bg-[#d9d6f8]/30 overflow-hidden relative'} p-1 px-2 w-full z-10 transition-all`}> Projects</NavLink>
            <Borderoutlines/>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default Nav