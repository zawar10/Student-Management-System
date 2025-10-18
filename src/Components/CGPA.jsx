import React, { useState } from "react";
import bgImage from "../assets/bg-pic.jpg";

const CGPA = () => {
  const [subjects, setSubjects] = useState([{ credit: "", grade: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const gradePoints = {
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    D: 1.0,
    F: 0.0,
  };

  const handleChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([...subjects, { credit: "", grade: "" }]);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subj) => {
      const gradeValue = gradePoints[subj.grade.toUpperCase()];
      const creditValue = parseFloat(subj.credit);
      if (gradeValue && creditValue) {
        totalPoints += gradeValue * creditValue;
        totalCredits += creditValue;
      }
    });

    if (totalCredits === 0) {
      setCgpa(0);
    } else {
      setCgpa((totalPoints / totalCredits).toFixed(2));
    }
  };

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
        CGPA <span className="text-red-600">Calculator</span>
      </h1>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
        {subjects.map((subj, index) => (
          <div key={index} className="flex justify-center gap-4 mb-4">
            <input
              type="number"
              placeholder="Credit Hours"
              value={subj.credit}
              onChange={(e) => handleChange(index, "credit", e.target.value)}
              className="p-2 rounded bg-gray-800/60 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Grade (A, B+, C...)"
              value={subj.grade}
              onChange={(e) => handleChange(index, "grade", e.target.value)}
              className="p-2 rounded bg-gray-800/60 text-white focus:outline-none"
            />
          </div>
        ))}

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={addSubject}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Add Subject
          </button>
          <button
            onClick={calculateCGPA}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpa !== null && (
          <div className="mt-6 text-white text-lg">
            <strong>Your CGPA:</strong>{" "}
            <span className="text-yellow-500">{cgpa}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPA;
