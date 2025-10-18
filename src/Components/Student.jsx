import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", roll: "", department: "" });

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditForm({
      name: student.name,
      roll: student.roll,
      department: student.department,
      age: student.age,
      hobby: student.hobby,
    });
  };

  const handleSave = () => {
    const updatedStudents = students.map((s) =>
      s.id === editingId ? { ...s, ...editForm } : s
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    setEditingId(null);
    setEditForm({ name: "", roll: "", department: "", age: "", hobby: "" });
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
      <h1 className="text-4xl font-bold text-white mb-8">
        Student <span className="text-red-600">Details</span>
      </h1>

      {students.length === 0 ? (
        <p className="text-white text-lg">No Students Registered Yet </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-md p-6 w-72 hover:scale-105 transition-transform"
            >
              {editingId === student.id ? (
                <>
                <label className="text-l font-semibold">Name: </label>
                  <input
                    className="border p-1 mb-2 w-full rounded"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                <label className="text-l font-semibold">Roll: </label>
                  <input
                    className="border p-1 mb-2 w-full rounded"
                    value={editForm.roll}
                    onChange={(e) =>
                      setEditForm({ ...editForm, roll: e.target.value })
                    }
                  />
                <label className="text-l font-semibold">Dept: </label>  
                  <input
                    className="border p-1 mb-2 w-full rounded"
                    value={editForm.department}
                    onChange={(e) =>
                      setEditForm({ ...editForm, department: e.target.value })
                    }
                  />
                <label className="text-l font-semibold">Age: </label>  
                  <input
                    className="border p-1 mb-2 w-full rounded"
                    value={editForm.age}
                    onChange={(e) =>
                      setEditForm({ ...editForm, age: e.target.value })
                    }
                  />
                <label className="text-l font-semibold">Hobby: </label>  
                  <input
                    className="border p-1 mb-2 w-full rounded"
                    value={editForm.hobby}
                    onChange={(e) =>
                      setEditForm({ ...editForm, hobby: e.target.value })
                    }
                  />
                  <button
                    onClick={handleSave}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 w-full"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {student.name}
                  </h2>
                  <p>Roll No: {student.roll}</p>
                  <p>Department: {student.department}</p>
                  <div className="flex justify-between mt-4">
                    <Link to={`/students/${student.id}`} state={student}>
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        View
                      </button>
                    </Link>
                    <button
                      onClick={() => handleEdit(student)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Student;
