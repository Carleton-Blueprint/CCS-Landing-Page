import React from 'react'
import ig from '../../images/igicon.png'
import email from '../../images/emailicon.png'
import linkedin  from '../../images/linkedinicon.png'
import phone from '../../images/phoneicon.png'
import logo1 from '../../images/carletonlogo.png'
import logo2 from '../../images/cuseclogo.png'


const Footer = (props) => {
  return (
    <div className=' flex flex-col'>
    <div className= "bg-[url('../images/Footerbackground.png')] w-full h-80">
      <div className= 'flex justify-center'>
        <div className='flex justify-center'>
        <div>
          <img src ={ig} alt="instagram"></img>
        </div>
        <div>
          <img src ={email} alt="mail"></img>
        </div>
        <div>
          <img src ={linkedin} alt ="linkedin"></img>
        </div>
        <div>
          <img src ={phone} alt="call"></img>
        </div> 
        </div>
        <div className ='flex justify-center items-center'>
        <div>
          <img src ={logo1} alt="carletonlogo"></img>
        </div>
        <div>
          <img src ={logo2} alt="cuseclogo"></img>
        </div>
        </div>
        
     
      </div>
     
    </div>
    </div>

  )
}

export default Footer
