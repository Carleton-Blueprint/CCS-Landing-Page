import React from 'react';
import EventBlock from './EventBlock';
import { getMinutesAfterMidnight } from '../../helpers/getMinutesAfterMidnight';

const ScheduleRow = ({ startTime, endTime, eventRow, index }) => {
  const time =
    getMinutesAfterMidnight(endTime) - getMinutesAfterMidnight(startTime);

  return (
    <div
      className={`my-10 sm:ml-10 ml-3 text-white grid-cols-1 flex ${
        index === 0 ? 'pt-20' : ''
      }`}
    >
      <div
        className="flex flex-col justify-between text-nowrap"
        style={{ minHeight: `${time * 2}px` }}
      >
        <p className="sm:w-[100px] text-sm sm:text-lg">
          {startTime.substr(0, startTime.length - 2) +
            ' ' +
            startTime.substr(-2).toUpperCase()}
        </p>
        <p className={`relative bottom-[-${time}px] text-sm sm:text-lg pr-2`}>
          {endTime.substr(0, endTime.length - 2) +
            ' ' +
            endTime.substr(-2).toUpperCase()}
        </p>
      </div>
      <EventBlock
        events={eventRow.events}
        rangeStart={startTime}
        rangeTime={time}
      />
    </div>
  );
};

export default ScheduleRow;
