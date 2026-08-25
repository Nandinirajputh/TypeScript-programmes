const express = require("express");

const app = express();
const PORT = 3003;

app.use(express.json());

// Mock employee data
let employees = [
    { id: 1, name: "Nandini", department: "CSE" },
    { id: 2, name: "Rahul", department: "ECE" }
];

// 1. GET - Get all employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// 2. POST - Add a new employee
app.post("/employees", (req, res) => {
    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee
    });
});

// 3. PUT - Update an employee
app.put("/employees/:id", (req, res) => {
    const employeeId = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === employeeId);

    if (employee) {
        employee.name = req.body.name || employee.name;
        employee.department = req.body.department || employee.department;

        res.json({
            message: "Employee updated successfully",
            employee: employee
        });
    } else {
        res.status(404).json({
            error: "Employee not found"
        });
    }
});

// 4. DELETE - Remove an employee
app.delete("/employees/:id", (req, res) => {
    const employeeId = parseInt(req.params.id);

    const employeeExists = employees.some(
        emp => emp.id === employeeId
    );

    if (employeeExists) {
        employees = employees.filter(
            emp => emp.id !== employeeId
        );

        res.json({
            message: `Employee ${employeeId} deleted successfully`,
            remainingEmployees: employees
        });
    } else {
        res.status(404).json({
            error: "Employee not found"
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Employee REST API running at http://localhost:${PORT}`);
});
