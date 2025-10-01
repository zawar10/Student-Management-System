import React from "react";
import bgImage from "../assets/bg-pic.jpg"; 

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center"
    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundColor: "rgba(0,0,0,0.6)",
                backgroundBlendMode: "darken",
              }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white"><span className="text-red-600">Contact</span> Us</h1>
    </div>
  );
};

export default Contact;
