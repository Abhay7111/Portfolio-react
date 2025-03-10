import React from 'react'

function Borderoutlines() {
  return (
    <div className='absolute top-0 left-0 w-full h-full -z-10'>
     <div className='border-l border-[#d9d6f8]/20 w-[1px] h-[120%] absolute -top-3 left-0'></div>
     <div className='border-r border-[#d9d6f8]/20 w-[1px] h-[120%] absolute -top-3 right-0'></div>
     <div className='border-t border-[#d9d6f8]/20 h-[1px] w-[120%] absolute top-0 -left-6'></div>
     <div className='border-b border-[#d9d6f8]/20 h-[1px] w-[120%] absolute bottom-0 -left-6'></div>
    </div>
  )
}

export default Borderoutlines