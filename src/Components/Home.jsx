import React from "react";
import students from "../students.json";
import Card from "./Card";
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
            "Organize, Manage, and Excel with Ease!"
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {students.map((student, index) => (
            <Card
              key={index}
              student={student}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
