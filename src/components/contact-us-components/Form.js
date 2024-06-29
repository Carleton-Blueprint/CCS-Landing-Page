import React, { useState } from 'react';

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
  const handleSubmit =  async (e) => {
    e.preventDefault()
    //validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
        console.log("Please enter all info"); //TO DO: Snackbar
        return;
    }
    await window
      .fetch(`/api/submitForm`, { //serverless funciton, see src/api/submitForm for the function!
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(res => res.json())
      setFormData({
        fullName: '',
        email: '', 
        subject: '', 
        message: ''
      })
  };

  return (
    <div className="flex justify-center w-full mb-4 bg-center bg-cover">
      <form
        className="flex flex-col w-10/12 lg:w-1/2 align-center"
        name="contact"
        onSubmit={handleSubmit}
      >
        <h1 className="mr-auto text-xl font-poppins">Send a Message</h1>
        <div className="flex w-full gap-x-4">
          <div className="w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
            <input
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
              class="appearance-none w-full border-b-4 py-2 px-3 text-gray-700"
              id="fullName"
              type="text"
              placeholder="Full Name"
            />

            </label>
            
          </div>
          <div className="w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
                <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              class="appearance-none w-full border-b-4 py-2 px-3 text-gray-700"
              id="email"
              type="text"
              placeholder="Email"
            />
            </label>
            
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            <input
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            class="appearance-none border-b-4 w-full py-2 px-3 text-gray-700"
            id="subject"
            type="text"
            placeholder="Subject"
          />
          </label>
          
        </div>
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          className="w-full h-64 p-4 mb-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Word is bond :100:"
        ></textarea>
        <button
          className="w-1/3 mx-auto rounded-xl padding"
          type="submit"
          style={{ border: '1px solid black' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;