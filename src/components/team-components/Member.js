import React from "react";
import { useState } from "react";
import mailIcon from "../../images/mail-icon.png"
import linkedinIcon from "../../images/linkedin-icon.png"

const Member = (props) => {
    console.log("Props", props)
    const url = props.member.headshot.file.url
    const [isHovering, setIsHovering] = useState(false)
    const headshotStyle = {
        'backgroundImage': 'url('+url+')',
    }
    const overlayStyle = {
        'backgroundSize': '100% 200%',
        'backgroundPosition': isHovering ? '100% 100%' : '100% 50%',
        'backgroundImage': ' linear-gradient(rgb(255,0,0,0), rgb(255,0,0,0), rgb(255,0,0,0.6))'
    }
    
    return(
        <div className="bg-cover w-[200px] h-[300px] rounded-tr-3xl rounded-bl-3xl " style={headshotStyle}>
            <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="transition-all duration-6000 ease-linear top-0 left-0  w-[200px] h-[300px] rounded-tr-3xl rounded-bl-3xl" style={overlayStyle}>
                
                <div className={isHovering ? "flex relative top-[82%] left-[70%]" : "flex relative top-[80%] left-[45%] hidden"}>
                    <a href={props.member.linkedin} target="_blank" rel="noreferrer" className="border-2 border-black rounded-full w-[40px] p-[7px] m-[5px] h-[40px] hover:bg-red-300">
                        <img src={linkedinIcon} alt="linkedin"/>
                    </a>
                </div>
            </div>
            <div className="mt-[20px]">
                <h1 className="text-xl font-bold text-center">{props.member.name}</h1>
                <h3 className="text-md font-bold text-center">{props.member.position}</h3>
                <p className="text-sm ml-[-10px] mr-[-20px]">{props.member.description}</p>
            </div>
        </div>

    )
}

export default Member;