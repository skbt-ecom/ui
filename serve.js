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
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, ".");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
