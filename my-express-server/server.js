const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Logged in!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>joenldominictapang.dev@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<p>Jonel Dominic Tapang</p>");
});

app.get("/test", (req, res) => {
  res.send("<h1>Test 1</h1>");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
