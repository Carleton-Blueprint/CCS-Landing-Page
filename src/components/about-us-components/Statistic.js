import React from "react";
import {motion } from "framer-motion"
import { useRef } from 'react';
const Statistic = (props) => {
  const textBoxValue = useRef(parseFloat(props.stat)/100)

  return (
    <div className="text-center w-[250px] p-4 flex flex-col items-center">
    <p className=" font-bold text-[#685353]">{props.top}</p>
      <div
        className="relative bg-gradient-to-b from-white to-[--lightergray] from-50% rounded-full p-8 w-36 h-36 m-4 shadow-dark-bottom">
        <div className="flex justify-center items-center h-full bg-white shadow-inner-top border-red-200 border-4 rounded-full p-4">
          <p className="text-[--red] font-bold text-xl ">{props.stat}%</p>
        </div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <>
              <div className='w-32 h-32'>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-7.5 -7.5 192 192">
                  <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: 'var(--red)', stopOpacity: 1 }} />
                      </linearGradient>
                  </defs>
                  <motion.path
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: textBoxValue.current}}
                      transition={{ 
                        type: 'spring',   
                        stiffness: 80,  
                        damping: 12, 
                        duration:0.5,
                        delay: props.index * 0.1
                      }} 
                      d="m88,5C42.12,5.27,5,42.54,5,88.49s37.38,83.5,83.5,83.5,83.5-37.38,83.5-83.5S134.88,5.27,89,5" 
                      className='fill-none'
                      stroke="url(#gradient1)"
                      strokeLinecap='round'
                      strokeLinejoin='round'        
                      strokeWidth='15px'
                  />
              </svg>

              </div>
              
            </>
        </div>
      </div>
      <p className=" text-[#685353] font-bold">{props.bottom}</p>

      
    </div>
  );
};

export default Statistic;
