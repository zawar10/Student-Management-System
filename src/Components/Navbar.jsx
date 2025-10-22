import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/login")
  };


  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 transition-colors duration-300
         ${darkMode ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <h1 className="text-2xl font-bold">S-<span className="text-red-600">M</span>-S</h1>

      <ul className="flex space-x-8 text-xl ml-8">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Home</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Register</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/student"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Student</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>Subject</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cgpa"
            className={({ isActive }) =>
              isActive ? "text-red-600 font-extrabold" : "hover:text-red-500"
            }
          >
            <strong>CGPA</strong>
          </NavLink>
        </li>
      </ul>

      {!isLoggedIn ? (
        <>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="px-3 py-1 border rounded-lg hover:bg-red-700 hover:text-white transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-3 py-1 border rounded-lg hover:bg-green-500 hover:text-white transition">
                Signup
              </button>
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-3 p-2 rounded-full border hover:bg-gray-700 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
            >
              👤 Admin
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-md">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:bg-gray-700 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
