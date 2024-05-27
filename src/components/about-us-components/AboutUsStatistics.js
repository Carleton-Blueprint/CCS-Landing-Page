import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
  console.log(props.stats);

  return (
    <div className="bg-gradient-to-r from-red-500 to-black h-screen w-screen text-center">
      <div className="inline-block bg-white bg-opacity-60 rounded-xl p-10">
        <p className="text-lg font-bold">
          Statistics of Carleton delegation at CUSEC
        </p>
        <div className="flex justify-between">
          {props.stats.map((stat) => {
            return(<Statistic
              key={stat.id}
              top={stat.subtitle1}
              bottom={stat.bottomSubtitle}
              stat={stat.statistic}
            />);
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
