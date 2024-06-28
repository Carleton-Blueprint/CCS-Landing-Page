import React from "react";
import { useState } from "react";

const EventBlock = ({ events, rangeStart, rangeTime }) => {
  console.log(events);
  const getTime = (time) => {
    // let times = time.split(':')
    let times = ["9", "30am"];
    return parseInt(times[0]) + times[1].substr(0, 2) / 60;
  };


  let timeClassName =
    "h-[" + rangeTime + "px] text-white border-l-2 border-l-white p-[20px]";
  timeClassName = "h-[200px] text-white border-l-2 border-l-white p-[20px] hover:border-l-red hover:border-l-4 hover:border-l-red-500 hover:text-red-500 hover:scale-105 transition-transform duration-500 ease-in-out";

  events.sort(function (e1, e2) {
    return getTime(e1.startTime) - getTime(e2.startTime);
  });
  const spliceIndex = events.findIndex((e) => {
    return (e.startTime = rangeStart);
  });
  const fullEvents = events.toSpliced(spliceIndex);
  const shortEvents = events.slice(spliceIndex);
  let index = -1;
  console.log(fullEvents, shortEvents);

  const [insideHovering, setInsideHovering] = useState(false)
  return (
    // each column of events?
    <div className="flex grid-cols-1 ">
      {fullEvents.map((element) => {
        // each event
        index++;
        if (index < shortEvents.length) {
          return (
            <div key={element.id} className={insideHovering ? "h-[200px] text-white border-l-2 border-l-white p-[20px] transition-transform duration-500 ease-in-ou" : timeClassName }>
              <h1 className="font-bold text-lg">{element.title}</h1>
              <h1 className="text-sm">{element.desciption}</h1>
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
                className="text-white border-2-white border-l-2 border-l-white p-[20px] mt-[20px] hover:border-l-red hover:border-l-4 hover:border-l-red-500 hover:text-red-500 hover:scale-105 transition-transform duration-500 ease-in-ou"
              >
                <h1 className="font-bold text-lg">
                  {shortEvents[index].title}
                </h1>
                <h1 className="text-sm">{shortEvents[index].desciption}</h1>
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
          index++;
          return (
            <div key={element.id} className={timeClassName}>
              <h1 className="font-bold text-lg">{element.title}</h1>
              <h1 className="text-sm">{element.desciption}</h1>
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
