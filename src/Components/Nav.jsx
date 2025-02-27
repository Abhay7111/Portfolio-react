import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='w-full h-12 border-b border-zinc-400 bg-white flex items-center justify-between px-2'>
      <NavLink to={'/'} className={`text-xl font-bold px-2`}>Abhay7111</NavLink>
      <div className='w-full flex items-center justify-between bg-transparent px-3 2xl:w-1/2 text-sm font-medium'>
      <NavLink to={'/'} className={({isActive}) => ` ${isActive? 'text-blue-700' : ''} hover:text-blue-600`}>Home</NavLink>
      <NavLink to={'/Blog'} className={({isActive}) => ` ${isActive? 'text-blue-700' : ''} hover:text-blue-600`}>Blog</NavLink>
      <NavLink to={'/About'} className={({isActive}) => ` ${isActive? 'text-blue-700' : ''} hover:text-blue-600`}>About</NavLink>
      <NavLink to={'/Projects'} className={({isActive}) => ` ${isActive? 'text-blue-700' : ''} hover:text-blue-600`}>Projects</NavLink>
      </div>
    </div>
  )
}

export default Nav