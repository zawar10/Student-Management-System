import React from "react";
import bgImage from "../assets/bg-pic.jpg";

const Subjects = () => {
  const subjects = [
    { id: "CS101", name: "Introduction to Programming", cr: 3 },
    { id: "CS102", name: "Data Structures & Algorithms", cr: 3 },
    { id: "CS201", name: "Database Lab", cr: 1 },
    { id: "CS202", name: "Object-Oriented Programming", cr: 3 },
    { id: "CS301", name: "Web Development", cr: 2 },
    { id: "CS302", name: "Operating Systems", cr: 3 },
    { id: "CS401", name: "Artificial Intelligence", cr: 2 },
    { id: "CS402", name: "Software Design Architecture", cr: 3 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20 pt-28"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-8">
        Offered <span className="text-red-600">Subjects</span>
      </h1>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="bg-red-700 text-white text-center">
              <th className="py-3 px-4 border-b border-gray-500">Course ID</th>
              <th className="py-3 px-4 border-b border-gray-500">Subject Name</th>
              <th className="py-3 px-4 border-b border-gray-500">Credit Hours</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr
                key={index}
                className="hover:bg-gray-700/60 transition duration-200"
              >
                <td className="py-2 px-4 border-b border-gray-600 text-red-400 font-semibold">
                  {subject.id}
                </td>
                <td className="py-2 px-4 border-b border-gray-600">{subject.name}</td>
                <td className="py-2 px-4 border-b border-gray-600">{subject.cr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subjects;
