import React from "react";
import mail from "../../images/mail-icon.png"
import twitter from "../../images/twitter-icon.png"
import linkedin from "../../images/linkedin-icon.png"
import discord from "../../images/discord-icon.png"

const SocialMedia = () => {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-center font-bold text-xl text-gray-600 m-[10px]">Get in touch with CUSEC</h1>
      <div className="flex justify-center items-center">
        
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

export default SocialMedia;
