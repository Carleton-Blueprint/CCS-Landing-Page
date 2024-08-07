import React from 'react';
import background from '../images/404-background.svg';
import logo from '../images/logo.svg';
import Layout from '../components/base/Layout';

const Page404 = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <div
        className="bg-cover bg-no-repeat text-white bg-gray-800 h-[100vh] w-[100vw] text-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[200px] font-bold mt[-20px] flex">
          4{' '}
          <img
            alt="Carleton CUSEC Society Logo"
            className="flex w-[100px] sm:w-[150px] md:w-[200px] lg:w-[200px]"
            src={logo}
          />
          4
        </h1>
        <p className="text-lg w-[80vw]">
          The page you are looking for doesn't exist or has been moved
        </p>
        <a
          href="/"
          className="flex bg-[#676666] rounded-full p-2 pl-4 pr-4 hover:bg-brightRed mt-[50px]"
          style={{ boxShadow: '0 0 30px 5px black' }}
        >
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
    </Layout>
  );
};

export default Page404;
