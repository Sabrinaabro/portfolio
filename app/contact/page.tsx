"use client";

import { useState } from "react";
import { FaFacebook, FaSlack, FaLinkedin } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    location: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const { firstName, lastName, location, phone, message } = formData;
    const mailtoLink = `mailto:sabrina_azam@hotmail.com?subject=Contact Inquiry&body=Hello, my name is ${firstName} ${lastName}.%0D%0A%0D%0ALocation: ${location}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#f1e1c2] text-black px-6 md:px-16 py-12 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/3 space-y-6 text-center md:text-left relative">
        <div className="absolute top-0 left-0 w-20 h-20 bg-[#f55c7a] opacity-40 rounded-lg"></div>

        <h3 className="text-[#6274e7] font-bold">Say Hello</h3>
        <h2 className="text-3xl md:text-5xl text-[#7a8fd3] font-bold mt-2">
          Let’s Work Together 
        </h2>

        
        <div className="space-y-2">
          <p className="text-gray-400">Stay Up To Date</p>
          <p className="text-lg text-[#7a8fd3] font-semibold">sabrina_azam@hotmail.com</p>
          <p className="text-lg text-[#f55c7a] font-semibold">+92 306 3582 661</p>
          <p className="text-lg text-[#7a8fd3] font-semibold">Hyderabad Sindh, Pakistan</p>
        </div>

        
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a
            href="https://www.facebook.com/sabrina.abro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7a8fd3] rounded-full flex items-center justify-center hover:bg-[#a7bdea] cursor-pointer"
          >
            <FaFacebook className="text-[#f55c7a] text-xl" />
          </a>
          <a
            href="https://binarybounce.slack.com/ssb/redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#f55c7a] rounded-full flex items-center justify-center hover:bg-[#f86ca7] cursor-pointer"
          >
            <FaSlack className="text-[#7a8fd3] text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sabrina-abro-a13190247/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#7a8fd3] rounded-full flex items-center justify-center hover:bg-[#a7bdea] cursor-pointer"
          >
            <FaLinkedin className="text-[#f55c7a] text-xl" />
          </a>
        </div>
      </div>

     
      <div className="w-40 h-40 md:w-60 md:h-60 flex justify-center items-center bg-[#f55c7a] rounded-full shadow-lg opacity-80">
  <img
    src="/thumbsup.png"
    alt="Contact"
    className="w-full h-full object-cover rounded-full"
  />
</div>


      <div className="w-full md:w-1/3 bg-[#A3B0E0] p-6 mt-20 md:p-10 rounded-lg">
        <h3 className="text-xl font-bold text-[#f55c7a] mb-4 text-center">Input Form</h3>

     
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#f1e1c2] w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded-md bg-[#f1e1c2] w-full"
          />
        </div>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#f1e1c2] w-full mt-4"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#f1e1c2] w-full mt-4"
        />

        <textarea
          name="message"
          placeholder="Describe your case"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md bg-[#f1e1c2] w-full mt-4 h-28"
        ></textarea>

        <div className="mt-6 flex justify-center">
          <button
          onClick={handleSendEmail}
          className="bg-[#f55c7a] text-[#A3B0E0] font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-[#f86594]"
          >
      Send Message
    </button>
    </div>
      </div>
    </div>
  );
}
