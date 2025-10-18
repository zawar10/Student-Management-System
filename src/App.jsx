import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
import StudentDetails from "./Components/StudentDetails";
import Subjects from "./Components/Subjects";
import CGPA from "./Components/CGPA";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/cgpa" element={<CGPA />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
