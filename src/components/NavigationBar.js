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
    <div className='container'>
      <div>{currentpath}</div>
      <div className='container flex gap-10'>
        <div className={`${currentpath === '/' ? 'font-bold' : 'font-normal'}`}>Home</div>
        <div className={`${isCurrentPath('/about') ? 'font-bold' : 'font-normal'}`}>About</div>
        <div className={`${isCurrentPath('/events') ? 'font-bold' : 'font-normal'}`}>Events</div>
        <div className={`${isCurrentPath('/getInvolved') ? 'font-bold' : 'font-normal'}`}>Get Involved</div>
        <div className={`${isCurrentPath('/FAQ') ? 'font-bold' : 'font-normal'}`}>FAQ</div>
        <div className={`${isCurrentPath('/meetTheTeam') ? 'font-bold' : 'font-normal'}`}>Meet the Team</div>
        <div className={`${isCurrentPath('/contact') ? 'font-bold' : 'font-normal'}`}>Contact</div>
      </div>
    </div>
  )
}

export default NavigationBar 