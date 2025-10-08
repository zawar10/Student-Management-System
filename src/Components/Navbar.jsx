import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 transition-colors duration-300
         ${darkMode ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <h1 className="text-2xl font-bold">S-<span className="text-red-600">M</span>-S</h1>

      <ul className="flex space-x-8 text-xl ml-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Home</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Student</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
           <strong>Contact</strong> 
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>About</strong>
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 border rounded-lg hover:bg-red-700 hover:text-white transition">
          Login
        </button>
        <button className="px-3 py-1 border rounded-lg hover:bg-green-500 hover:text-white transition">
          Signup
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-3 p-2 rounded-full border hover:bg-gray-700 transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>

  );
};

export default Navbar;
