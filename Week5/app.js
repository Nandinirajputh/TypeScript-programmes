const express = require("express");

const app = express();

const PORT = 3002;

// Home route
app.get("/", (req, res) => {
    res.send("<h1>My Express Application</h1><p>Welcome to the Home Page!</p>");
});

// Student route
app.get("/student", (req, res) => {
    res.send("<h2>Student Information</h2><p>This page contains student details.</p>");
});

// Courses route
app.get("/courses", (req, res) => {
    res.send("<h2>Courses</h2><p>JavaScript, TypeScript, Python and Java</p>");
});

// Help route
app.get("/help", (req, res) => {
    res.send("<h2>Help Center</h2><p>Please contact the administrator for assistance.</p>");
});

// JSON API route
app.get("/api/student", (req, res) => {
    res.json({
        name: "Nandini",
        course: "Computer Science",
        year: "Final Year",
        status: "Active"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server started on http://localhost:${PORT}`);
});
