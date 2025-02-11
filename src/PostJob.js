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
    const newJob = { company, role, selectionProcess, cgpa, date, time, venue, skills };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setPosted(true);
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
        <button type="submit" style={styles.button}>Post Job</button>
      </form>
      {posted && <p style={styles.successMessage}>🎉 Job posted successfully!</p>}
      <Link to="/jobs" style={styles.link}>🔍 View Posted Jobs</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #00bcd4, #8e44ad)", // Vibrant gradient from turquoise to purple
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  heading: {
    color: "#fff",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "2px solid #3498db",
    fontSize: "16px",
    transition: "0.3s",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "2px solid #3498db",
    fontSize: "16px",
    minHeight: "100px",
    transition: "0.3s",
    outline: "none",
  },
  button: {
    padding: "14px",
    background: "linear-gradient(45deg, #3498db, #2980b9)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "0.3s",
  },
  successMessage: {
    color: "#27ae60",
    marginTop: "15px",
    fontSize: "18px",
  },
  link: {
    marginTop: "20px",
    display: "inline-block",
    color: "#00bcd4", // Vibrant teal color
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s", // Smooth transition for hover effect
  },
  linkHover: {
    color: "#00838f", // Darker teal color for hover effect
  },
};

export default PostJob;
