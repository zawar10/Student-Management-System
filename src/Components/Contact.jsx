import React from "react";
import bgImage from "../assets/bg-pic.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10 pt-34"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-6xl font-bold text-red-700 mb-4">Contact Us</h1>
      <p className="text-white mb-8 mt-6">
         📍 Student Management System
        <br />
         ✉️ Email: info@smsportal.com
        <br />
         ☎️ Phone: +92-300-1234567
      </p>

      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full rounded mb-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 w-full rounded mb-3"
        />
        <textarea
          placeholder="Message"
          className="border p-2 w-full rounded mb-3"
        ></textarea>
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
