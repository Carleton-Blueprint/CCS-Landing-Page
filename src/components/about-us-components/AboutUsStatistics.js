import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
  console.log(props.stats);

  return (
    <div>
      <div className=" w-screen bg-gradient-to-br from-red-600 to-black flex justify-center p-20">
        <div className="w-full h-full absolute transform -translate-y-[80px] bg-gradient-to-b from-white to-30% z-10"></div>
        <div className="text-center w-fit bg-white bg-opacity-75 rounded-[80px] p-5 z-50">
          <div className="inline-block bg-opacity-80 rounded-xl p-10 ">
            <p className="text-4xl font-bold">
              Statistics of Carleton delegation at CUSEC
            </p>
            <div className="flex w-full justify-evenly">
              {props.stats.map((stat,index) => {
                return(<div><Statistic
                  key={stat.id}
                  index={index}
                  top={stat.subtitle1}
                  bottom={stat.bottomSubtitle}
                  stat={stat.statistic}
                /></div>);
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>  
  );
};

export default Statistics;
