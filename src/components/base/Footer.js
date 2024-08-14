import React from 'react';
import { Link } from 'gatsby';
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
              <a href={'/'}>
                <img
                  className="object-contain w-full h-full"
                  src={CUSECLogo}
                  alt="CUSEC logo"
                />
              </a>
            </div>
            <div className="w-[85px]">
              <a href={'https://carleton.ca/'}>
                <img
                  className="object-contain w-full h-full"
                  src={CarletonLogo}
                  alt="Carleton logo"
                />
              </a>
            </div>
          </div>
          <CarletonCUSECSocialMedia />
        </div>
        <div className="text-white">
          <span>Site Map</span>
          <ul className="flex-col pt-2 font-poppins">
            <li>
              <Link
                to="/"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="transition-all duration-300 hover:text-gray-500 active:text-gray-600 active:scale-95"
              >
                Contact Us
              </Link>
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
