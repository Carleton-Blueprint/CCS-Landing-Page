import React from 'react';

const ErrorIcon = () => {
  return (
    <div className=''>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"  // Adjust the size as needed
        height="24" // Adjust the size as needed
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8E6C6A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icon-tabler-alert-circle"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    </div>
  );
};

export default ErrorIcon;
