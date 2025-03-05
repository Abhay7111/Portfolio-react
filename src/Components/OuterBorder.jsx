import React from 'react'

function OuterBorder() {
  return (
    <div className='absolute w-full h-full -z-0'>
          <div className=' w-[150%] h-[1px] border-t border-[#449aeb]/30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          <div className=' w-[150%] h-[1px] border-b border-[#449aeb]/30 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          <div className=' w-[1px] h-[150%] border-l border-[#449aeb]/30 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
          <div className=' w-[1px] h-[150%] border-r border-[#449aeb]/30 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
    </div>
  )
}

export default OuterBorder