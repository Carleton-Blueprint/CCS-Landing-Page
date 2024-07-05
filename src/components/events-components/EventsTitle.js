import React from "react";
import background from "../../images/events-header.svg";
import EventButton from "./EventButton";

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
         <div className="absolute inset-0 flex flex-col p-32 pt-16 text-white">

            <h1 className="text-6xl text-center">Events</h1>
            <hr className="mt-8 mb-16"/> 

            <p className="text-xl text-gray-300 p-2">Featured Event</p>
            <p className="text-2xl text-white font-bold p-2">Carleton University</p>
            <p className="text-3xl text-white font-bold p-2">
            Software Engineering Conference
            </p>
            <div className="flex p-8">
            <EventButton description="description" title="title" date="date" />
            </div>
        </div>

      </div>
    </>
  );
};

export default EventsTitle;
