const express = require("express");

const app = express();

const PORT = 3002;

// 1. Route Parameter
app.get("/employee/:id", (req, res) => {
    const employeeId = req.params.id;

    res.send(`<h2>Employee Details</h2>
              <p>Employee ID: ${employeeId}</p>`);
});

// 2. Multiple Route Parameters
app.get("/book/:genre/:title", (req, res) => {
    const { genre, title } = req.params;

    res.send(`<h2>Book Information</h2>
              <p>Genre: ${genre}</p>
              <p>Book Title: ${title}</p>`);
});

// 3. Query Parameters
app.get("/find", (req, res) => {
    const { name, department } = req.query;

    res.send(`<h2>Employee Search</h2>
              <p>Name: ${name || "Not provided"}</p>
              <p>Department: ${department || "All Departments"}</p>`);
});

// 4. Multiple Query Parameters
app.get("/products", (req, res) => {
    const { category, price } = req.query;

    res.send(`<h2>Product Filter</h2>
              <p>Category: ${category || "All Categories"}</p>
              <p>Price Range: ${price || "Any"}</p>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
