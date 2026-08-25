const express = require("express");

const app = express();
const PORT = 3005;
app.use((req, res, next) => {
    const currentTime = new Date().toLocaleTimeString();

    console.log(
        `${currentTime} | ${req.method} | ${req.originalUrl}`
    );

    next();
});
app.use((req, res, next) => {
    const acceptHeader = req.get("Accept");

    if (!acceptHeader) {
        return res.status(400).json({
            error: "Request header is missing"
        });
    }

    next();
});
let courses = [
    { id: 1, name: "JavaScript", duration: "8 Weeks" },
    { id: 2, name: "Node.js", duration: "6 Weeks" }
];

// ------------------------------------
// ROUTES
// ------------------------------------

// GET - Display all courses
app.get("/courses", (req, res) => {
    res.json(courses);
});

// POST - Add a new course
app.post("/courses", (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        duration: req.body.duration
    };

    courses.push(newCourse);

    res.status(201).json({
        message: "Course added successfully",
        course: newCourse
    });
});

// PUT - Update a course
app.put("/courses/:id", (req, res) => {
    const courseId = parseInt(req.params.id);

    const course = courses.find(item => item.id === courseId);

    if (course) {
        course.name = req.body.name || course.name;
        course.duration = req.body.duration || course.duration;

        res.json({
            message: "Course updated successfully",
            course: course
        });
    } else {
        res.status(404).json({
            error: "Course not found"
        });
    }
});

// DELETE - Remove a course
app.delete("/courses/:id", (req, res) => {
    const courseId = parseInt(req.params.id);

    const exists = courses.some(item => item.id === courseId);

    if (exists) {
        courses = courses.filter(item => item.id !== courseId);

        res.json({
            message: "Course deleted successfully",
            courses: courses
        });
    } else {
        res.status(404).json({
            error: "Course not found"
        });
    }
});

// ------------------------------------
// START SERVER
// ------------------------------------

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log(`Course API running at http://localhost:${PORT}`);
    console.log("Server is ready to accept requests.");
    console.log("--------------------------------");
});
