import React from 'react';
import Statistic from './Statistic';

const Statistics = (props) => {
  return (
    <div className="w-full">
      <div className="relative h-[200vh] lg:h-[80vh] w-full overflow-hidden bg-gradient-to-br from-red-600 to-black flex justify-center p-20">
        <div className="w-full h-full absolute transform -translate-y-[80px] bg-gradient-to-b from-white to-30% z-10"></div>
        <div className="absolute top-1/4 w-fit h-fit bg-white bg-opacity-75 rounded-[80px] p-5 z-50">
          <div className="flex flex-col justify-center items-center bg-opacity-80 rounded-xl p-10 ">
            <p className="text-4xl font-bold">
              Statistics of Carleton delegation at CUSEC
            </p>
            <div className="flex flex-col md:flex-row w-full justify-evenly">
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

export default Statistics;
