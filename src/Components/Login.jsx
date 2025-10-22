import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/bg-pic.jpg"; 
import { EyeIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (storedAdmin && storedAdmin.email === email && storedAdmin.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
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
        onSubmit={handleLogin}
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
        <h2 className="text-3xl font-light text-center mb-1">Welcome Back</h2>
        <p className="text-sm font-light text-center mb-8 text-white/70">
          Log in to your account
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

        <div className="relative mb-3">
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

        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center text-white/70 cursor-pointer">
            <input type="checkbox" className="mr-2 h-4 w-4 bg-white/20 border-white/50 rounded appearance-none checked:bg-red-500 checked:border-transparent" />
            Remember me
          </label>
          <Link to="#" className="text-red-400 hover:text-red-500">
            Forgot password?
          </Link>
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
          Log In
        </button>

        <p className="text-center mb-4 text-white/70">or continue with</p>

        <div className="flex space-x-4 mb-8">
          <button
            type="button"
            className="flex-1 flex items-center justify-center p-3 rounded-lg bg-white/10 border border-white/30 text-white/80 hover:bg-white/20 transition duration-150"
          >
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="h-5 w-5 mr-2" />
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center p-3 rounded-lg bg-white/10 border border-white/30 text-white/80 hover:bg-white/20 transition duration-150"
          >
            <img src="https://img.icons8.com/sf-regular/24/FFFFFF/github.png" alt="GitHub" className="h-5 w-5 mr-2" />
            GitHub
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-white/70">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-400 hover:text-red-500 font-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;