import React from "react";
import JoinReason from "./JoinReason";

const WhyAttend = (props) => {
    return (
        <div>
            <h2>WhyAttend</h2>
            {props.reasons.map((r) => {
                return (<JoinReason key={r.id} reason = {r.reason}/>)
            })}
        </div>
    )
}

export default WhyAttend;