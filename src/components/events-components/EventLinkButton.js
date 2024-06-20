import React from 'react'
import { Link } from 'gatsby'
import linkImage from '../../images/LinkIcon.png'
const EventLinkButton = () => {
  return (
    <div>
      <Link to='/events/'>
        <div className='w-10 h-10 bg-[#d9d9d986] lg:w-24 lg:h-24 rounded-full flex items-center justify-center scale-50'>
        
            <img src={linkImage}/>

        </div>
      </Link>
    </div>
  )
}

export default EventLinkButton