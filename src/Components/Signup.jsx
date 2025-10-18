import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("admin", JSON.stringify({ email, password }));
    alert("Signup Successful! Please Login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  backgroundBlendMode: "darken",
                }}
    >
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
