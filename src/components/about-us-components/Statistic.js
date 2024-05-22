import React from "react";

const Statistic = (props) => {
    console.log(props)
  const styles = {
    partialBorder: {
      // Create a partial border using a conic gradient
      background: "conic-gradient(from 180deg, transparent "+props.stat+"%, white 0), linear-gradient(to right, red, black)",
      boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div className="text-center w-[200px] p-4">
    <p>{props.top}</p>
      <div
        className="inline-block bg-white rounded-full p-8 border border-white border-8 w-36 h-36 m-4"
        style={styles.partialBorder}
        >
        <div className="flex justify-center items-center h-full bg-white border border-red-200 border-4 rounded-full p-4">
          <p className="text-red-500 font-bold text-xl">{props.stat}%</p>
        </div>
      </div>
      <p>{props.bottom}</p>
    </div>
  );
};

export default Statistic;
