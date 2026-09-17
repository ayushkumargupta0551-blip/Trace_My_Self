const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// -----------------------------------------
// Middleware
// -----------------------------------------

// Allow requests from the frontend
app.use(
    cors({
         origin: "https://ayushkumargupta0551-blip.github.io"
    })
);

// Allow Express to read JSON request bodies
app.use(express.json());


// -----------------------------------------
// Routes
// -----------------------------------------

// Home route
app.get("/", (req, res) => {
    res.send("Digital Footprint Detector Backend is running");
});

// API test route
app.get("/api/test", (req, res) => {
    console.log("API TEST ROUTE HIT");

    res.json({
        success: true,
        message: "API is working"
    });
});

// Authentication routes
app.use("/api/auth", authRoutes);


// -----------------------------------------
// Database Connection
// -----------------------------------------

connectDB();


// -----------------------------------------
// Start Server
// -----------------------------------------

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

