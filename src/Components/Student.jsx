import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const Student = () => {

  const [students, setStudents] = useState([ 
  {
    "id": 1, 
    "name": "Ali Khan",
    "age": 19,
    "class": "BSCS",
    "grade": "A"
  },
  {
    "id": 2,
    "name": "Sara Ahmed",
    "age": 20,
    "class": "BSIT",
    "grade": "B+"
  },
  {
    "id": 3,
    "name": "Usman Tariq",
    "age": 21,
    "class": "BBA",
    "grade": "A-"
  },
  {
    "id": 4,
    "name": "Abdullah Ali",
    "age": 22,
    "class": "BSDS",
    "grade": "B"
  },
  {
    "id": 5,
    "name": "Maryam Shah",
    "age": 23,
    "class": "BSMS",
    "grade": "C+"
  },
  {
    "id": 6,
    "name": "Bilal Hussain",
    "age": 24,
    "class": "BSSE",
    "grade": "A+"
  },
  {
    "id": 7,
    "name": "Ahmed Khan",
    "age": 25,
    "class": "BSAI",
    "grade": "C-"
  },
  {
    "id": 8,
    "name": "Fatima Noor",
    "age": 26,
    "class": "BSMIT",
    "grade": "A"
  }
]);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 pt-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-5xl font-bold text-red-700 mb-8">Students Page</h1>
      {students.length === 0 ? (
        <p className="text-gray-600">No Data Found 😞</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-md p-6 w-80 hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {student.name}
              </h2>
              <p>Age: {student.age}</p>
              <p>Class: {student.class}</p>
              <p>Grade: {student.grade}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/students/${student.id}`} state={student}>
                  <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                    View
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Student;
