import React from 'react';
import mail from '../../images/mail-icon.png';
import twitter from '../../images/twitter-icon.png';
import linkedin from '../../images/linkedin-icon.png';
import discord from '../../images/discord-icon.png';

const SocialMedia = () => {
  const sharedStyles =
    'bg-gray-300 rounded-full w-[40px] m-[5px] hover:bg-gray-500 p-[10px] transition-all ease-out duration-150';
  return (
    <div className="flex-col items-center justify-center mb-3">
      <h1 className="mb-1 text-xl font-bold text-center text-gray-600">
        Get in touch with CUSEC
      </h1>
      <div className="flex items-center justify-center">
        <a
          href="mailto:info@cusec.net"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official email" src={mail} />
        </a>
        <a
          href="https://x.com/cusec"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official X account" src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/cusec/mycompany/"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official LinkedIn" src={linkedin} />
        </a>
        <a
          href="https://discord.gg/AzDrgHAnWf"
          className={sharedStyles + ' p-[6px]'}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official Discord" src={discord} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
