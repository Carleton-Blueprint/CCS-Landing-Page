import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import AllEvents from '../components/schedule-components/AllEvents';
import { graphql } from 'gatsby';
import greyBackground from '../images/schedule-title-background.png';
import background from '../images/schedule-header.svg';
import Layout from '../components/base/Layout';
import HeaderWithSubtitle from '../components/base/HeaderWithSubtitle';
import {
  SchedulerLeftArrow,
  SchedulerRightArrow,
} from '../SVGs/scheduler-SVGs';
const Schedule = ({ data, location }) => {
  const [date, setDate] = useState(1);
  const [currentEvents, setCurrentEvents] = useState([]);

  const allEvents = [...data.allContentfulScheduleRow.nodes];

  useEffect(() => {
    const currentDate = new Date(dates[date - 1]);
    const currentEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === currentDate.getFullYear() &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getDate() === currentDate.getDate()
      );
    });
    setCurrentEvents(currentEvents);
  }, [date]);

  //don't calculate the dates available after the initial mount
  const dates = useMemo(
    () =>
      [...new Set(allEvents.map((item) => item.date))].sort(
        (a, b) => new Date(a) - new Date(b)
      ),
    []
  );

  dates.sort((a, b) => new Date(a) - new Date(b));

  const formatDate = (dateString) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    function getOrdinalSuffix(day) {
      if (day > 3 && day < 21) return 'th'; // handle 11th, 12th, 13th
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }

    const [_, month, day] = dateString.split('-');
    const monthString = months[parseInt(month, 10) - 1];
    const dayNumber = parseInt(day, 10);
    const dayWithSuffix = dayNumber + getOrdinalSuffix(dayNumber);

    return `${monthString} ${dayWithSuffix}`;
  };

  const arrowShadow = {
    boxShadow: `
            1px 1px 3px #000000,
            -1px -1px 2px #AAAAAA`,
  };
  // bc schedule header is disabled
  const dayNumber = date;
  return (
    <div className="bg-gradient-to-b from-60% from-black to-[#5F0B0F]">
      <Layout pathname={location.pathname}>
        <HeaderWithSubtitle
          title="Schedule"
          subtitle="CUSEC 2024"
          background={background}
        />
        <div className="relative">
          <div
            className="sticky top-0 z-[99] flex justify-center w-full p-8 mt-[-20px] bg-bottom items-align"
            style={{
              'background-image': `url(${greyBackground})`,
              'background-size': '100% 100%',
            }}
          >
            <button
              onClick={() => setDate((prevDate) => prevDate - 1)}
              className={`absolute left-10 sm:left-20 rounded-full p-2
                ${dayNumber > 1 ? '' : 'hidden'}

              `}
              style={arrowShadow}
            >
              <SchedulerLeftArrow />
            </button>
            <div className="">
              <h1 className="text-3xl font-bold text-center text-white">
                Day {dayNumber}
              </h1>
              <h1 className="text-xl text-center text-white">
                {formatDate(dates[date - 1])}
              </h1>
            </div>
            <button
              onClick={() => setDate(date + 1)}
              className={`absolute right-10 sm:right-20 rounded-full p-2
                ${dayNumber < 3 ? '' : 'hidden'}
              `}
              style={arrowShadow}
            >
              <SchedulerRightArrow />
            </button>
          </div>
          <div className="mt-[-50px]">
            <AllEvents eventRows={currentEvents} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulScheduleRow {
      nodes {
        id
        date(formatString: "YYYY-MM-DD")
        events {
          id
          displayTitle
          startTime
          endTime
          location
          description
          date
        }
      }
    }
  }
`;

export default Schedule;
