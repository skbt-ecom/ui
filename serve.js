const express = require("express");
const path = require("path");

// Constants
const PORT = 8080;

// App
const app = express();
app.use(express.static("storybook-static"));
app.use("/playroom", express.static("playroom-static"));

app.listen(PORT);
