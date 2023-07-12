const express = require("express");
const path = require("path");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.static("storybook-static"));

app.get("/", (req, res) => {
  res.sendFile(path.join("storybook-static", "index.html"));
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
