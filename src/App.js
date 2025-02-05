import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login"; // Ensure the file name is correct (case-sensitive)
import CoordinatorDashboard from "./CoordinatorDashboard"; // Ensure the file name is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Added route for Coordinator Dashboard */}
        <Route path="/coordinator-dashboard" element={<CoordinatorDashboard />} />
        {/* You can add additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;
