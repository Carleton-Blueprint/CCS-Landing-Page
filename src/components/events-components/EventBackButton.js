import React from 'react'
import { Link } from 'gatsby';
const EventBackButton = () => {
  return (
    <div>
      <Link to='/events/'>
        <div className='w-10 h-10 bg-[#d9d9d986] lg:w-24 lg:h-24 rounded-full flex items-center justify-center scale-50'>
        <svg width="26" height="46" viewBox="0 0 26 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615223 21.1421 0.615223 19.9706 1.7868L0.87868 20.8787ZM4 20H3L3 26H4L4 20Z" fill="white" fill-opacity="0.8"/>
        </svg>

        </div>
      </Link>
    </div>
  )
}

export default EventBackButton
