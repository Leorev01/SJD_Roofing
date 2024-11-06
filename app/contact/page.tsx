import Quote from '@/components/Quote';
import React from 'react';
import { FaMobileButton } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Page = () => {
  return (
    <>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-indigo-600">Get the help you need</p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Contact Us</h2>
        </div>
      </div>

      {/* Contact Section, centered and evenly spaced in a row on large screens */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center px-6 lg:px-8 space-y-8 lg:space-y-0">
        <div className="flex flex-row w-full justify-evenly lg:w-auto space-x-8">
          <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-2xl w-full sm:w-1/3">
            <FaMobileButton className="text-4xl text-indigo-600" />
            <div>
              <h1 className="font-bold text-lg lg:text-2xl">Mobile</h1>
              <h1 className="font-bold text-2xl lg:text-4xl">0123 456 789</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-2xl w-full sm:w-1/3">
            <FaPhone className="text-4xl text-indigo-600" />
            <div>
              <h1 className="font-bold text-lg lg:text-2xl">Landline</h1>
              <h1 className="font-bold text-2xl lg:text-4xl">0123 456 789</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-6 rounded-2xl w-full sm:w-1/3">
            <MdEmail className="text-4xl text-indigo-600" />
            <div>
              <h1 className="font-bold text-lg lg:text-2xl">Email</h1>
              <h1 className="font-bold text-2xl lg:text-4xl">0123 456 789</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Flex container with Map on the left and Quote on the right */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start px-6 lg:px-8 py-12 space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Embedded Google Map on the left, smaller on smaller screens */}
        <div className="lg:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.085894264693!2d-1.512618107577762!3d52.40511947711062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774bb0759a27c5%3A0xb841944ee73a9f4a!2sNew%20Union%20St%2C%20Coventry!5e0!3m2!1sen!2suk!4v1730929231121!5m2!1sen!2suk"
            width="100%"
            height="300"  // Smaller height on smaller screens
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Quote Section on the right, wider on smaller screens */}
        <div className="flex-grow w-full sm:w-2/3 lg:w-1/2">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Page;