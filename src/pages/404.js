import React from "react";
import NavigationBar from "../components/base/NavigationBar";

const Page404 = () => {
  return (
    <>
      <NavigationBar pathname="/404" />
      <div className="text-white bg-gray-800 h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-[200px] font-bold mt[-20px]">404</h1>
        <p className="text-lg">The page you are looking for doesn't exist or has been moved</p>
        <a href="/" className="flex bg-[#676666] rounded-full p-2 pl-4 pr-4 hover:bg-[#E91C24] mt-[50px]" style={{'boxShadow': '0 0 30px 5px black'}}>
            Go Home
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 pl-[5px]"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
            </svg>
        </a>

      </div>
    </>
  );
};

export default Page404;
