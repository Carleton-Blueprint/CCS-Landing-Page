import React from "react";

const EventBlock = ({events, rangeStart, rangeTime}) => {
    console.log(events)
    const getTime = (time) => {
        // let times = time.split(':')
        let times = ["9", "30am"]
        return parseInt(times[0]) + (times[1].substr(0, 2)/60)
    }

    let timeClassName = "h-["+rangeTime+"px] text-white border-l-2 border-l-white p-[20px]"
    timeClassName = "h-[200px] text-white border-l-2 border-l-white p-[20px]"

    events.sort(function(e1, e2){
        return getTime(e1.startTime) - getTime(e2.startTime)
    })
    const spliceIndex = events.findIndex((e) => {return e.startTime = rangeStart})
    const fullEvents = events.toSpliced(spliceIndex)
    const shortEvents = events.slice(spliceIndex)
    let index = -1
    console.log(fullEvents, shortEvents)
    return (
        // each column of events?
        <div className="flex grid-cols-1 ">
            {fullEvents.map(element => {
                // each event
                index++;
                if (index < shortEvents.length){
                    return (
                        <div key={element.id} className={timeClassName}>
                            <h1 className="font-bold text-md">{element.title}</h1>
                            <h1 className="text-sm">{element.description}</h1>
                            <h1>{element.location}</h1>

                            <div key={shortEvents[index].id} className="text-white border-l-2 border-l-white p-[20px] mt-[20px]">
                            <h1 className="font-bold text-md">{shortEvents[index].title}</h1>
                            <h1 className="text-sm">{shortEvents[index].description}</h1>
                            <h1>{shortEvents[index].location}</h1>
                        </div>
                        </div>
                    )
                } else {
                    index++;
                    return (
                        <div key={element.id} className={timeClassName}>
                            <h1 className="font-bold text-md">{element.title}</h1>
                            <h1 className="text-sm">{element.description}</h1>
                            <h1>{element.location}</h1>
                        </div>
                    )
                }
                    
            })}
        </div>

    )
}

export default EventBlock;