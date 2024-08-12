import React from 'react';
import mail from '../../images/mail-icon.png';
import instagram from '../../images/instagram-icon.png';
import discord from '../../images/discord-icon.png';

const CarletonCUSECSocialMedia = () => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <a
          href="https://discord.gg/AzDrgHAnWf"
          className="bg-gray-300 rounded-full w-[40px] m-[5px] p-[10px] transition-colors transform hover:scale-110 
          hover:rotate-6 hover:bg-gray-500 active:bg-gray-700 ease-out duration-200"
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="Carleton CUSEC Society official Discord" src={discord} />
        </a>

        <a
          href="mailto:info@cusec.net"
          className="bg-gray-300 rounded-full w-[40px] m-[5px] p-[10px] transition-colors transform hover:scale-110 
          hover:rotate-6 hover:bg-gray-500 active:bg-gray-700 ease-out duration-200"
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="Carleton CUSEC Society official mail" src={mail} />
        </a>
        <a
          href="https://www.linkedin.com/company/cusec/mycompany/"
          className="bg-gray-300 rounded-full w-[40px] m-[5px] p-[10px] transition-colors transform hover:scale-110 
          hover:rotate-6 hover:bg-gray-500 active:bg-gray-700 ease-out duration-200"
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img
            alt="Carleton CUSEC Society official Instagram"
            src={instagram}
          />
        </a>
      </div>
    </div>
  );
};

export default CarletonCUSECSocialMedia;
