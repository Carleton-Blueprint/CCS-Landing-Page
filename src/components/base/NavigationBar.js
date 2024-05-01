import React from 'react'

const NavigationBar = (props) => {
  const currentpath = props.pathname;
  const isCurrentPath = (page) =>{
    if (currentpath.startsWith(page)){
      return true;
    }
    return false;
  }
  
  return (
    // change height based on screen
    <div className='container h-16'>
      {/* Add custom styles to tailwind config to match figma */}
      <div className='flex sm:hidden md:hidden w-screen justify-end items-center bg-gradient-to-r from-black from-23% to-red-700 gap-20  text-white font-poppins'>
        <div className='font-normal'>borgir</div>
        <div></div>
      </div>
      <div className='hidden sm:flex md:flex w-screen justify-end items-center bg-gradient-to-r from-black from-23% to-red-700 gap-20  text-white font-poppins'>
        <div className={`${currentpath === '/' ? 'font-bold' : 'font-normal'}`}>HOME</div>
        <div className={`${isCurrentPath('/about') ? 'font-bold' : 'font-normal'}`}>ABOUT US</div>
        <div className={`${isCurrentPath('/events') ? 'font-bold' : 'font-normal'}`}>EVENTS</div>
        <div className={`${isCurrentPath('/getInvolved') ? 'font-bold' : 'font-normal'}`}>Get Involved</div>
        <div className={`${isCurrentPath('/FAQ') ? 'font-bold' : 'font-normal'}`}>FAQ</div>
        <div className={`${isCurrentPath('/meetTheTeam') ? 'font-bold' : 'font-normal'}`}>Meet the Team</div>
        <div className={`${isCurrentPath('/contact') ? 'font-bold' : 'font-normal'}`}>CONTACT</div>
        <div></div>
      </div>
    </div>
  )
}

export default NavigationBar 