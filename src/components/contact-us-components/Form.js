import React, { useState } from 'react';
import { useToast } from '../base/ToastService';

const Form = () => {
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // When the form is submitted, send the form values
  // to our function for processing.
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      console.log('Please enter all info'); //TO DO: Snackbar
      return;
    }
    console.log(formData);
    await window
      .fetch(`/api/submitForm`, {
        //serverless funciton, see src/api/submitForm for the function!
        method: `POST`,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...formData, date: new Date() }),
      })
      .then((res) => res.json());
    toast.open(
      <div class="container flex w-3/4 rounded-3xl border-2 border-[#8EA087] bg-[#DEF2D7] p-4 font-poppins text-[#8EA087]">
        <div class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
            <path fill="#8EA087" stroke="#8EA087" stroke-width="2.5" d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"></path>
          </svg>
        </div>
        <div class="gap ml-4 mt-1.5 font-medium">
          <span class="block text-3xl font-medium"> Success! </span>
          <span class="block text-xl font-medium">Your message has been sent. </span>
        </div>
      </div>
    )
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center mb-4 transform -translate-y-20 bg-center bg-cover lg:-translate-y-40 2xl:-translate-y-56">
      <form
        className=" border-solid border-2 border-[#6464648f] flex flex-col w-10/12 lg:w-1/2 align-center bg-[#646464] bg-opacity-65 px-5 xl:px-20 py-6 rounded-[40px] shadow-md"
        name="contact"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 mr-auto text-xl font-semibold text-white lg:text-3xl font-poppins lg:mb-14">
          Send a Message
        </h1>
        <div className="flex w-full gap-x-4">
          <div className="flex w-1/2">
            <div className="flex-1 ">
              <label
                class="block text-white  text-sm lg:text-md text-md mb-2"
                htmlFor="firstName"
              >
                <input
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                  class="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-[#E91C24] transition-colors ease-out duration-200"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </label>
            </div>
            <div
              className={` text-[#E91C24] font-bold text-xl ${
                formData.firstName && 'invisible'
              }`}
            >
              *
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex-1 ">
              <label
                class="block text-white  text-sm lg:text-md text-md mb-2"
                htmlFor="lastName"
              >
                <input
                  value={formData.lastName}
                  onChange={handleChange}
                  name="lastName"
                  class="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-[#E91C24] transition-colors ease-out duration-200"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </label>
            </div>
            <div
              className={` text-[#E91C24] font-bold text-xl ${
                formData.lastName && 'invisible'
              }`}
            >
              *
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1">
            <label
              class="block text-white  text-sm lg:text-md text-md mb-2"
              htmlFor="email"
            >
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                class="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-[#E91C24] transition-colors ease-out duration-200"
                id="email"
                type="text"
                placeholder="Email"
              />
            </label>
          </div>
          <div
            className={` text-[#E91C24] font-bold text-xl ${
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 'invisible'
            }`}
          >
            *
          </div>
        </div>

        <div className="flex mb-4">
          <div className="flex-1 ">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              <input
                value={formData.subject}
                onChange={handleChange}
                name="subject"
                class="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-[#E91C24] transition-colors ease-out duration-200"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </label>
          </div>
          <div
            className={` text-[#E91C24] font-bold text-xl ${
              formData.subject && 'invisible'
            }`}
          >
            *
          </div>
        </div>

        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          className="w-full h-64 p-4 mb-4 border-2 border-gray-300 rounded-lg resize-none font-poppins focus:outline-none focus:ring-2 focus:ring-[#E91C24]"
          placeholder="Write a message..."
        ></textarea>
        <button
          className="text-white shadow-dark-bottom text-xl font-semibold flex justify-center items-center p-6 px-10 h-10 mx-auto rounded-full padding my-5 transition-all duration-100 ease-out border-0 bg-gradient-to-r from-[#E91C24] to-[#831014] active:from-[#831014] active:to-[#581b1d] active:shadow-none"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
