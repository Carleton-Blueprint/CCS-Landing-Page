import React from 'react'

import linkImage from '../../images/LinkIcon.png'
const EventLinkButton = () => {
    const handleCopy = async (content) => {
        try {
          await navigator.clipboard.writeText(content);
          console.log('Copied to clipboard:', content);
        } catch (error) {
          console.error('Unable to copy to clipboard:', error);
        }
      };
  return (
    <div>
        <div 
        className='w-12 h-12 bg-[#d9d9d986] rounded-full flex items-center justify-center cursor-pointer'
        onClick={() => handleCopy(window.location.href)}
        
        >
        
            <img src={linkImage} className='h-8 w-8'/>

        </div>

    </div>
  )
}

export default EventLinkButton