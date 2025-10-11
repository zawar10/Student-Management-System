import React from "react";
import bgImage from "../assets/bg-pic.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-10 pt-34"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-6xl font-bold text-white mb-4"><span className="text-red-600">About</span> Us</h1>
      <p className="max-w-7xl text-xl text-center text-white pt-40">
        The Student Management System is designed to make managing student
        information seamless and efficient. Teachers and admins can view,
        update, and manage students with ease. This system provides a clean UI
        and focuses on simplicity, speed, and modern design.
      </p>
    </div>
  );
};

export default AboutUs;
