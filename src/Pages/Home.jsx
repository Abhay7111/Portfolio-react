import React from 'react'
import Maxdiv from '../Components/Maxdiv'
import Borderoutlines from '../Components/Borderoutlines'
import { NavLink } from 'react-router-dom'
import SocialMediasmall from '../Components/SocialMediasmall'
import OuterBorder from '../Components/OuterBorder'

function Home() {
  return (
    <div className='w-full h-fit relative  text-white pb-3'>
          <span className='w-[1px] h-full hidden md:block bg-[#449aeb]/10 absolute top-0 left-40 md:left-10'></span>
          <span className='w-[1px] h-full hidden md:block bg-[#449aeb]/10 absolute top-0 left-20 md:left-[20%]'></span>
          <span className='w-[1px] h-full hidden md:block bg-[#449aeb]/10 absolute top-0 right-28 md:right-40'></span>
          <span className='w-[1px] h-full hidden md:block bg-[#449aeb]/10 absolute top-0 right-40 md:right-[42%]'></span>
          <div className='z-10 relative mt-5 pt-10 pb-20 px-2 overflow-x-hidden'>
               <div className='z-0 w-full opacity-20 h-full bg-transparent absolute top-0 left-0'><Maxdiv/></div>
                    <div className='h-20 flex-col relative items-start justify-start p-1'>
                         <div className='flex items-center justify-start gap-2 md:pl-32'>
                              <span className='w-20 h-[1px] bg-[#449aeb]/20 relative opacity-90'>
                                   <span className='absolute top-1/2 left-[35%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#1a4beb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[35%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                              </span>
                              <p className='text-sm text-[#449aeb] font-medium'> Home</p>
                              <span className='w-10 h-[1px] bg-[#449aeb]/20 relative opacity-90'></span>
                              <p className='font-semibold uppercase text-white text-nowrap text-xl'>Web developer</p>
                              <span className='w-full md:w-80 h-[1px] bg-[#449aeb]/20 relative opacity-90'>
                                   <span className='absolute top-1/2 left-[10%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#449aeb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#1a4beb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[30%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[12px] bg-transparent border border-[#2654d1] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[50%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#449aeb] rounded-full'></span>
                                   <span className='absolute top-1/2 left-[70%] md:hidden -translate-x-1/2 -translate-y-1/2 size-[6px] bg-[#449aeb] rounded-full'></span>
                              </span>
                         </div>
                    </div>
                    <span className='w-full h-[1px] bg-[#449aeb]/20 absolute top-40 right-0 hidden md:block'></span>
                    <h1 className='text-[8rem] sm:text-[9rem] md:text-[12rem] ubuntu-bold uppercase w-full text-center relative flex items-center justify-center md:gap-3 lg:gap-20'>
                         <span className='w-full h-full -z-10 absolute top-0 left-0 md:hidden'><Borderoutlines/></span>
                    <span className='-z-10 hidden md:block w-20 h-[1px] bg-[#449aeb]/40 relative animate-ping'>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 rotate-90'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 rotate-45'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 -rotate-45'></span>
                    </span>
                    Abhay
                    <span className='-z-10 hidden md:block w-20 h-[1px] bg-[#449aeb]/40 relative animate-ping'>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 rotate-90'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 rotate-45'></span>
                         <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#449aeb]/40 -rotate-45'></span>
                    </span>
                    <div className='absolute left-0 bottom-0 border-b hidden md:block border-[#449aeb]/20 w-full '></div>
                    </h1>
                    <div className='w-full flex items-center justify-center mt-14'>
                         <p className='w-96 md:w-[50%] lg:w-[30%] text-md uppercase font-light'>Hii me Abhay Vishwakarma from Uttar Pradesh, Sant Kabir Nagar I'm Web-developer or UI/UX designer (Frontend developer)</p>
                    </div>
                    <SocialMediasmall/>
          </div>
          <div className='w-full h-96 py-10 px-3  '>
               <div className='relative w-full h-fit'>
                    <div className='w-full h-fit p-2 mb-8 flex items-center justify-start'>
                         <span className='border-t border-[#449aeb] text-[#449aeb] uppercase text-sm font-medium mx-2'>Projects</span>
                         <span className='text-2xl font-semibold px-4 text-center uppercase'>
                              Project Showcase: 
                              <span className='hidden sm:block h-0 '><br /></span>
                               <span> </span>from 2022
                         </span>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                         <div className='w-full md:w-[50%] overflow-x-auto flex items-center justify-start overflow-y-hidden py-3'>
                              <div className='relative w-fit max-w- px-5 flex items-center justify-start gap-14 md:gap-32'>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://ledtvexpert.in/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Led .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://abhay7111github.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Git .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://separatedigital.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Sep .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://manasor.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Man .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://abhay7111.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Och .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://biz-growth.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Biz .</NavLink></div>
                                   <div className=' size-20 md:size-32 bg-[#449aeb]/10 relative flex items-center justify-center'><OuterBorder/><NavLink to={`https://vanijewellers.netlify.app/`} target='_blank' className={`relative w-full h-full flex items-center justify-center hover:bg-[#449aeb]/20 transition-all text-xl uppercase font-semibold`}>Van .</NavLink></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className='w-full min-h-40 flex flex-col items-center justify-start gap-5 mt-20 mb-52'>
               <div className='w-full h-fit p-2 mb-8 flex items-center justify-start '>
                    <span className='border-t border-[#449aeb] text-[#449aeb] uppercase text-sm font-medium mx-2'>Expertise</span>
                    <span className='text-2xl font-semibold px-4 text-center uppercase'>
                         What I learned ?
                    </span>
               </div>
               <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[50%] h-40 transition-all duration-700 overflow-x-auto overflow-y-hidden '>
                    <div className=' w-fit flex items-center justify-start'>
                         <NavLink to={`https://react.dev/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-reactjs-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://www.javascripttutorial.net/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-javascript-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://github.com/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-github-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://nodejs.org/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-nodejs-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://vuejs.org/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-vuejs-line text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://www.npmjs.com/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-npmjs-line text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://www.w3schools.com/html/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-html5-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                         <NavLink to={`https://www.w3schools.com/Css/`} className={``}><div className='w-40 h-40 border-t border-l border-b bg-[#449aeb]/20 hover:bg-[#449aeb]/40 transition-all flex items-center justify-center active:scale-95 active:border-r border-[#449aeb]/50'><i className='ri-css3-fill text-[#449aeb] text-4xl'></i></div></NavLink>
                    </div>
               </div>
          </div>
          <div className='w-full h-60 flex items-start flex-col gap-3'>
                    <span className='px-2 ml-3 flex items-center justify-start gap-3'>
                         <span className='text-sm font-medium uppercase border-t border-[#449aeb]/80 text-[#449aeb]'>Started</span>
                         <span className='w-13 h-[1px] bg-[#449aeb]/30'></span>
                         <h3 className='text-2xl font-semibold uppercase'>from 2023 - Now</h3>
                    </span>
               <div className='w-96 h-40 md:h-80 ml-4 relative overflow-hidden'>
                    <div className='w-full h-full bg-transparent opacity-95 absolute z-20'><img src="https://i.pinimg.com/736x/40/77/f9/4077f948ebe9e1ac6f150af10ea765f3.jpg" /></div>
                    <Maxdiv/>
               </div>
          </div>
    </div>
  )
}

export default Home