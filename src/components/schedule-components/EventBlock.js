import React from "react";
import { useState } from "react";

const EventBlock = ({ events, rangeStart, rangeTime }) => {
  
  const getTime = (time) => {
    try{
      let hours = time.split(':')[0]
      let mins = time.split(":")[1].slice(0,2)
      let period = time.split(":")[1].slice(-2).toLowerCase();
      
      let totalTimePastMidnight = 0
  
      totalTimePastMidnight += period === "pm" && hours!==12 && 12*60
  
      totalTimePastMidnight += parseInt(hours)*60
      totalTimePastMidnight += parseInt(mins)
      
      return totalTimePastMidnight
    }
    catch (err){
      return 0;
    }
    
  };


  
  const timeClassName = "h-full text-white border-l-2 border-l-white p-[20px] hover:border-l-red hover:border-l-4 hover:border-l-red-500 hover:text-red-500 hover:scale-105 transition-transform duration-500 ease-in-out flex-1";


  const fullEvents = events.filter(obj => getTime(obj.startTime) === getTime(rangeStart) && getTime(obj.endTime) === getTime(rangeStart) + rangeTime)

  const shortEvents = events.filter(obj => getTime(obj.startTime) !== getTime(rangeStart) || getTime(obj.endTime) !== getTime(rangeStart) + rangeTime)

  
  
  const [insideHovering, setInsideHovering] = useState(false)
  return (
    // each column of events?
    <div className="flex grid-cols-1 h-full">
      {fullEvents.map((element,index) => {
        // each event
        
        if (index < shortEvents.length) {
          return (
            <div key={element.id} className={insideHovering ? "text-white border-l-2 border-l-white p-[20px] transition-transform duration-500 ease-in-out flex-1 flex-1" : timeClassName }>
              <h1 className="font-bold text-lg">{element.displayTitle}</h1>
              <h1 className="text-xs">{element.description}</h1>
              <h1 className="text-sm flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 pr-[2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>{element.location}</h1>

              <div
                onMouseEnter={() => {setInsideHovering(true)}}
                onMouseLeave ={() => {setInsideHovering(false)}}
                key={shortEvents[index].id}
                style={{'minHeight' : `${(getTime(shortEvents[index].endTime) - getTime(shortEvents[index].startTime))*2}px`}}
                className=" text-white border-2-white border-l-2 border-l-white p-[20px] mt-[20px] hover:border-l-red hover:border-l-4 hover:border-l-red-500 hover:text-red-500 hover:scale-105 transition-transform duration-500 ease-in-out flex-1"
              >
                <h1 className="font-bold text-lg">
                  {shortEvents[index].displayTitle}
                </h1>
                <h1 className="text-xs">{shortEvents[index].description}</h1>
                <h1 className="text-sm flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 pr-[2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {shortEvents[index].location}
                </h1>
              </div>
            </div>
          );
        } else {
         
          return (
            <div key={element.id} className={timeClassName}>
              <h1 className="font-bold text-lg">{element.displayTitle}</h1>
              <h1 className=" text-xs">{element.description}</h1>
              <h1 className="text-sm flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 pr-[2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>{element.location}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EventBlock;
