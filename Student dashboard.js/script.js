document.addEventListener("DOMContentLoaded", function () {
  // Define dynamic content for each section
  const profileContent = `
    <h1>Profile Details</h1>
    <p>Name: John Doe</p>
    <p>Email: john.doe@example.com</p>
    <p>Phone: +1234567890</p>
    <p>Address: 123 Main St, City, Country</p>
  `;

  const cgpaContent = `
    <h1>CGPA Information</h1>
    <p>Your current CGPA: <strong>8.9</strong></p>
    <p>Last Semester: 8.7</p>
    <p>Expected Graduation: 2025</p>
  `;

  const departmentContent = `
    <h1>Department Details</h1>
    <p>Department: Computer Science and Engineering</p>
    <p>Specialization: Artificial Intelligence</p>
    <p>Academic Year: 3rd Year</p>
  `;

  const skillsContent = `
    <h1>Skills</h1>
    <p>Programming: Java, Python, JavaScript, C++</p>
    <p>Web Development: HTML, CSS, React, Node.js</p>
    <p>Database: SQL, MongoDB</p>
  `;

  // Function to update main content area
  function updateContent(content) {
    document.querySelector(".main-content").innerHTML = content;
  }

  // Event listeners for sidebar links
  document.getElementById("profile-link").addEventListener("click", function (e) {
    e.preventDefault();
    updateContent(profileContent);
  });

  document.getElementById("cgpa-link").addEventListener("click", function (e) {
    e.preventDefault();
    updateContent(cgpaContent);
  });

  document.getElementById("department-link").addEventListener("click", function (e) {
    e.preventDefault();
    updateContent(departmentContent);
  });

  document.getElementById("skills-link").addEventListener("click", function (e) {
    e.preventDefault();
    updateContent(skillsContent);
  });

  // Logout functionality
  document.getElementById("logout").addEventListener("click", function (e) {
    e.preventDefault();
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page if necessary
  });
});
