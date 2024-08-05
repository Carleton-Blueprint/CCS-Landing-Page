import React, { useMemo } from 'react';
import ScheduleRow from './ScheduleRow';

const AllEvents = ({ eventRows }) => {
  const getTime = (time) => {
    try {
      let hours = time.split(':')[0];
      let mins = time.split(':')[1].slice(0, 2);
      let period = time.split(':')[1].slice(-2).toLowerCase();

      let totalTimePastMidnight = period === 'pm' && hours != '12' ? 720 : 0;

      totalTimePastMidnight += parseInt(hours) * 60;
      totalTimePastMidnight += parseInt(mins);

      return totalTimePastMidnight;
    } catch (err) {
      return 0;
    }
  };
  const findStartTime = (eventRow) => {
    return eventRow.events.reduce((min, current) => {
      return getTime(current.startTime) < getTime(min.startTime)
        ? current
        : min;
    }, eventRow.events[0]).startTime;
  };
  const findEndTime = (eventRow) => {
    return eventRow.events.reduce((max, current) => {
      return getTime(current.startTime) > getTime(max.startTime)
        ? current
        : max;
    }, eventRow.events[0]).endTime;
  };

  const sortedRows = useMemo(() => {
    const rows = [...eventRows];
    if (!eventRows.length) return;
    rows.sort((a, b) => getTime(findStartTime(a)) - getTime(findStartTime(b)));
    console.log(getTime(findStartTime(rows[rows.length - 1])));
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
    <div className="grid mb-24 place-items-center">
      <div
        className="bg-[#111] w-[95%] md:w-[70%] min-h-screen z-10"
        style={shadow}
      >
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
