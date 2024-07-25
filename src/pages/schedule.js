import React from 'react';
import { useState, useEffect } from 'react';
import AllEvents from '../components/schedule-components/AllEvents';
import { graphql } from 'gatsby';

import greyBackground from '../images/schedule-title-background.png';
import background from '../images/get-involved-header.svg';
import MobileSchedule from '../components/schedule-components/MobileSchedule';
import Layout from '../components/base/Layout';
import HeaderWithSubtitle from '../components/base/HeaderWithSubtitle';

const Schedule = ({ data, location }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    } else {
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function immediately to set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const currentDate = new Date();
  const futureEvents = data.allContentfulScheduleRow.nodes.filter(
    (event) => new Date(event.date) >= currentDate
  );

  const [date, setDate] = useState(1);

  const dates = [
    ...new Set(data.allContentfulScheduleRow.nodes.map((item) => item.date)),
  ];
  dates.sort((a, b) => new Date(a) - new Date(b));
  const events = futureEvents.filter((event) => event.date === dates[date - 1]);
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
    <Layout pathname={location.pathname}>
      <HeaderWithSubtitle
        title="Schedule"
        subtitle="CUSEC 2024"
        background={background}
      />
      <div className="relative">
        <div
          className="sticky top-0 z-[100] flex justify-center w-full p-8 mt-[-2] bg-bottom items-align"
          style={{
            'background-image': `url(${greyBackground})`,
            'background-size': '100% 100%',
          }}
        >
          <button
            onClick={() => setDate(date - 1)}
            className={
              dayNumber > 1
                ? 'absolute left-20 rounded-full p-2'
                : 'absolute left-20 rounded-full p-2 hidden'
            }
            style={arrowShadow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
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
            className={
              dayNumber < 3
                ? 'absolute right-20 rounded-full p-2'
                : 'absolute right-20 rounded-full p-2 hidden'
            }
            style={arrowShadow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="mt-[-50px]">
          {width <= 768 ? (
            <MobileSchedule eventRows={events} />
          ) : (
            <AllEvents eventRows={events} />
          )}
        </div>
      </div>
    </Layout>
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
