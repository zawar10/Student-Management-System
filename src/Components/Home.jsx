import React from "react";
import Card from "./Card";
import bgImage from "../assets/bg-pic.jpg";

const Home = () => {

  const students = [
    {
      name: "Ali Khan",
      roll: 101,
      course: "BSCS",
      dept: "Computer Science"
    },
    {
      name: "Sara Ahmed",
      roll: 102,
      course: "BBA",
      dept: "Business Administration"
    },
    {
      name: "Bilal Hussain",
      roll: 103,
      course: "BSSE",
      dept: "Software Engineering"
    },
    {
      name: "Ahmed Khan",
      roll: 104,
      course: "BSDS",
      dept: "Data Science"
    },
    {
      name: "Fatima Noor",
      roll: 105,
      course: "BSIT",
      dept: "Information Technology"
    }
  ]

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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card
              key={student.roll}
              student={student}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
