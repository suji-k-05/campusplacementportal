import React, { useState } from "react";
import { utils, writeFile } from "xlsx";

const EligibleStudents = () => {
  const [students] = useState([
    { username: "john123", name: "John Doe", cgpa: 8.5, skills: "Java, Python" },
    { username: "jane456", name: "Jane Smith", cgpa: 7.8, skills: "React, Node.js" }
  ]);

  const handleDownload = () => {
    const formattedStudents = students.map(({ username, name, cgpa, skills }) => ({
      Username: username,
      Name: name,
      CGPA: cgpa,
      Skills: skills,
    }));
    const worksheet = utils.json_to_sheet(formattedStudents);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Eligible Students");
    writeFile(workbook, "Eligible_Students.xlsx");
  };

  const containerStyles = {
    textAlign: "center",
    padding: "30px",
    background: "linear-gradient(135deg, #6a1b9a, #00796b)",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
    maxWidth: "700px",
    margin: "50px auto",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
  };

  const headingStyles = {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#ffffff",
  };

  const listStyles = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  };

  const listItemStyles = {
    background: "#ffffff",
    margin: "10px 0",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    color: "#333",
  };

  const buttonStyles = {
    padding: "12px 25px",
    backgroundColor: "#00796b",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
    fontWeight: "500",
  };

  const buttonHover = {
    backgroundColor: "#004d40",
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>🎓 Eligible Students</h2>
      <ul style={listStyles}>
        {students.map((student) => (
          <li key={student.username} style={listItemStyles}>
            <strong>{student.name}</strong> - CGPA: {student.cgpa} - Skills: {student.skills}
          </li>
        ))}
      </ul>
      <button
        style={buttonStyles}
        onClick={handleDownload}
        onMouseOver={(e) => (e.target.style.background = buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = buttonStyles.backgroundColor)}
      >
        Download Excel 📥
      </button>
    </div>
  );
};

export default EligibleStudents;
