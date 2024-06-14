import React, { useEffect } from 'react'
import { graphql } from "gatsby";

const EventFilter = (props) => {

    const eventsData = props.data.allContentfulFeaturedEvent.nodes;
    const academicYearSet = new Set();

    const getAcademicYear = (date) => {
        console.log(date);
        const year = parseInt(date.substring(0, 4), 10);
        const month = parseInt(date.substring(5, 7), 10);
        if (month >= 8) {
            return `${year}-${year + 1}`;
        } else {
            return `${year - 1}-${year}`;
        }
    }

    eventsData.forEach(event => {
        const year = getAcademicYear(event.startDate);
        academicYearSet.add(year);
    })
    const academicYears = Array.from(academicYearSet).sort();
    
    return (
        <select>
            {academicYears.map((year, index) => {
                return <option key={index} value={year}> {year} </option>
            })}
        </select>
    )
}

export const query = graphql`
  query{
    allContentfulFeaturedEvent{
      nodes{
        startDate
      }
    }
  }
`

export default EventFilter