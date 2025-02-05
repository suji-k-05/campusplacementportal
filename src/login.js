import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Added state for role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Coordinator login validation
    if (role === "Coordinator" && username === "coordinator" && password === "admin123") {
      // Use a leading slash to match the route
      navigate("/coordinator-dashboard");
    } else if (role === "Admin" && username === "admin" && password === "admin123") {
      navigate("/admin-dashboard");
    } else if (role === "Student" && username === "student" && password === "student123") {
      navigate("/student-dashboard");
    } else {
      alert("Invalid Credentials or Role");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Coordinator">Coordinator</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
