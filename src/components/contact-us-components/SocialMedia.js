import React from 'react';
import mail from '../../images/mail-icon.png';
import twitter from '../../images/twitter-icon.png';
import linkedin from '../../images/linkedin-icon.png';
import instagram from '../../images/instagram-icon.png';

const SocialMedia = () => {
  const sharedStyles = `bg-gray-300 rounded-full w-[40px] m-[5px] p-[10px] 
  transition-colors transform hover:scale-110 hover:rotate-6 hover:bg-gray-500 active:bg-gray-700 ease-out duration-200`;
  return (
    <div className="flex-col items-center justify-center mb-3 transform -translate-y-10 lg:-translate-y-20 2xl:-translate-y-28">
      <h1 className="mb-1 text-xl font-bold text-center text-gray-600">
        Get in touch with the official CUSEC Team
      </h1>
      <div className="flex items-center justify-center">
        <a
          href="https://x.com/cusec"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official X account" src={twitter} />
        </a>
        <a
          href="mailto:info@cusec.net"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official email" src={mail} />
        </a>
        <a
          href="https://www.linkedin.com/company/cusec/mycompany/"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official LinkedIn" src={linkedin} />
        </a>
        <a
          href="https://www.instagram.com/cusecofficial/"
          className={sharedStyles}
          style={{ boxShadow: 'inset 0 3px 5px 1px rgb(0,0,0,0.3)' }}
        >
          <img alt="CUSEC official Instagram" src={instagram} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
