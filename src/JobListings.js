import React from "react";

const JobListings = ({ jobs }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Posted Jobs</h2>
      <div style={styles.jobList}>
        {jobs.length === 0 ? (
          <p>No jobs posted yet!</p>
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
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "2rem",
  },
  jobList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  jobPoster: {
    background: "#f9f9f9",
    padding: "20px",
    border: "2px solid #2c3e50",
    borderRadius: "10px",
    width: "60%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  jobTitle: {
    color: "#2980b9",
    fontWeight: "bold",
  },
  note: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
};

export default JobListings;
