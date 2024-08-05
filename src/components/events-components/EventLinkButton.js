import React from 'react';
import linkImage from '../../images/LinkIcon.png';
import { toast } from 'react-toastify';
const EventLinkButton = () => {
  const handleCopy = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Copied link to clipboard', {
        theme: 'colored',
        position: 'bottom-right',
      });
    } catch (error) {
      toast.error('Unable to copy to clipboard', {
        theme: 'colored',
        position: 'bottom-right',
      });
    }
  };
  return (
    <div>
      <div
        className="w-12 h-12 bg-[#d9d9d986] active:bg-black hover:bg-[#ffffff3b] transition-all ease-out duration-200 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => handleCopy(window.location.href)}
      >
        <img alt="Copy a link button" src={linkImage} className="w-8 h-8" />
      </div>
    </div>
  );
};

export default EventLinkButton;
