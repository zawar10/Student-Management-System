import React, { useState, useEffect } from "react";
import bgImage from "../assets/bg-pic.jpg";

const Subjects = () => {
  const [subject, setSubject] = useState({ name: "", credit: "", grade: "" });
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(saved);
  }, []);

  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!subject.name || !subject.credit || !subject.grade)
      return alert("Please fill all fields");
    const newSubjects = [...subjects, { id: Date.now(), ...subject }];
    setSubjects(newSubjects);
    localStorage.setItem("subjects", JSON.stringify(newSubjects));
    setSubject({ name: "", credit: "", grade: "" });
  };

  const handleDelete = (id) => {
    const updated = subjects.filter((s) => s.id !== id);
    setSubjects(updated);
    localStorage.setItem("subjects", JSON.stringify(updated));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 pt-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">
        Subject <span className="text-red-600">Management</span>
      </h1>

      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-lg shadow-lg w-80 mb-8 flex flex-col gap-3"
      >
        <input
          name="name"
          placeholder="Subject Name"
          value={subject.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="credit"
          placeholder="Credit Hours"
          value={subject.credit}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="grade"
          placeholder="Grade (A, B+, C, etc)"
          value={subject.grade}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Add Subject
        </button>
      </form>

      {subjects.length === 0 ? (
        <p className="text-white">No Subjects Added</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-xl shadow-md p-6 w-72 hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {sub.name}
              </h2>
              <p>Credit Hours: {sub.credit}</p>
              <p>Grade: {sub.grade}</p>
              <button
                onClick={() => handleDelete(sub.id)}
                className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Subjects;
