import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login"; // Ensure correct case
import CoordinatorDashboard from "./CoordinatorDashboard";
import PostJob from "./PostJob";
import JobListings from "./JobListings"; // To display posted jobs
import AppliedStudents from "./AppliedStudents"; // Import AppliedStudents page
import EligibleStudents from "./EligibleStudents"; // Import EligibleStudents page

function App() {
  const [jobs, setJobs] = useState([]); // Store posted jobs

  return (
    <Router basename="/campusplacementportal">
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/coordinator-dashboard" element={<CoordinatorDashboard />} />
    <Route path="/post-job" element={<PostJob setJobs={setJobs} />} />
    <Route path="/jobs" element={<JobListings jobs={jobs} />} />
    <Route path="/applied-students" element={<AppliedStudents />} />
    <Route path="/eligible-students" element={<EligibleStudents />} /> 
  </Routes>
</Router>
  );
}

export default App;
