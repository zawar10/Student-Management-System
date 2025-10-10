import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-transparent bg-opacity-70 text-white py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold">Student <span className="text-red-600">Management</span> System</h2>
          <p className="text-sm">© 2025 All Rights Reserved</p>
        </div>

        <div className="mt-2 md:mt-0">
          <p className="text-sm">
            Designed with ❤️ by <span className="text-red-700 font-bold text-lg"><strong>Zawar Ahmed</strong></span>
          </p>
          
        </div>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-600 transition">Facebook</a>
          <a href="#" className="hover:text-red-600 transition">Twitter</a>
          <a href="#" className="hover:text-red-600 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
