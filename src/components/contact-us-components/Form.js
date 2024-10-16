import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
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
      toast.error('Fill out all fields', {
        theme: 'colored',
        position: 'bottom-right',
      });
      return;
    }
    try {
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
      toast.success('Message Sent!', {
        theme: 'colored',
        position: 'bottom-right',
      });
    } catch (err) {
      console.error('Form::handleSubmit ERROR', err);
      toast.error('Error Occured Sending Message', {
        position: 'bottom-right',
      });
    } finally {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="flex justify-center transform -translate-y-20 bg-center bg-cover lg:-translate-y-40 2xl:-translate-y-56">
      <form
        className="border-solid border-2 border-[#6464648f] flex flex-col w-10/12 lg:w-1/2 align-center bg-[#646464] bg-opacity-65 px-5 xl:px-20 py-6 rounded-[40px] shadow-md"
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
                className="block mb-2 text-sm text-white lg:text-md"
                htmlFor="firstName"
              ></label>
              <input
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                className="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-brightRed transition-colors ease-out duration-200"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div
              className={`text-brightRed font-bold text-xl ${
                formData.firstName && 'invisible'
              }`}
            >
              *
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex-1 ">
              <label
                className="block mb-2 text-sm text-white lg:text-md"
                htmlFor="lastName"
              ></label>
              <input
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                className="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-brightRed transition-colors ease-out duration-200"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div
              className={`text-brightRed font-bold text-xl ${
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
              className="block mb-2 text-sm text-white lg:text-md"
              htmlFor="email"
            ></label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-brightRed transition-colors ease-out duration-200"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div
            className={`text-brightRed font-bold text-xl ${
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 'invisible'
            }`}
          >
            *
          </div>
        </div>

        <div className="flex mb-4">
          <div className="flex-1">
            <input
              value={formData.subject}
              onChange={handleChange}
              name="subject"
              className="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-brightRed transition-colors ease-out duration-200"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div
            className={`text-brightRed font-bold text-xl ${
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
          className="w-full h-64 p-4 mb-4 border-2 border-gray-300 rounded-lg resize-none font-poppins focus:outline-none focus:ring-2 focus:ring-brightRed"
          placeholder="Write a message..."
          id="message"
        ></textarea>
        <button
          className="shadow-dark-bottom text-xl font-semibold flex justify-center items-center 
        p-6 px-10 h-10 mx-auto rounded-full padding my-5 transition-all duration-100 ease-out
        bg-white hover:bg-brightRed active:bg-[#7C0005] text-black hover:text-white active:text-white"
          type="submit"
          aria-label="Submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
