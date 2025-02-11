import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const roleColors = {
    Student: "#4CAF50", // Green
    Coordinator: "#FF9800", // Orange
    Admin: "#E91E63", // Pink
  };

  const roleColor = role ? roleColors[role] : "#fff"; // Default to white if no role selected

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "Coordinator" && username === "coordinator" && password === "admin123") {
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
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{ ...styles.select, color: roleColor }}
          >
            <option value="">Select Role</option>
            <option value="Student" style={{ color: roleColors.Student }}>
              Student
            </option>
            <option value="Coordinator" style={{ color: roleColors.Coordinator }}>
              Coordinator
            </option>
            <option value="Admin" style={{ color: roleColors.Admin }}>
              Admin
            </option>
          </select>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: `url("https://otomeyt.ai/wp-content/uploads/2021/06/How-to-Scale-with-Campus-Hiring-Effectiveness.jpg") no-repeat center center/cover`,
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },
  card: {
    padding: "40px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: "350px",
    textAlign: "center",
    zIndex: 2,
    transition: "transform 0.3s ease-in-out",
  },
  heading: {
    color: "#fff",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "3px",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    outline: "none",
  },
  select: {
    padding: "12px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    fontSize: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
  },
};

export default Login;
