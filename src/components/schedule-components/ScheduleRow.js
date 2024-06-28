import React from "react";
import EventBlock from "./EventBlock"

const ScheduleRow = ({eventRow}) => {
    const getTime = (time) => {
        let times = time.split(':')
        return parseInt(times[0]) + (times[1].substr(0, 2)/60)
    }
    const hourHeight = 100
    const time = ((getTime(eventRow.endTime) - getTime(eventRow.startTime))*hourHeight).toPrecision(3);

    return (
        <div className="m-10 text-white  grid-cols-1 flex p-8">
            <div className="pr-[20px] mr-[20px]">

                <p className=" text-lg">{eventRow.startTime.substr(0, eventRow.startTime.length-2)+" "+eventRow.startTime.substr(-2).toUpperCase()}</p>
                <p className={`relative bottom-[-${time}px] text-lg`}>{eventRow.endTime.substr(0, eventRow.endTime.length-2)+" "+eventRow.endTime.substr(-2).toUpperCase()}</p>
            </div>
            <div>
                {eventRow.eventBlock.map(element => {
                    return (
                        <EventBlock key={element.id} events={element.event} rangeStart = {element.startTime} rangeTime={time}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ScheduleRow;