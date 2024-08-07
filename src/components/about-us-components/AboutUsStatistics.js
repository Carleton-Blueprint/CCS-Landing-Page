import React from 'react';
import Statistic from './Statistic';

const AboutUsStatistics = (props) => {
  return (
    <div className="w-full">
      <div className="relative h-[170vh] sm:h-[60vh] lg:h-[80vh] w-full overflow-hidden bg-gradient-to-br from-red-600 to-black flex justify-center p-20">
        <div className="w-full h-full absolute transform -translate-y-[80px] bg-gradient-to-b from-white to-30% z-10"></div>
        <div className="absolute top-1/4 w-[92%] lg:w-fit h-fit bg-white bg-opacity-75 rounded-[80px] p-5 z-50">
          <div className="flex flex-col items-center justify-center p-10 bg-opacity-80 rounded-xl ">
            <p className="text-2xl font-bold sm:text-4xl">
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
