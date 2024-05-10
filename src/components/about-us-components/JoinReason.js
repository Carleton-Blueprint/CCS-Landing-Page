import React from "react"
import decadron from "../../images/decadron.png"

const JoinReason =  (props) => {
    
    return (
        <div className="bg-cover bg-center h-64 w-64 flex items-center justify-center" style={{ backgroundImage: `url(${decadron})` }}>
            <p className="text-center p-4 text-white">{props.reason}</p>
        </div>
    )
}

export default JoinReason