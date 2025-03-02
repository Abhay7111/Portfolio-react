import React from 'react'
import { NavLink } from 'react-router-dom'

function SocialMediasmall() {
  return (
     <div className='flex items-center justify-start w-[193px] rounded-full h-8 relative bg-transparent'>
          <div className='size-8 border rounded-full z-[1] hover:z-[11] absolute left-[0px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-facebook-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[2] hover:z-[11] absolute left-[24px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink to={`https://wa.me/+917408638739?text=`} className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-whatsapp-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[3] hover:z-[11] absolute left-[44px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink to={`https://github.com/Abhay7111`} className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-github-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[4] hover:z-[11] absolute left-[64px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-instagram-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[5] hover:z-[11] absolute left-[84px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-linkedin-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[6] hover:z-[11] absolute left-[104px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-twitter-x-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[7] hover:z-[11] absolute left-[124px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-youtube-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[8] hover:z-[11] absolute left-[144px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-discord-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-[9] hover:z-[11] absolute left-[164px] top-1/2 -translate-y-1/2 bg-white hover:scale-[1.4] transition-all duration-150 active:scale-[1.3] hover:bg-blue-600 hover:text-white'><NavLink to={`tel:+917408638739`} className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-phone-line'></i></NavLink></div>
     </div>
  )
}

export default SocialMediasmall