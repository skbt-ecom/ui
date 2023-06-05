const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.static("storybook-static"));

app.listen(PORT, HOST);

// eslint-disable-next-line
console.log(`Running on http://${HOST}:${PORT}`);
