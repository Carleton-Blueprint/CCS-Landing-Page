import React from "react"
import decadron from "../../images/decadron.png"

const AttendReason =  (props) => {
    console.log(props)
    return (
        <div className="bg-cover bg-center h-64 w-64 flex items-center justify-center" style={{ backgroundImage: `url(${decadron})` }}>
            <p className="text-center p-8 text-white">{props.title}<br/><br/>{props.subtitle}</p>
        </div>
    )
}

export default AttendReason