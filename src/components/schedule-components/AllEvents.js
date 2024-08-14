import React, { useMemo } from 'react';
import ScheduleRow from './ScheduleRow';
import { getMinutesAfterMidnight } from '../../helpers/getMinutesAfterMidnight';

const AllEvents = ({ eventRows }) => {
  const findStartTime = (eventRow) => {
    return eventRow.events.reduce((min, current) => {
      return getMinutesAfterMidnight(current.startTime) <
        getMinutesAfterMidnight(min.startTime)
        ? current
        : min;
    }, eventRow.events[0]).startTime;
  };
  const findEndTime = (eventRow) => {
    return eventRow.events.reduce((max, current) => {
      return getMinutesAfterMidnight(current.startTime) >
        getMinutesAfterMidnight(max.startTime)
        ? current
        : max;
    }, eventRow.events[0]).endTime;
  };

  const sortedRows = useMemo(() => {
    const rows = [...eventRows];
    if (!eventRows.length) return;
    rows.sort(
      (a, b) =>
        getMinutesAfterMidnight(findStartTime(a)) -
        getMinutesAfterMidnight(findStartTime(b))
    );
    return rows;
  }, [eventRows]);

  const shadow = {
    boxShadow: `
        0px -20px 40px #E91C24,      
        20px 0px 40px #E91C24,        
        -20px 0px 40px #E91C24        
  `,
  };

  return (
    <div className="grid mb-48 place-items-center">
      <div className="bg-[#111] w-[95%] md:w-[70%] z-10" style={shadow}>
        {sortedRows
          ? sortedRows.map((element, index) => {
              return (
                <ScheduleRow
                  key={element.id}
                  eventRow={element}
                  startTime={findStartTime(element)}
                  endTime={findEndTime(element)}
                  index={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllEvents;
