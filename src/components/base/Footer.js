import React from 'react';
import background from "../../images/shapes.svg";
import { CUSECLogo } from '../../images/CUSEC-Logo';
import CarletonLogo from '../../images/Carleton-Logo.png';
import CarletonCUSECSocialMedia from './CarletonCUSECSocialMedia';
import BlueprintWatermark from './BlueprintWatermark';
const Footer = () => {
  return (
    <div 
      className="flex flex-col justify-center w-full space-x-4 bg-center bg-cover min-h-72" 
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className='flex items-center justify-center w-full space-x-10'>
            <div className='flex flex-col justify-between mt-6'>
                <div className='flex justify-center mb-10 space-x-4'>
                    <img src={CarletonLogo} />
                    <CUSECLogo />
                </div>
                <div>
                    <CarletonCUSECSocialMedia />
                </div>
            </div>
            <div className='text-white'>
                <span>Site Map</span>
                <ul className='flex-col pt-2 '>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>EVENTS</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center mt-3 font-poppins'>
            <BlueprintWatermark />
        </div>
    </div>
  );
}

export default Footer;