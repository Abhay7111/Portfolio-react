import React from 'react'
import Maxdiv from './Maxdiv'

function Course() {
  return (
    <div className='w-[1px] h-[800px] bg-blue-500/40 relative'>
          <div className='flex items-center justify-center absolute top-[0%] -left-1.5'> 
               <span className='w-fit'>
                    <div className='size-3 rounded-full bg-blue-500'></div>
               </span>
               <div className='w-14 h-[2px] bg-blue-500'></div>
               <div className=' relative min-w-40 h-fit flex flex-col items-start justify-center gap-0 p-5'>
                    <h1 className=' relative font-medium text-lg mb-2 text-nowrap'>High School</h1>
                    <p className=' relative lowercase first-letter:uppercase lg:text-nowrap font-mono text-sm opacity-80 px-2 '>SHRI HARIVANSH Inter Collage <br /> KODWAT CHOLKHARI S.K.NAGAR</p>
                    <p className=' relative lowercase first-letter:uppercase text-nowrap font-medium text-sm opacity-80'>from 2018 - 2019</p>
                    <div className='absolute top-0 left-0 border border-blue-500 hover:border-blue-300 transition-all duration-200 shadow-2xl shadow-transparent hover:shadow-blue-500 w-full h-full z-0 rounded-xl overflow-hidden'>
                         <div className='w-full h-full opacity-10'><Maxdiv/></div>
                    </div>
               </div>
          </div>
          <div className='flex items-center justify-center absolute top-[25%] -right-1.5'> 
               <div className=' relative p-5 min-w-40 h-fit flex flex-col items-end justify-center gap-0'>
                    <h1 className=' relative font-medium text-lg mb-2 text-nowrap'>Intermediate</h1>
                    <p className=' relative lowercase first-letter:uppercase lg:text-nowrap font-mono text-sm text-end opacity-80 px-2'>SURYA GROUP OF EDUCTION</p>
                    <p className=' relative lowercase first-letter:uppercase text-nowrap font-medium text-sm opacity-80'>from 2019 - 2020</p>
                    <div className='absolute top-0 left-0 border border-blue-500 hover:border-blue-300 transition-all duration-200 shadow-2xl shadow-transparent hover:shadow-blue-500 w-full h-full z-0 rounded-xl overflow-hidden'>
                         <div className='w-full h-full opacity-10'><Maxdiv/></div>
                    </div>
               </div>
               <div className='w-14 h-[2px] bg-blue-500'></div>
               <span className='w-fit flex items-center   justify-end'>
                    <div className='size-3 rounded-full bg-blue-500'></div>
               </span>
          </div>
          <div className='flex items-center justify-center absolute top-[50%] -left-1.5'> 
               <span className='w-fit'>
                    <div className='size-3 rounded-full bg-blue-500'></div>
               </span>
               <div className='w-14 h-[2px] bg-blue-500'></div>
               <div className=' relative p-5 min-w-40 h-fit flex flex-col items-start justify-center gap-0'>
                    <h1 className=' relative font-medium text-lg mb-2 text-nowrap'>BCA</h1>
                    <p className=' relative lowercase first-letter:uppercase lg:text-nowrap font-mono text-sm opacity-80 px-2 '>JAGRAN COLLEGE OF ARTS, SCIENCE <br /> & COMMERCE, JUHI, KANPUR</p>
                    <p className=' relative lowercase first-letter:uppercase text-nowrap font-medium text-sm opacity-80'>from 2020 - 2021</p>
                    <div className='absolute top-0 left-0 border border-blue-500 hover:border-blue-300 transition-all duration-200 shadow-2xl shadow-transparent hover:shadow-blue-500 w-full h-full z-0 rounded-xl overflow-hidden'>
                         <div className='w-full h-full opacity-10'><Maxdiv/></div>
                    </div>
               </div>
          </div>
          <div className='flex items-center justify-center absolute top-[75%] -right-1.5'> 
               <div className=' relative p-5 min-w-40 h-fit  flex flex-col items-end justify-center gap-0'>
                    <h1 className=' relative font-medium text-lg mb-2 text-nowrap'>ADCA</h1>
                    <p className=' relative lowercase first-letter:uppercase lg:text-nowrap font-mono text-sm text-end opacity-80 px-2'>Advance computer center <br /> (sant kabir nagar , uttar pradesh) <br /> <span className='uppercase'>EMAX/EK1234</span></p>
                    <p className=' relative lowercase first-letter:uppercase text-nowrap font-medium text-sm opacity-80'>from 2022 - 2023</p>
                    <div className='absolute top-0 left-0 border border-blue-500 hover:border-blue-300 transition-all duration-200 shadow-2xl shadow-transparent hover:shadow-blue-500 w-full h-full z-0 rounded-xl overflow-hidden'>
                         <div className='w-full h-full opacity-10'><Maxdiv/></div>
                    </div>
               </div>
               <div className='w-14 h-[2px] bg-blue-500'></div>
               <span className='w-fit flex items-center justify-end'>
                    <div className='size-3 rounded-full bg-blue-500'></div>
               </span>
          </div>
    </div>
  )
}

export default Course