import React from 'react';
import { useState } from 'react';
import { LocationIcon } from '../../SVGs/LocationIcon';
import { parse, getHours, getMinutes } from 'date-fns';

const EventBlock = ({ events, rangeStart, rangeTime }) => {
  const [insideHovering, setInsideHovering] = useState(false);

  const getTime = (time) => {
    try {
      let hours = time.split(':')[0];
      let mins = time.split(':')[1].slice(0, 2);
      let period = time.split(':')[1].slice(-2).toLowerCase();

      let totalTimePastMidnight = period === 'pm' ? 720 : 0;

      totalTimePastMidnight += parseInt(hours) * 60;
      totalTimePastMidnight += parseInt(mins);
      return totalTimePastMidnight;
    } catch (err) {
      return 0;
    }
  };

  const calculateHeight = () => {
    return `${rangeTime * 2.5}px`;
  };

  const fullEvents = events.filter(
    (obj) =>
      getTime(obj.startTime) === getTime(rangeStart) &&
      getTime(obj.endTime) === getTime(rangeStart) + rangeTime
  );

  const shortEvents = events.filter(
    (obj) =>
      getTime(obj.startTime) !== getTime(rangeStart) ||
      getTime(obj.endTime) !== getTime(rangeStart) + rangeTime
  );

  return (
    // each column of events
    <div className="flex w-full h-full grid-cols-1 sm:ml-0">
      {fullEvents.map((element, index) => {
        if (index < shortEvents.length) {
          return (
            <div
              key={element.id}
              className="text-white border-l-2 border-l-white p-[20px] transition-transform duration-500 
              ease-in-out flex-1 relative hover:border-l-red hover:border-l-4 hover:border-l-red-500 hover:text-red-500 
              hover:scale-105"
              style={{ minHeight: calculateHeight() }}
            >
              <h1 className="text-lg font-bold">{element.displayTitle}</h1>
              <h1 className="text-xs">{element.description}</h1>
              <h1 className="flex text-sm">
                <div className="w-[20px]">
                  <LocationIcon />
                </div>
                {element.location}
              </h1>

              <div
                key={shortEvents[index].id}
                style={{
                  minHeight: `${
                    (getTime(shortEvents[index].endTime) -
                      getTime(shortEvents[index].startTime)) *
                    2.5
                  }px`,
                }}
                className="text-white border-2-white border-l-2 
                border-l-white p-[20px] mt-[20px] hover:border-l-red hover:border-l-4 
                hover:border-l-red-500 hover:text-red-500 hover:scale-105 
                transition-transform duration-500 ease-in-out flex-1"
              >
                <h1 className="text-lg font-bold">
                  {shortEvents[index].displayTitle}
                </h1>
                {shortEvents[index].description ? (
                  <h1 className="p-3 text-xs">
                    {shortEvents[index].description}
                  </h1>
                ) : null}
                <h1 className="flex text-sm">
                  <div className="w-[20px]">
                    <LocationIcon />
                  </div>
                  {shortEvents[index].location}
                </h1>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={element.id}
              className="text-white w-1/2 border-l-2 border-l-white p-[20px] hover:border-l-red 
                  hover:border-l-4 hover:border-l-red-500 hover:text-red-500 
                  hover:scale-105 transition-transform duration-500 ease-in-out flex-1"
              style={{ minHeight: calculateHeight() }}
            >
              <h1 className="text-lg font-bold">{element.displayTitle}</h1>
              <h1 className="text-xs ">{element.description}</h1>
              <h1 className="flex text-sm">
                <div className="w-[20px]">
                  <LocationIcon />
                </div>
                {element.location}
              </h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EventBlock;
