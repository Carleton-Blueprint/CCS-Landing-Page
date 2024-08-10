import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Springy from '../animation-wrappers/Springy';

const Statistic = (props) => {
  const textBoxValue = useRef(parseFloat(props.stat) / 100);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-4 text-center">
      <p className="font-bold text-[#685353]">{props.top}</p>
      <Springy magnitude="3">
        <div className="relative rounded-full p-8 m-4 shadow-dark-bottom bg-gradient-to-b from-white to-[#d6d6d6] from-50% ">
          <div className="flex items-center justify-center h-full p-4 bg-white border-4 border-red-200 rounded-full shadow-inner-top">
            <p className="text-xl font-bold text-red-500">{props.stat}%</p>
          </div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div ref={ref} className="w-32 h-32">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-7.5 -7.5 192 192"
              >
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: 'black', stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: 'red', stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={
                    isInView
                      ? { pathLength: textBoxValue.current }
                      : { pathLength: 0 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 80,
                    damping: 12,
                    duration: 0.5,
                    delay: isInView ? props.index * 0.25 : 0,
                  }}
                  d="m88,5C42.12,5.27,5,42.54,5,88.49s37.38,83.5,83.5,83.5,83.5-37.38,83.5-83.5S134.88,5.27,89,5"
                  className="fill-none"
                  stroke="url(#gradient1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="15px"
                />
              </svg>
            </div>
          </div>
        </div>
      </Springy>
      <p className="text-[#685353] font-bold">{props.bottom}</p>
    </div>
  );
};

export default Statistic;
