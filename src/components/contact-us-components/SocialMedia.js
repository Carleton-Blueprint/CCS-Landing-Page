import React from "react";
import mail from "../../images/mail-icon.png"
import twitter from "../../images/twitter-icon.png"
import linkedin from "../../images/linkedin-icon.png"
import discord from "../../images/discord-icon.png"

const SocialMedia = () => {
  return (
    <div className="flex-col items-center justify-center">
      <h1 className="text-center font-bold text-xl text-gray-600 m-[10px]">Get in touch with CUSEC</h1>
      <div className="flex items-center justify-center">
        
        <a href="mailto:info@cusec.net" className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img alt="mail CUSEC link" src={mail}/>
        </a>
        <a href="https://x.com/cusec"  className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img alt="CUSEC twitter link" src={twitter}/>
        </a>
        <a href="https://www.linkedin.com/company/cusec/mycompany/"  className="bg-gray-300 rounded-full w-[40px] p-[10px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img alt="CUSEC LinkedIn" src={linkedin}/>
        </a>
        <a href="https://discord.gg/AzDrgHAnWf"  className="bg-gray-300 rounded-full w-[40px] p-[6px] m-[5px]" style={{'boxShadow': 'inset 0 3px 5px 1px rgb(0,0,0,0.3)'}}>
          <img alt="CUSEC Discrod" src={discord}/>
        </a>

      </div>
    </div>
  );
};

export default SocialMedia;
