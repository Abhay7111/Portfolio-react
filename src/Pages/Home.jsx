import React from 'react'
import Maxdiv from '../Components/Maxdiv'
import Borderoutlines from '../Components/Borderoutlines'
import { NavLink } from 'react-router-dom'
import SocialMediasmall from '../Components/SocialMediasmall'
import OuterBorder from '../Components/OuterBorder'

function Home() {
  return (
    <div className='w-full h-fit relative  text-white'>
          <div className='z-10 relative mt-5 pt-10 pb-20 px-2 overflow-x-hidden'>
               <div className='z-0 w-full opacity-60 h-full bg-transparent absolute top-0 left-0'><Maxdiv/></div>
                    <div className='h-20 flex-col relative items-start justify-start p-1'>
                         <div className='flex items-center justify-start gap-2 md:pl-32'>
                              <span className='w-20 h-[1px] bg-[#6BEBAE]/20 relative opacity-90'>
                                   <span className='absolute top-1/2 left-[35%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#1a4beb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[35%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                              </span>
                              <p className='text-sm text-[#6BEBAE] font-medium'> Home</p>
                              <span className='w-10 h-[1px] bg-[#6BEBAE]/20 relative opacity-90'></span>
                              <p className='font-semibold uppercase text-white text-nowrap text-xl'>Web developer</p>
                              <span className='w-full md:w-40 h-[1px] bg-[#6BEBAE]/20 relative opacity-90'>
                                   <span className='absolute top-1/2 left-[10%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#6BEBAE] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:left-[20%] -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#1a4beb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:left-[20%] -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[50%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#6BEBAE] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[70%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#6BEBAE] rounded-full'></span>
                              </span>
                         </div>
                    </div>
                    <h1 className='text-[8rem] sm:text-[9rem] md:text-[12rem] ubuntu-bold uppercase w-full text-center relative flex items-center justify-center md:gap-3 lg:gap-20'>
                         <span className='w-full h-full -z-10 absolute top-0 left-0 md:hidden'><Borderoutlines/></span>
                    <span className='-z-10 hidden md:block w-20 h-[1px] bg-[#6BEBAE]/40 relative animate-ping'>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 rotate-90'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 rotate-45'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 -rotate-45'></span>
                    </span>
                    Abhay
                    <span className='-z-10 hidden md:block w-20 h-[1px] bg-[#6BEBAE]/40 relative animate-ping'>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 rotate-90'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 rotate-45'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#6BEBAE]/40 -rotate-45'></span>
                    </span>
                    <div className='absolute left-0 bottom-0 border-b hidden md:block border-[#6BEBAE]/20 w-full '></div>
                    </h1>
                    <div className='w-full flex items-center justify-center mt-14'>
                         <p className='w-96 md:w-[50%] lg:w-[30%] text-md uppercase font-light'>Hii me Abhay Vishwakarma from Uttar Pradesh, Sant Kabir Nagar I'm Web-developer or UI/UX designer (Frontend developer)</p>
                    </div>
                    <SocialMediasmall/>
          </div>
          <div className='w-full h-96 py-10 px-3  '>
               <div className='relative w-full h-fit'>
                    <div className='w-full h-fit p-2 mb-8 flex items-center justify-start'>
                         <span className='border-t border-[#6BEBAE] text-sm font-medium mx-2'>Projects</span>
                         <span className='text-2xl font-semibold px-4 text-center'>
                              Project Showcase:
                              <br />
                              2023 - Now
                         </span>
                    </div>
                    <div className='w-full overflow-x-auto flex items-center justify-start overflow-y-hidden py-3'>
                         <div className='relative w-fit max-w- px-5 flex items-center justify-start gap-14 md:gap-32'>
                              <div className=' size-20 md:size-32 bg-[#6BEBAE]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={``} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#6BEBAE]/20 transition-all text-sm`}>Ledtvexpert</NavLink></div>
                              <div className=' size-20 md:size-32 bg-[#6BEBAE]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={``} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#6BEBAE]/20 transition-all text-sm`}>Sportify</NavLink></div>
                              <div className=' size-20 md:size-32 bg-[#6BEBAE]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={``} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#6BEBAE]/20 transition-all text-sm`}>Ledtvexpert</NavLink></div>
                              <div className=' size-20 md:size-32 bg-[#6BEBAE]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={``} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#6BEBAE]/20 transition-all text-sm`}>Gaama</NavLink></div>
                              <div className=' size-20 md:size-32 bg-[#6BEBAE]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={``} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#6BEBAE]/20 transition-all text-sm`}>Ledtvexpert</NavLink></div>
                         </div>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Home