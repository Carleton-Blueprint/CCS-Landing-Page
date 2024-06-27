import React from "react";
import ScheduleRow from "./ScheduleRow"

const AllEvents = ({events}) => {
    const shadow = {
        'boxShadow': `
            0px 0px 100px #E91C24, 
            0px 0px 50px #E91C24,
            0px 10vh 500px #E91C24`
    }
    return (
        <div className="grid place-items-center" style={{'backgroundColor': '#41151B'}}>
            <div className=" bg-[#111] w-[700px] h-screen" style={shadow}>
                {events.map(element => {
                    return (
                        <ScheduleRow key={element.id} eventRow={element}/> 
                    )
                })}
            </div>
        </div>
    )
}

export default AllEvents