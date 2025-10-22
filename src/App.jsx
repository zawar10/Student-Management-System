import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
          <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>} />    
          <Route path="/student" element={<PrivateRoute> <Student /> </PrivateRoute>} />
          <Route path="/students/:id" element={<PrivateRoute> <StudentDetails /> </PrivateRoute>} />
          <Route path="/subjects" element={<PrivateRoute> <Subjects /> </PrivateRoute>} />
          <Route path="/cgpa" element={<PrivateRoute> <CGPA /> </PrivateRoute>} />
          <Route path="/registration" element={<PrivateRoute> <Registration /> </PrivateRoute>} />
        </Routes>
        {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
