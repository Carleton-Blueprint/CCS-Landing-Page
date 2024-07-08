import React from "react";
import AllEvents from "../components/schedule-components/AllEvents"
import { graphql } from "gatsby";
import { useState } from "react";
import greyBackground from "../images/schedule-title-background.png"

const Schedule = ({data}) => {
    console.log("schedule", data.allContentfulScheduleRow.nodes);
    const dates = ["January 10th", "January 11th", "January 12th"]
    const [date, setDate] = useState(1);
    const events = data.allContentfulScheduleRow.nodes.filter(event => event.date === dates[date-1])
    console.log("schedule for", dates[date-1], events)
    const arrowShadow = {
        'boxShadow': `
            1px 1px 3px #000000,
            -1px -1px 2px #AAAAAA`
    }
    // bc schedule header is disabled
    const dayNumber = date
    return (
        <>
        <div className="flex justify-center items-align fixed top-0 p-8 w-full bg-bottom" style={{'background-image': `url(${greyBackground})`, 'background-size': '100% 100%'}}>
            <button onClick={() => setDate(date-1)} className= {dayNumber > 1 ? "absolute left-20 rounded-full p-2" : "absolute left-20 rounded-full p-2 hidden"} style={arrowShadow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="">
                <h1 className="text-center text-3xl font-bold text-white">
                Day {dayNumber}
                </h1>
                <h1 className="text-center text-xl text-white">{dates[date-1]}</h1>
            </div>
            <button onClick={() => setDate(date+1)} className= {dayNumber < 3 ? "absolute right-20 rounded-full p-2" : "absolute right-20 rounded-full p-2 hidden"} style={arrowShadow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8"
                >
                <path
                    strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
                </svg>
            </button>
        </div>
        <div className=" pt-20">
        <AllEvents events={events}/>
        </div>
        </>
    )
}

export const query = graphql `query MyQuery {
  allContentfulScheduleRow(sort: {startTime: DESC}) {
    nodes {
      id
      startTime
      endTime
      date(formatString: "MMMM Do")
      eventBlock {
        id
        event {
          id
          date(formatString: "MMMM Do")
          endTime
          location
          startTime
          title
          description
        }
      }
    }
  }
}`

export default Schedule;