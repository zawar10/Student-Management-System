import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const StudentDetails = () => {
  const { state: student } = useLocation();
  const navigate = useNavigate();

  if (!student)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">No student data available.</p>
      </div>
    );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{student.name}</h2>
        <p>Roll No: {student.roll}</p>
        <p>Department: {student.department}</p>
        {student.age && <p>Age: {student.age}</p>}
        {student.hobby && <p>Hobby: {student.hobby}</p>}

        <button
          onClick={() => navigate("/student")}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Back to Students
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
