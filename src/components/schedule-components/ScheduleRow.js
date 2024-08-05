import React from 'react';
import EventBlock from './EventBlock';

const ScheduleRow = ({ startTime, endTime, eventRow, index }) => {
  const getTime = (time) => {
    try {
      let hours = time.split(':')[0];
      let mins = time.split(':')[1].slice(0, 2);
      let period = time.split(':')[1].slice(-2).toLowerCase();

      let totalTimePastMidnight = 0;

      totalTimePastMidnight += period === 'pm' && hours !== 12 && 12 * 60;

      totalTimePastMidnight += parseInt(hours) * 60;
      totalTimePastMidnight += parseInt(mins);

      return totalTimePastMidnight;
    } catch (err) {
      return 0;
    }
  };

  const time = getTime(endTime) - getTime(startTime);

  return (
    <div
      className={`m-10 text-white  grid-cols-1 flex ${
        index === 0 ? 'pt-20' : ''
      }`}
    >
      <div
        className="flex flex-col justify-between text-nowrap"
        style={{ minHeight: `${time * 2}px` }}
      >
        <p className="w-[100px] text-lg">
          {startTime.substr(0, startTime.length - 2) +
            ' ' +
            startTime.substr(-2).toUpperCase()}
        </p>
        <p className={`relative bottom-[-${time}px] text-lg`}>
          {endTime.substr(0, endTime.length - 2) +
            ' ' +
            endTime.substr(-2).toUpperCase()}
        </p>
      </div>
      <div>
        <EventBlock
          events={eventRow.events}
          rangeStart={startTime}
          rangeTime={time}
        />
      </div>
    </div>
  );
};

export default ScheduleRow;
