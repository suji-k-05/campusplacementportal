import React from "react";

const JobListings = ({ jobs }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Posted Jobs</h2>
      <div style={styles.jobList}>
        {jobs.length === 0 ? (
          <p style={styles.noJobsText}>No jobs posted yet!</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} style={styles.jobPoster}>
              <h3 style={styles.jobTitle}>🚀 {job.company}</h3>
              <hr />
              <p><strong>📌 Role:</strong> {job.role}</p>
              <p><strong>📝 Selection Process:</strong> {job.selectionProcess}</p>
              <p><strong>🎯 Eligibility:</strong> Min CGPA {job.cgpa}+</p>
              <p><strong>📅 Date & Time:</strong> {job.date} | {job.time}</p>
              <p><strong>📍 Venue:</strong> {job.venue}</p>
              <p><strong>🛠 Required Skills:</strong> {job.skills}</p>
              <hr />
              <p style={styles.note}>Apply Now! 🚀</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Poppins', sans-serif", // Modern font for a cleaner look
    backgroundColor: "#f4f6f9",
    textAlign: "center",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "600",
  },
  jobList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  jobPoster: {
    background: "#fff",
    padding: "20px",
    border: "2px solid #3498db", // A light blue border to enhance contrast
    borderRadius: "12px", // Rounded corners for a softer look
    width: "70%",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effects
  },
  jobPosterHover: {
    transform: "scale(1.03)",
    boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.15)",
  },
  jobTitle: {
    color: "#2980b9",
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  note: {
    fontWeight: "bold",
    color: "#e74c3c",
    marginTop: "10px",
    fontSize: "1.1rem",
  },
  noJobsText: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    fontStyle: "italic",
  },
};

export default JobListings;
