import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const PostJob = ({ setJobs }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [selectionProcess, setSelectionProcess] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [skills, setSkills] = useState("");
  const [posted, setPosted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new job object from the form fields
    const newJob = {
      company,
      role,
      selectionProcess,
      cgpa,
      date,
      time,
      venue,
      skills,
    };

    // Update the jobs state
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setPosted(true);

    // Redirect to the Job Listings page
    navigate("/jobs");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📢 Post a New Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Role (e.g., Software Engineer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <textarea
          style={styles.textarea}
          placeholder="Selection Process"
          value={selectionProcess}
          onChange={(e) => setSelectionProcess(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Min CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Required Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>
          Post Job
        </button>
      </form>

      {posted && <p style={styles.successMessage}>Job posted successfully!</p>}

      <Link to="/jobs" style={styles.link}>
        View Posted Jobs
      </Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "80px",
  },
  button: {
    padding: "12px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  successMessage: {
    color: "#27ae60",
    marginTop: "10px",
  },
  link: {
    marginTop: "20px",
    display: "inline-block",
    color: "#00796b",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default PostJob;
