import React from 'react'

function Lines_Animated() {
     const Lines = Array.from({ length: 5 }, (_, index) => (
          <div key={index} className='overflow-hidden w-full h-4 bg-[#b4adfc8f] flex items-center justify-center relative p-1'>
               <div className='w-full h-full bg-black/20'></div>
               <div className='absolute bg-red-500 w-5 h-1 div_1px'></div>
          </div>
        ));
  return (
     <div className='relative w-full h-full overflow-hidden'>
     <div className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
       <div className='w-full h-full flex flex-col items-center justify-center gap-1 overflow-x-scroll overflow-hidden relative p-2'>
         {Lines}
       </div>
     </div>
   </div> 
  )
}

export default Lines_Animated
