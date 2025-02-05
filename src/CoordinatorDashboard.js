import React from "react";
import { useNavigate } from "react-router-dom";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Coordinator Dashboard</h2>
      <button onClick={() => navigate("/post-job")} style={styles.button}>
        Post Job
      </button>
      <button onClick={() => navigate("/jobs")} style={styles.button}>
        View Posted Jobs
      </button>
      <button onClick={() => navigate("/applied-students")} style={styles.button}>
        Applied Students
      </button>
      <button onClick={() => navigate("/eligible-students")} style={styles.button}>
        Eligible Students
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "20px",
  },
  button: {
    padding: "12px",
    margin: "10px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#2980b9",
  },
};

export default CoordinatorDashboard;
