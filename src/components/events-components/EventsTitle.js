import React from "react";
import background from "../../images/events-header.svg";
import EventButton from "./EventButton";
import EventReadMore from "./EventReadMore"
const EventsTitle = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${background})`,
        //   backgroundPosition: "center",
        //   width: "100%",
          height: "100vh", // or any other height
        //   clipPath: "inset(0% 17% 0% 17%)",
        }}
      >
        <div className="flex justify-center"><hr className="w-screen opacity-50"/> </div>
         <div className="absolute inset-0 flex flex-col p-16 lg:p-32 pt-0 text-white">
         
            <h1 className="text-3xl lg:text-7xl font-semibold text-center pt-16 lg:pt-0">Events</h1>
            <div className="flex justify-center"><hr className="mt-16 mb-16 lg:mt-32 lg:mb-32 w-3/4 opacity-50"/> </div>

            <p className="text-xl lg:text-4xl text-gray-300 p-2">Featured Event</p>
            <p className="text-2xl lg:text-4xl text-white font-bold p-2">Carleton University</p>
            <p className="text-3xl lg:text-6xl text-white font-bold p-2">
            Software Engineering Conference
            </p>
            <div className="flex p-8 gap-10">
            
           
            
            <EventButton description="description" title="Software Engineering Conference" date="7/4/2024" />
            </div>
        </div>

      </div>
    </>
  );
};

export default EventsTitle;
