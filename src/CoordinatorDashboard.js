import React from "react";
import { useNavigate } from "react-router-dom";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <div style={styles.buttonContainer}>
          <button
            onClick={() => navigate("/post-job")}
            style={styles.button}
            className="glow"
          >
            🚀 Post Job
          </button>
          <button
            onClick={() => navigate("/jobs")}
            style={styles.button}
            className="glow"
          >
            📂 View Posted Jobs
          </button>
          <button
            onClick={() => navigate("/applied-students")}
            style={styles.button}
            className="glow"
          >
            👨‍🎓 Applied Students
          </button>
          <button
            onClick={() => navigate("/eligible-students")}
            style={styles.button}
            className="glow"
          >
            ✅ Eligible Students
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://source.unsplash.com/1600x900/?technology,abstract') no-repeat center center/cover",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  card: {
    padding: "40px",
    borderRadius: "15px",
    backdropFilter: "blur(15px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 50px rgba(0, 255, 255, 0.3)",
    textAlign: "center",
    zIndex: 2,
    width: "350px",
    border: "2px solid rgba(0, 255, 255, 0.3)",
    transition: "transform 0.3s ease-in-out",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    padding: "12px 15px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(135deg, #0ff, #00f)",
    cursor: "pointer",
    boxShadow: "0 5px 20px rgba(0, 255, 255, 0.5)",
    transition: "all 0.3s ease-in-out",
  },
};

// Adding hover effect dynamically
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".glow");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.7)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "0 5px 20px rgba(0, 255, 255, 0.5)";
    });
  });
});

export default CoordinatorDashboard;
