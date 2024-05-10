import React from "react"
import decadron from "../../images/decadron.png"
// import {Stage, Layer, RegularPolygon, Text} from "react-konva"
// import Konva from 'konva'

const JoinReason =  (props) => {
    
    /*const width = 200
    const half = width/2
    const sixth = width/6
    const twelfth = width/12
    let points = half+","+0+" "+0+","+half+" "+sixth+","+(width+twelfth)+" "+(width-sixth)+","+(width+twelfth)+" "+width+","+half
    <svg width="400" height="400">
        <polygon points={points}></polygon>
        <text fill='red' width={200} x="200" y="100" textAnchor="middle" alignmentBaseline="middle" lengthAdjust="spacingAndGlyphs">{props.reason}</text>
    </svg>*/

    //  const decadron = {
    //     backgroundImage: '../../images/decadron.png'
    //  }

    return (
        <div className="bg-cover bg-center h-64 w-64 flex items-center justify-center" style={{ backgroundImage: `url(${decadron})` }}>
            <p className="text-center p-4 text-white">{props.reason}</p>
        </div>
    )
}

export default JoinReason