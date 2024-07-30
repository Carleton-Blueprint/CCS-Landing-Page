import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import ErrorIcon from './errorIcon';

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
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      console.log('Please enter all info'); //TO DO: Snackbar
      toast.error('Error!', {
        // unstyled: false,
        // classNames: {
        //   toast: 'flex items-center bg-[#EBC8C4] border-2 border-[#8E6C6A] rounded-3xl w-full pl-6 pr-6 pt-2 pb-2',
        //   title: 'font-poppins text-[#8E6C6A] text-lg font-medium mb-0 pb-0',
        //   description: 'font-poppins text-[#8E6C6A] text-sm font-medium mt-0 pt-0',
        //   closeButton: 'mt-6 align-right',
        //   icon: 'mr-6'
        // },
        description: 'Ensure all fields are filled.',
        // icon: <ErrorIcon />,
      });
      
      return;
    }
    await window
      .fetch(`/api/submitForm`, {
        //serverless funciton, see src/api/submitForm for the function!
        method: `POST`,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...formData, date: new Date() }),
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          toast.success('Success', {
            description: 'Message sent successfully',
          });
        } else if (res.status === 500) {
          toast.error('Error', {
            description: 'Failed to send message. Please try again.',
          });
        } else {
          toast.error('Unexpected Response', {
            description: 'Unexpected response. Please try again.',
          });
        }
      }) 
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Toaster 
        position='top-center'
        richColors
        visibleToasts={1}
        offset={88}
      />
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
                  htmlFor="fullName"
                >
                  <input
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    class="appearance-none font-semibold w-full border-b-[3px] py-2 px-3 placeholder-white text-white bg-transparent focus:outline-none focus:border-[#E91C24] transition-colors ease-out duration-200"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                </label>
              </div>
              <div
                className={` text-[#E91C24] font-bold text-xl ${
                  formData.fullName && 'invisible'
                }`}
              >
                *
              </div>
            </div>
            <div className="flex w-1/2">
              <div className="flex-1 ">
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
    </>
  );
};

export default Form;