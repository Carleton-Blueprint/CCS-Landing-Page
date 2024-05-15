import React from "react";
import decadron from "../../images/decadron.png";
import { GatsbyImage } from "gatsby-plugin-image";

const AttendReason = (props) => {
  return (
    <div className="flex flex-wrap w-full h-full relative">
      {/* <div
        className={`bg-cover bg-center h-64 w-64 rounded-lg drop-shadow-md items-center justify-center ${props.brightness}`} 
        style={{ backgroundImage: `url(${decadron})` }}
      >
        <p className="text-center pt-10 text-white">
          <strong>{props.title}</strong>
        </p>
        <p className="text-center px-4 py-4 pt-4 text-white">
          {props.subtitle}
        </p>
      </div> */}

      <img
        className={`object-cover object-center  rounded-lg drop-shadow-md ${props.brightness}`}
        src={decadron}
        alt={props.title}
      />
      <div class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center`}>
        <h2 class="text-xl font-bold">{props.title}</h2>
        <br/>
        <p class="text-base">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default AttendReason;
