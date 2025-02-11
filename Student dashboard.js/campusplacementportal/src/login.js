import React, { useState } from "react";

function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in as ${role} with username: ${username}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h1 style={styles.heading}>Placement Portal</h1> {/* Updated Heading */}
        <h2 style={styles.header}>Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.select}
        >
          <option value="student">Student</option>
          <option value="coordinator">Coordinator</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXZUHFmGsGtgzHMKRdkLQL1z47dAxhAYxDg&s')",
    backgroundSize: "auto",  // Makes the image appear in its original size
    backgroundRepeat: "repeat",  // Ensures the image repeats multiple times
    backgroundPosition: "top left", // Tiles will start from the top left corner
    position: "relative",
    fontFamily: "'Roboto', sans-serif", // Custom Font
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark Overlay
    zIndex: 1,
  },
  card: {
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 60px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    width: "400px",
    textAlign: "center",
    zIndex: 2,
    transform: "scale(0.95)",
    transition: "transform 0.4s ease-in-out", // Animation for scaling the card
  },
  heading: {
    color: "#000", // Black color for heading
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "5px",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "2px",
    marginTop: "0",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", // Adding text shadow for a more stylish header
  },
  select: {
    padding: "12px",
    margin: "15px 0",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "18px",
    color: "#555",
    backgroundColor: "#fafafa",
    outline: "none",
    transition: "all 0.3s ease-in-out",
  },
  input: {
    padding: "12px",
    margin: "12px 0",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "18px",
    color: "#555",
    backgroundColor: "#fafafa",
    outline: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Input field shadow for better focus
    transition: "all 0.3s ease-in-out",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

export default Login;
