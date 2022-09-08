const express = require("express");
const app = express(); // create express app
const open = require("open");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();


// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});

//Serve the react app
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

//Serve static resources
app.use(express.static("static"));
app.get("/", (req, res) => {
    var staticPath = path.join(__dirname, "static", "index.html")
    console.log(staticPath)
    res.sendFile(staticPath);
});

// Proxy setup
app.use('/api/property', createProxyMiddleware({
    target: process.env.API_SEARCH_URL,
    changeOrigin: true
}));

//Catch-all for React Router
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

open("http://localhost:5000");