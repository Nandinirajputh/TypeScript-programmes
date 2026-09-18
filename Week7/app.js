const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        name: "Nandu",
        error: null
    });
});

// Form submission
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    // Basic validation
    if (!name || !email) {
        return res.render("index", {
            name: "Nandu",
            error: "All fields are required!"
        });
    }

    if (!email.includes("@")) {
        return res.render("index", {
            name: "Nandu",
            error: "Enter a valid email!"
        });
    }

    res.render("success", {
        name: name,
        email: email
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
