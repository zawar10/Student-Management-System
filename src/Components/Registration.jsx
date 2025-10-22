import React, { useState } from "react";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.roll || !form.department) {
      return alert("Please fill all fields");
    }

    try {
      await axios.post("http://localhost:3000/students", form);
      alert("Student added successfully!");
      setForm({ name: "", roll: "", department: "", age: "", hobby: "" });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >

      <h1 className="text-4xl font-bold text-white mb-8 mt-27">
        Student <span className="text-red-600">Registration</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col gap-4 mt-7"
      >
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
