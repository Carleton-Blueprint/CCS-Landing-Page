import React from "react";
import ScheduleRow from "./ScheduleRow"

const AllEvents = ({eventRows}) => {
    const getTime = (time) => {
        try{
          let hours = time.split(':')[0]
          let mins = time.split(":")[1].slice(0,2)
          let period = time.split(":")[1].slice(-2).toLowerCase();
          
          let totalTimePastMidnight = 0
      
          totalTimePastMidnight += period === "pm" && hours!==12 && 12*60
      
          totalTimePastMidnight += parseInt(hours)*60
          totalTimePastMidnight += parseInt(mins)
          
          return totalTimePastMidnight
        }
        catch (err){
          return 0;
        }
        
      };
    const findStartTime = (eventRow) =>{
        return(eventRow.events.reduce((min, current) => {
            return getTime(current.startTime) < getTime(min.startTime) ? current : min;
        }, eventRow.events[0]).startTime)

    }
    const findEndTime = (eventRow) =>{
        return(eventRow.events.reduce((max, current) => {
            return getTime(current.startTime) > getTime(max.startTime) ? current : max;
        }, eventRow.events[0]).endTime)

    }
    eventRows.sort((a,b) => getTime(findStartTime(a)) - getTime(findStartTime(b)))

    const shadow = {
        'boxShadow': `
            0px 0px 100px #E91C24, 
            0px 0px 50px #E91C24,
            0px 10vh 500px #E91C24`
    }
    return (
        <div className="grid place-items-center " style={{'backgroundColor': '#41151B'}}>
            <div className=" bg-[#111] w-[700px] min-h-screen" style={shadow}>
                {eventRows.map((element,index) => {
                    
                    return (
                        <ScheduleRow key={element.id} eventRow={element} startTime = {findStartTime(element)} endTime ={findEndTime(element)} index={index}/> 
                    )
                })}
            </div>
        </div>
    )
}

export default AllEvents