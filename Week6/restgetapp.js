const express = require("express");

const app = express();
const PORT = 3004;

// 1. Basic JSON Response
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Employee API",
        server: "Express",
        status: "Online",
        time: new Date()
    });
});

// 2. Sending an Array of Objects
app.get("/employees", (req, res) => {
    const employeeList = [
        { id: 201, name: "Nandini", role: "Developer" },
        { id: 202, name: "Priya", role: "Designer" },
        { id: 203, name: "Kiran", role: "Tester" }
    ];

    res.json(employeeList);
});

// 3. Dynamic JSON Response
app.get("/employee/:id", (req, res) => {
    const employeeId = req.params.id;

    res.json({
        employeeId: employeeId,
        department: "Technology",
        experience: "Fresher",
        skills: ["JavaScript", "Express", "Node.js"]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Employee JSON API running at http://localhost:${PORT}`);
});
