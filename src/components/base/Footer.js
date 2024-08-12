import React from 'react';
import background from '../../images/footer-background.png';
import CUSECLogo from '../../images/ccs-logo.png';
import CarletonLogo from '../../images/carleton-logo.png';
import CarletonCUSECSocialMedia from './FooterSocialMedia';
import BlueprintWatermark from './BlueprintWatermark';

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center w-full space-x-4 bg-center bg-cover min-h-72"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center justify-center w-full space-x-10">
        <div className="flex flex-col justify-between mt-6">
          <div className="flex justify-center mb-5 space-x-4">
            <div className="w-[85px]">
              <img
                className="object-contain w-full h-full"
                src={CUSECLogo}
                alt="CUSEC logo"
              />
            </div>
            <div className="w-[85px]">
              <img
                className="object-contain w-full h-full"
                src={CarletonLogo}
                alt="CUSEC logo"
              />
            </div>
          </div>
          <CarletonCUSECSocialMedia />
        </div>
        <div className="text-white">
          <span>Site Map</span>
          <ul className="flex-col pt-2 font-poppins">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-3 font-poppins">
        <BlueprintWatermark />
      </div>
    </div>
  );
};

export default Footer;
