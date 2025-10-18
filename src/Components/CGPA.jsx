import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg-pic.jpg";

const gradePoints = {
  "A+": 4.0,
  A: 3.7,
  "A-": 3.5,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  D: 1.0,
  F: 0.0,
};

const CGPA = () => {
  const [subjects, setSubjects] = useState([]);
  const [cgpa, setCgpa] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(saved);
    calculateCGPA(saved);
  }, []);

  const calculateCGPA = (data) => {
    if (data.length === 0) return setCgpa(0);
    let totalPoints = 0,
      totalCredits = 0;
    data.forEach((sub) => {
      const points = gradePoints[sub.grade.toUpperCase()] || 0;
      totalPoints += points * parseFloat(sub.credit);
      totalCredits += parseFloat(sub.credit);
    });
    setCgpa(totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0);
  };

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
        <h1 className="text-3xl font-bold mb-4">Your CGPA</h1>
        <p className="text-5xl font-bold text-red-600 mb-4">{cgpa}</p>
        {subjects.length === 0 ? (
          <p className="text-gray-600">No subjects available.</p>
        ) : (
          <ul className="text-left text-gray-700">
            {subjects.map((s) => (
              <li key={s.id} className="mb-2">
                {s.name} ({s.credit} cr): {s.grade}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CGPA;
