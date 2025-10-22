import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg"; 
import { EyeIcon } from "@heroicons/react/24/outline";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("admin", JSON.stringify({ email, password }));
    alert("Signup Successful! Please Login.");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <form
        onSubmit={handleSignup}
        className="
          p-8 rounded-2xl w-full max-w-sm
          text-white shadow-2xl
          backdrop-blur-xl bg-white/10
          border border-white/20
        "
        style={{
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 100px rgba(100, 100, 255, 0.1)",
        }}
      >
        <h2 className="text-3xl font-light text-center mb-1">Create Account</h2>
        <p className="text-sm font-light text-center mb-8 text-white/70">
          Join us today!
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full p-3 mb-4 rounded-lg 
            bg-white/10 border border-white/30
            placeholder-white/60 text-white
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="
              w-full p-3 rounded-lg 
              bg-white/10 border border-white/30
              placeholder-white/60 text-white
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white/60 hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <EyeIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="
              w-full p-3 rounded-lg 
              bg-white/10 border border-white/30
              placeholder-white/60 text-white
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
          type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white/60 hover:text-white"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <EyeIcon className="h-5 w-5" />
          </button>
        </div>

        <button
          type="submit"
          className="
            w-full py-3 rounded-lg font-semibold text-lg mb-6
            bg-gradient-to-r from-red-600 to-pink-500
            hover:from-red-700 hover:to-pink-600 transition duration-200
            shadow-lg shadow-blue-500/30
          "
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 hover:text-red-500 font-semibold">
            Log in here
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Signup;