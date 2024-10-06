
const express = require('express');
const app = express();
const path = require("path");

const logActivity = require("./logging");
const output = require("./output");


const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Display the page on the browser
app.get("^/$|/index(.html)?", (req, res) => 
{
    res.sendFile(path.join(__dirname, "index.html"));
});

// Count the number of clicks on the web page
app.get("/counter.js", (req, res) => 
{
    res.sendFile(path.join(__dirname, "counter.js"));
});

// Send click count from browser to server
app.post('/click', (req, res) => 
{
    const data = req.body;
    logActivity(data);
    res.send();
});

// Display the number of clicks in the log file
app.get("/output.js", (req, res) => 
{
    res.sendFile(path.join(__dirname, "output.js"));
});

app.listen(port, () => 
{
    console.log(`Server is running at http://localhost:${port}/`);
});