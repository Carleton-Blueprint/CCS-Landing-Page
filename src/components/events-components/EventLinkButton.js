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
        className='w-10 h-10 bg-[#d9d9d986] lg:w-24 lg:h-24 rounded-full flex items-center justify-center scale-50'
        onClick={() => handleCopy(window.location.href)}
        >
            <img alt="copy event link" src={linkImage}/>

        </div>

    </div>
  )
}

export default EventLinkButton