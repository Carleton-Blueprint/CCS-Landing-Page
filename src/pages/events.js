import React, { useState, useEffect } from 'react';
import EventBlock from '../components/events-components/EventBlock';
import { graphql } from "gatsby";
import { Seo } from '../components/base/Seo';


const Events = (props) => {
    
    
    const eventsData = props.data.allContentfulFeaturedEvent.nodes;
    const [availableEvents, setAvailableEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [renderingPresent, setRenderingPresent] = useState(true)

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);  // Set the time to 00:00:00 for today

        const filteredEventsFuture = eventsData.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate >= today;
        });

        

        filteredEventsFuture.sort((a, b) => {
          const dateOfEventA = new Date(a.startDate);
          const dateOfEventB = new Date(b.startDate);
          return Math.abs(dateOfEventA - today) - Math.abs(dateOfEventB - today);
        });

        setAvailableEvents(filteredEventsFuture)
        
        const filteredEventsPast = eventsData.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate < today;
        });

        filteredEventsPast.sort((a, b) => {
          const dateOfEventA = new Date(a.startDate);
          const dateOfEventB = new Date(b.startDate);
          return dateOfEventB - dateOfEventA; // Descending order for past dates
        });

        setPastEvents(filteredEventsPast);
    }, [eventsData]);

    return (

      <div>
        <button onClick={() => setRenderingPresent(true)} className=' bg-slate-200'>Present</button>
        <button onClick = {() =>  setRenderingPresent(false)}className=' bg-yellow-200'>Past</button>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-20'>
              {
              
              renderingPresent ?
              
              availableEvents.map((eventNode, index) => (
                <div className='flex  justify-center'>
                  <EventBlock event={eventNode} index={index} />
                </div>
              ))
              :
              pastEvents.map((eventNode, index) => (
                <div className='flex  justify-center'>
                  <EventBlock event={eventNode} index={index} />
                </div>
              ))

              }
          </div>

      </div>

     
    );
}

export const query = graphql`
  query{
    allContentfulFeaturedEvent{
      nodes{
        displayTitle
        startDate
        description{
          raw
        }
        slug
        featureDetailedEventPage
      }
    }
  }
`

export const Head = () => (
  <Seo title = "Events Page"  description="This is the events page"/>
)

export default Events;
