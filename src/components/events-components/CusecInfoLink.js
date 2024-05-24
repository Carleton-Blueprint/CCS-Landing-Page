import React from "react";
import background from "../../images/cusec-info-background.png";
import EventButton from "./EventButton";

const CusecInfoLink = () => {
  return (
    <>
      <div
        className="flex-col items-center w-full h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          width: "100%",
          height: "100vh", // or any other height
        }}
      ></div>
      <div
        className="p-8"
        style={{
          transform: "translateY(-400px)",
          width: "50%"
        }}
      >
        <p className="text-xl text-white p-2">Featured Event</p>
        <p className="text-3xl text-white p-2">Carleton University</p>
        <p className="text-5xl text-white font-bold p-2">
          Software Engineering Conference
        </p>
        <div className=" flex  p-8">
          <EventButton description="description" title="title" date="date" />
        </div>
      </div>
    </>
  );
};

export default CusecInfoLink;
