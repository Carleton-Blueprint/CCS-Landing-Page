import React from "react";
import EventBlock from "./EventBlock"

const ScheduleRow = ({eventRow,index}) => {
 
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
    const time = ((getTime(eventRow.endTime) - getTime(eventRow.startTime)))

    return (
        <div className={`m-10 text-white  grid-cols-1 flex p-8 ${index === 0 ? 'pt-20' : '' }`}>
            <div className=" flex flex-col justify-between pr-[20px] mr-[20px]" style={{'minHeight': `${time*2}px`}}>

                <p className=" text-lg">{eventRow.startTime.substr(0, eventRow.startTime.length-2)+" "+eventRow.startTime.substr(-2).toUpperCase()}</p>
                <p className={`relative bottom-[-${time}px] text-lg`}>{eventRow.endTime.substr(0, eventRow.endTime.length-2)+" "+eventRow.endTime.substr(-2).toUpperCase()}</p>
            </div>
            <div>
                {eventRow.eventBlock.map(element => {
                    return (
                        <EventBlock key={element.id} events={element.event} rangeStart = {eventRow.startTime} rangeTime={time}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ScheduleRow;