import React from 'react';
import Statistic from './Statistic';

const AboutUsStatistics = (props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full py-20 overflow-hidden bg-gradient-to-br from-red-600 to-black">
        <div className="h-[50%] w-full absolute transform -translate-y-[80px] bg-gradient-to-b from-white to-30% z-10"></div>
        <div
          className="w-[92%] lg:w-fit h-fit bg-white bg-opacity-75 
        rounded-[80px] p-5 z-50 transition-transform hover:animate-growShrink"
        >
          <div className="flex flex-col items-center justify-center p-10 bg-opacity-80 rounded-xl ">
            <p className="text-2xl font-bold text-center sm:text-3xl lg:text-4xl">
              Statistics of Carleton delegation at CUSEC
            </p>
            <div className="flex flex-col w-full md:flex-row justify-evenly">
              {props.stats.length
                ? props.stats.map((stat, index) => {
                    return (
                      <div>
                        <Statistic
                          key={stat.id}
                          index={index}
                          top={stat.subtitle1}
                          bottom={stat.bottomSubtitle}
                          stat={stat.statistic}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStatistics;
