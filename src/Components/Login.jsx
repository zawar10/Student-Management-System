import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (storedAdmin && storedAdmin.email === email && storedAdmin.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
              backgroundImage: `url(${bgImage})`,
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundBlendMode: "darken",
            }}
    >
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
