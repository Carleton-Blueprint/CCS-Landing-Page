import React from "react";
import AttendReason from "./AttendReason";

const WhyAttend = (props) => {
    return (
        <div>
            <h2>WhyAttend</h2>
            {props.reasons.map((r) => {
                return (<AttendReason key={r.id} title = {r.title} subtitle={r.subtitle}/>)
            })}
        </div>
    )
}

export default WhyAttend;