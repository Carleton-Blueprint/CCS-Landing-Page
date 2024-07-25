import React from 'react'

const MobileEvent = ({title, description, location, startTime,endTime, index}) => {
  return (
    <div className='flex flex-col'>
        
      <div className='text-white text-3xl font-poppins font-medium'>{title}</div>
      <div className='flex justify-evenly pt-3'>
        <div className='text-white text-lg font-poppins'>Starts: {startTime}</div>
        <div className='text-white text-lg font-poppins'>Ends: {endTime}</div>
        </div>
      <div className='flex'>
     
        <div className='text-white text-xl font-poppins pt-3'>Location: {location}</div>
      </div>
      
        <div className='text-white text-base font-poppins'>About:</div>
        <div className='text-white text-base font-poppins'>{description}</div>
        
    </div>
  )
}

export default MobileEvent
