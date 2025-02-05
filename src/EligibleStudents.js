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
    background: "white",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "50px auto",
  };

  const listStyles = {
    listStyle: "none",
    padding: "0",
  };

  const listItemStyles = {
    background: "#e0f7fa",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "6px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  };

  const buttonStyles = {
    padding: "12px 20px",
    backgroundColor: "#00796b",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "20px",
  };

  const buttonHover = {
    backgroundColor: "#004d40",
  };

  return (
    <div style={containerStyles}>
      <h2>Eligible Students</h2>
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
        Download Excel
      </button>
    </div>
  );
};

export default EligibleStudents;
