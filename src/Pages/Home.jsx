import React from 'react'
import SocialMediasmall from '../Components/SocialMediasmall'

function Home() {
  return (
    <div className='w-full h-full grid grid-cols-3'>
     <div className='w-full h-full border-r border-zinc-400 relative'>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] hover:rotate-0 z-0 hover:z-20 bg-cyan-400 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2024/02/28/19/54/aquatic-8602784_960_720.jpg" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] hover:rotate-0 z-10 hover:z-20 bg-cyan-600 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2024/04/28/05/58/fish-8724841_960_720.png" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] hover:rotate-0 z-0 hover:z-20 bg-cyan-800 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2021/06/17/17/58/betta-6344236_1280.jpg" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
     </div>
     <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[80%] px-2 min-h-32 border border-zinc-400 rounded-xl relative flex flex-col items-center justify-start'>
               <p className='absolute -top-5 -left-5 -rotate-[30deg]'>Hi</p>
               <h1 className='text-4xl font-bold uppercase'>Abhay7111</h1>
               <p className='text-2xl'>web-desiger</p>
               <p className='text-base'>Hii me Abhay Vishwakarma from Uttar Pradesh, Sant Kabir Nagar I'm Web-developer or UI/UX designer (Frontend developer)</p>
               <SocialMediasmall/>
          </div>
     </div>
     <div className='w-full h-full border-l border-zinc-400 relative'>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] hover:rotate-0 z-0 hover:z-20 bg-cyan-400 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2024/02/28/19/54/aquatic-8602784_960_720.jpg" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] hover:rotate-0 z-10 hover:z-20 bg-cyan-600 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2024/04/28/05/58/fish-8724841_960_720.png" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
<div className=' cursor-pointer w-96 h-60 border border-zinc-400 rounded-xl absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] hover:rotate-0 z-0 hover:z-20 bg-cyan-800 transition-all duration-200'>
<img src="https://cdn.pixabay.com/photo/2021/06/17/17/58/betta-6344236_1280.jpg" alt="Not found image" className='w-full h-full object-cover rounded-xl' /></div>
     </div>
    </div>
  )
}

export default Home