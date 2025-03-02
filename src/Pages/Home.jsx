import React from 'react'
import SocialMediasmall from '../Components/SocialMediasmall'
import About from './About'

function Home() {
  return (
    <>
          <div className='w-full h-full grid grid-cols-3 z-0'>
     <div className='w-full h-[100vh] border-r border-zinc-300 relative '>
<div className='animation_scroll_1_1 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 rounded-xl absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] hover:rotate-0 z-0 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/37259883/file/original-48bad159ef59b512f1bc979ce13d0456.png?resize=1024x768&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' />
</div>
<div className=' animation_scroll_1_2 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 bg-zinc-800 rounded-xl absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] hover:rotate-0 z-10 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/19929373/file/original-09a5da3319ba3802fe3c791846396f1b.png?resize=1024x768&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' /></div>
<div className=' animation_scroll_1_3 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 bg-zinc-800 rounded-xl absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] hover:rotate-0 z-0 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/17885923/file/original-0c903fa97142fa09d1e179f2532e2aa8.png?resize=812x591&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' /></div>
     </div>
     <div className='w-full h-full flex items-center justify-center'>
          <div className='w-[80%] px-2 min-h-3 rounded-xl relative flex flex-col items-center justify-start gap-5 animation_text_from_home_scroll'>
               <h1 className='text-7xl font-bold uppercase relative'>Abhay7111<p className='absolute -top-5 -left-5 -rotate-[30deg] text-sm font-medium lowercase'>Hello!</p></h1>
               <p className='text-2xl'>web-desiger</p>
               <p className='text-base text-center'>Hii me Abhay Vishwakarma from Uttar Pradesh, Sant Kabir Nagar I'm Web-developer or UI/UX designer (Frontend developer)</p>
               <SocialMediasmall/>
          </div>
     </div>
     <div className='w-full h-full border-l border-zinc-300 relative'>
<div className='animation_scroll_2_1 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 bg-zinc-800 rounded-xl absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] hover:rotate-0 z-0 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/5351540/file/original-6d08798b03e5a6a759d700d8c81cc7b6.png?resize=812x591&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' /></div>
<div className='animation_scroll_2_2 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 bg-zinc-800 rounded-xl absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] hover:rotate-0 z-10 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/19929374/file/original-b789cec28178e3545f4ca4d7550a918c.png?resize=1024x768&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' /></div>
<div className='animation_scroll_2_3 cursor-pointer w-96 h-60 border border-zinc-200 hover:border-zinc-400 bg-zinc-800 rounded-xl absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] hover:rotate-0 z-0 hover:z-20 transition-all duration-200'>
<img src="https://cdn.dribbble.com/userupload/15558593/file/original-88c25df8e188f859f3079082eb8a6206.png?resize=812x591&vertical=center" alt="Not found image" className='animation_image_opacity w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100' /></div>
     </div>
     <div className='w-full min-h-96'>
sa
     </div>
    </div>
    </>
  )
}

export default Home