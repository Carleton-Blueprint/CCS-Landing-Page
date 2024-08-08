import React, { useState, useEffect, useRef } from 'react';
import EventBlock from '../components/events-components/EventBlock';
import EventsTitle from '../components/events-components/EventsTitle';
import { graphql } from 'gatsby';
import { Seo } from '../components/base/Seo';
import Layout from '../components/base/Layout';
import Bubble from '../components/animation-wrappers/Bubble';
const Events = (props) => {
  const eventsData = props.data.allContentfulFeaturedEvent.nodes;
  const isMobile = !window ? true : window.innerWidth <= 768;
  const [availableEvents, setAvailableEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [renderingPresent, setRenderingPresent] = useState(true);
  const [academicYears, setAcademicYears] = useState([]);
  const [selectedYearEvents, setSelectedYearEvents] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Int');
          setIsInView(true);
        } else {
          console.log('Out');
          setIsInView(false);
        }
      },
      { threshold: 0.8 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  // get academic year of any date
  const getAcademicYear = (date) => {
    const year = parseInt(date.substring(0, 4), 10);
    const month = parseInt(date.substring(5, 7), 10);
    if (month >= 9) {
      return `${year}-${year + 1}`;
    } else {
      return `${year - 1}-${year}`;
    }
  };

  const currentISODate = new Date().toISOString().substring(0, 10);
  const currentAcademicYear = getAcademicYear(currentISODate);
  const [selectedYear, setSelectedYear] = useState(currentAcademicYear);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for today

    const academicYearSet = new Set();

    eventsData.forEach((event) => {
      const year = getAcademicYear(event.startDate);
      academicYearSet.add(year);
    });
    setAcademicYears(Array.from(academicYearSet).sort());

    const startDate = new Date(selectedYear.substring(0, 4), 8, 1);
    const endDate = new Date(selectedYear.substring(5, 9), 7, 31);

    const filteredEventsYear = eventsData.filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate >= startDate && eventDate <= endDate;
    });

    filteredEventsYear.sort((a, b) => {
      const dateOfEventA = new Date(a.startDate);
      const dateOfEventB = new Date(b.startDate);
      return Math.abs(dateOfEventA - today) - Math.abs(dateOfEventB - today);
    });

    setSelectedYearEvents(filteredEventsYear);

    const filteredEventsFuture = filteredEventsYear.filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate >= today;
    });

    filteredEventsFuture.sort((a, b) => {
      const dateOfEventA = new Date(a.startDate);
      const dateOfEventB = new Date(b.startDate);
      return Math.abs(dateOfEventA - today) - Math.abs(dateOfEventB - today);
    });

    setAvailableEvents(filteredEventsFuture);

    const filteredEventsPast = filteredEventsYear.filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate < today;
    });

    filteredEventsPast.sort((a, b) => {
      const dateOfEventA = new Date(a.startDate);
      const dateOfEventB = new Date(b.startDate);
      return dateOfEventB - dateOfEventA; // Descending order for past dates
    });

    setPastEvents(filteredEventsPast);
  }, [eventsData, selectedYear]);

  const eventsToRender =
    selectedYear === currentAcademicYear
      ? renderingPresent
        ? availableEvents
        : pastEvents
      : selectedYearEvents;

  return (
    <Layout pathname={props.location.pathname}>
      <div className="font-poppins">
        <EventsTitle />
        <div className="flex justify-center md:justify-normal">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-2 mb-4 text-sm rounded-md focus:outline-none bg-eventsGrey text-eventsTextGrey drop-shadow-md md:ml-32 w-28 md:w-44 md:text-base md:px-4 md:py-1 md:mb-0 md:mt-4"
          >
            {academicYears.map((year, index) => {
              return (
                <option key={index} value={year} className="hover:bg-darkGrey">
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className={`flex justify-center items-center transition-all duration-500 ease-in-out ${
            selectedYear === currentAcademicYear
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col mr-8">
            <button
              onClick={() => setRenderingPresent(true)}
              className={`transition-colors duration-300 ${
                renderingPresent ? 'text-red-500' : 'text-black'
              }`}
            >
              Upcoming
            </button>
            <hr
              className="mt-4 ml-4 transition-all duration-[50ms] border-red-500"
              width="40px"
              style={{ borderWidth: renderingPresent ? '3px' : '0' }}
            />
          </div>
          <div className="flex flex-col ml-8">
            <button
              onClick={() => setRenderingPresent(false)}
              className={`transition-colors duration-300 ${
                renderingPresent ? 'text-black' : 'text-red-500'
              }`}
            >
              Past
            </button>
            <hr
              className="mt-4 ml-4 transition-all duration-[50ms] border-red-500"
              width="40px"
              style={{ borderWidth: renderingPresent ? '0' : '3px' }}
            />
          </div>
        </div>
        <hr
          className="mt-[-3px] mr-16 ml-16 mb-16 border-gray-500"
          style={{ borderWidth: '1px' }}
        />
        <div ref={ref}>
          {eventsToRender && eventsToRender.length ? (
            <Bubble
              renderObjects={eventsToRender.map((eventNode, index) => (
                <EventBlock event={eventNode} index={index} />
              ))}
              wrapperClass={
                'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-20'
              }
              sharedObjectClass={'flex justify-center transform-gpu'}
              delay={100}
              duration={200}
              direction={'ltr'}
              isActive={isMobile ? true : isInView}
            />
          ) : (
            <div className="mb-10 text-xl font-semibold text-center col-span-full">
              No events right now, stay tuned for more!
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulFeaturedEvent {
      nodes {
        displayTitle
        startDate
        description {
          raw
        }
        slug
        featureDetailedEventPage
      }
    }
  }
`;

export const Head = () => (
  <Seo title="Events Page" description="This is the events page" />
);

export default Events;
