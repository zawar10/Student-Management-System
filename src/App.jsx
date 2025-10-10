import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
import StudentDetails from "./Components/StudentDetails";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
