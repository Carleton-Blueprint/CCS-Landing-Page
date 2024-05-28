import React from "react";
import homepage from "../../images/csshomepage.png"

const Home = () => {
    return (
        <>
        <img src={homepage} alt="Carleton University Software Engineering Conference"/>
        <div className="mt-[-38%] pl-[20%]">
            <button className="rounded-full pl-4 pr-4 h-[30px] text-lg hover:text-white cursor-pointer bg-gray-200 hover:bg-opacity-50 text-black shadow-dark-bottom-left bg-opacity-70">Learn More</button>
        </div>
        
        </>
    )
}

export default Home;