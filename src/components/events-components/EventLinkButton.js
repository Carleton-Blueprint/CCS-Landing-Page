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
    <button
      className=" appearance-none w-12 h-12 bg-[#ffffff3b] active:bg-black hover:bg-darkGrey transition-all ease-out duration-200 rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => handleCopy(window.location.href)}
      aria-label="copy event link"
    >
      <img alt="Copy a link button" src={linkImage} className="w-8 h-8" />
    </button>
  );
};

export default EventLinkButton;
