import React from "react";
import mail from "../../images/mail-icon.png"
import twitter from "../../images/twitter-icon.png"
import linkedin from "../../images/linkedin-icon.png"
import discord from "../../images/discord-icon.png"

const CarletonCUSECSocialMedia = () => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        
        <a href="mailto:info@cusec.net" target="_blank" className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img src={mail}/>
        </a>
        <a href="https://x.com/cusec" target="_blank" className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img src={twitter}/>
        </a>
        <a href="https://www.linkedin.com/company/cusec/mycompany/" target="_blank"  className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img src={linkedin}/>
        </a>
        <a href="https://discord.gg/AzDrgHAnWf" target="_blank"  className="bg-gray-300 rounded-full w-[40px] p-[6px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img src={discord}/>
        </a>

      </div>
    </div>
  );
};

export default CarletonCUSECSocialMedia;