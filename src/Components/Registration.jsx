import React, { useState } from "react";
import bgImage from "../assets/bg-pic.jpg";

const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    department: "",
    age: "",
    hobby: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll || !form.department) return alert("Please fill all fields");

    const newStudent = { id: Date.now(), ...form };
    const existing = JSON.parse(localStorage.getItem("students")) || [];
    localStorage.setItem("students", JSON.stringify([...existing, newStudent]));
    alert("Student added successfully!");
    setForm({ name: "", roll: "", department: "", age: "", hobby: "" });
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
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Student Registration</h2>
        <input 
        name="name" 
        placeholder="Full Name" 
        value={form.name} 
        onChange={handleChange} 
        className="border p-2 rounded" 
        />
        <input 
        name="roll" 
        placeholder="Roll No" 
        value={form.roll} 
        onChange={handleChange} 
        className="border p-2 rounded" 
        />
        <input 
        name="department" 
        placeholder="Department" 
        value={form.department} 
        onChange={handleChange} 
        className="border p-2 rounded" 
        />
        <input 
        name="age" 
        placeholder="Age" 
        value={form.age} 
        onChange={handleChange} 
        className="border p-2 rounded" 
        />
        <input 
        name="hobby" 
        placeholder="Hobby" 
        value={form.hobby} 
        onChange={handleChange} 
        className="border p-2 rounded" 
        />
        <button type="submit" className="bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Registration;
