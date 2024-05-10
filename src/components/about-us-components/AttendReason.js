import React from "react"
import decadron from "../../images/decadron.png"

const AttendReason =  (props) => {
    console.log(props)
    return (
        <div className="bg-cover bg-center h-64 w-64 items-center justify-center" style={{ backgroundImage: `url(${decadron})` }}>
            <p className="text-center pt-10 text-white"><strong>{props.title}</strong></p>
            <p className="text-center px-4 py-4 pt-4 text-white">{props.subtitle}</p>
        </div>
    )
}

export default AttendReason