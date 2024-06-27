import React from "react";

const ScheduleHeader = ({ dayNumber, date }) => {
    const arrowShadow = {
        'boxShadow': `
            1px 1px 3px #000000,
            -1px -1px 2px #AAAAAA`
    }

    return (
        <div className="flex justify-center items-align sticky top-0 p-8 bg-[#232323] w-screen" style={{'boxShadow': '0px 3px 10px #000000'}}>
            <button className= {dayNumber > 1 ? "absolute left-20 rounded-full p-2" : "absolute left-20 rounded-full p-2 hidden"} style={arrowShadow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="">
                <h1 className="text-center text-3xl font-bold text-white">
                Day {dayNumber}
                </h1>
                <h1 className="text-center text-xl text-white">{date}</h1>
            </div>
            <button className= {dayNumber < 3 ? "absolute right-20 rounded-full p-2" : "absolute right-20 rounded-full p-2 hidden"} style={arrowShadow}>
                <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8"
                >
                <path
                    strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
                </svg>
            </button>
        </div>
    );
};

export default ScheduleHeader;
