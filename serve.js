const express = require("express");
const path = require("path");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.static("storybook-static"));
app.use(express.static("playroom-static"));

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
