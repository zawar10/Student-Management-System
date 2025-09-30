import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full text-white p-4 flex justify-center space-x-8 mt-12">
      <div className="container mx-auto flex justify-center items-center text-white">
        <ul className="flex space-x-8 text-xl">
          <li>
            <Link to="/" className="hover:text-red-600">
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-red-600">
              <strong>Services</strong>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-600">
              <strong>Contact</strong>
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-600">
              <strong>About</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
