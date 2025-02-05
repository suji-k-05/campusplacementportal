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
      <h2 style={styles.heading}>Applied Students</h2>
      {appliedStudents.length === 0 ? (
        <p>No students have applied yet.</p>
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
      <button onClick={handleDownload} style={styles.button}>Download Excel</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "40px", fontFamily: "Arial, sans-serif" },
  heading: { color: "#2c3e50", fontSize: "2rem", marginBottom: "20px" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "left",
    maxWidth: "600px",
    margin: "10px auto",
  },
  studentName: { color: "#2980b9", marginBottom: "8px" },
  button: {
    padding: "12px 20px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
    marginTop: "20px",
  },
};

export default AppliedStudents;
