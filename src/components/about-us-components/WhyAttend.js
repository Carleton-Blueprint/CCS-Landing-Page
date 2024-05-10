import React from "react";
import AttendReason from "./AttendReason";

const WhyAttend = (props) => {
    return (
        <div className="flex items-center">
            {props.reasons.map((r) => {
                return (<AttendReason key={r.id} title = {r.title} subtitle={r.subtitle}/>)
            })}
        </div>
    )
}

export default WhyAttend;