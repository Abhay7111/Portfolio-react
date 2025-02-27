import React from 'react'
import { NavLink } from 'react-router-dom'

function SocialMediasmall() {
  return (
     <div className='flex items-center justify-start border w-60 h-11 relative'>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[2%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-facebook-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[8%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-whatsapp-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[14%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-github-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[20%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-instagram-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[26%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-linkedin-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[32%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-twitter-x-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[38%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-youtube-line'></i></NavLink></div>
          <div className='size-8 border rounded-full z-0 hover:z-20 absolute left-[44%] top-1/2 -translate-y-1/2 bg-green-400'><NavLink className={`w-full h-full rounded-full flex items-center justify-center`}><i className='ri-discord-line'></i></NavLink></div>
     </div>
  )
}

export default SocialMediasmall