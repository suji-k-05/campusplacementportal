import React, { useState, useEffect } from "react";
import axios from "axios";
import { utils, writeFile } from "xlsx";

const AppliedStudents = () => {
  const [appliedStudents, setAppliedStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/applied-students")
      .then((response) => {
        setAppliedStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching applied students:", error);
      });
  }, []);

  const handleDownload = () => {
    if (appliedStudents.length === 0) {
      alert("No students have applied yet.");
      return;
    }
    const worksheet = utils.json_to_sheet(appliedStudents);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Applied Students");
    writeFile(workbook, "Applied_Students.xlsx");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎓 Applied Students</h2>
      {appliedStudents.length === 0 ? (
        <p style={styles.noStudents}>No students have applied yet.</p>
      ) : (
        <ul style={styles.list}>
          {appliedStudents.map((student) => (
            <li key={student.username} style={styles.listItem}>
              <h3 style={styles.studentName}>{student.name}</h3>
              <p><strong>CGPA:</strong> {student.cgpa}</p>
              <p><strong>Skills:</strong> {student.skills}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleDownload} style={styles.button}>Download Excel 📥</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #6a1b9a, #00796b)",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    color: "#fff",
    maxWidth: "800px",
    margin: "50px auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#ffffff",
  },
  noStudents: {
    fontSize: "1.2rem",
    color: "#e74c3c",
    fontWeight: "500",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    maxWidth: "700px",
    margin: "15px auto",
    color: "#333",
  },
  studentName: {
    color: "#2980b9",
    marginBottom: "8px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  button: {
    padding: "12px 25px",
    background: "#00796b",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background 0.3s ease, transform 0.3s ease",
    marginTop: "30px",
  },
  buttonHover: {
    backgroundColor: "#004d40",
    transform: "scale(1.05)",
  },
};

export default AppliedStudents;
