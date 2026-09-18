const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Session middleware
app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: false
    })
);

// Login page
app.get("/", (req, res) => {
    res.render("login");
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {

        // Create cookie
        res.cookie("username", username);

        // Create session
        req.session.user = username;

        res.redirect("/home");
    } else {
        res.send("Invalid username or password");
    }
});

// Private route
app.get("/home", (req, res) => {

    // Check session
    if (!req.session.user) {
        return res.send("Access Denied! Please login first.");
    }

    // Read cookie
    const username = req.cookies.username;

    res.render("home", {
        username: username
    });
});

// Logout
app.get("/logout", (req, res) => {

    // Destroy session
    req.session.destroy();

    // Clear cookie
    res.clearCookie("username");

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
