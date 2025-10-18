import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const Home = () => {

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="text-center">
        <div className="bg-opacity-50 p-8 rounded-lg inline-block">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Student <span className="text-red-600">Management</span> System
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            "Organize, Manage and Excel with Ease!"
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mt-8">
        <Link to="/registration">
        <button className="bg-red-700 text-white px-20 py-3 rounded-xl hover:bg-red-800">
          Get Registered
        </button>
        </Link>
        <Link to="/subjects">
        <button className="bg-red-600 text-white px-19 py-3 rounded-xl hover:bg-red-700">
          Offered Subjects
        </button>
        </Link>
        <Link to="/cgpa">
        <button className="bg-red-500 text-white px-19 py-3 rounded-xl hover:bg-red-600">
          CGPA Calculator
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
