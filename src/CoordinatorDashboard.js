import React from "react";
import { Link } from "react-router-dom";

const CoordinatorDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Coordinator Dashboard</h2>
      <div style={styles.buttonContainer}>
        <Link to="/post-job" style={styles.link}>
          <button style={styles.button}>Post a New Job</button>
        </Link>
        <Link to="/eligible-students" style={styles.link}>
          <button style={styles.button}>View Eligible Students</button>
        </Link>
        <Link to="/applied-students" style={styles.link}>
          <button style={styles.button}>View Applied Students</button>
        </Link>
    
        <Link to="/jobs" style={styles.link}>
          <button style={styles.button}>View Job Listings</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Vertical spacing between buttons
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    width: "100%",
    maxWidth: "300px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
};

export default CoordinatorDashboard;
