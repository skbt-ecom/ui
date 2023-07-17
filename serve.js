const express = require("express");
const path = require("path");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.static("storybook-static"));
app.use(express.static("playroom-static"));

app.get("/playroom", (req, res) => {
  res.sendFile(path.join("playroom-static", "index.html"), { root: __dirname });
});

app.get("/", (req, res) => {
  res.sendFile(path.join("storybook-static", "index.html"), { root: __dirname });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
