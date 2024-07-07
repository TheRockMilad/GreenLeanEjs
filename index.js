const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const users = [
  { name: "Zahra", family: "Hosseini", age: 24, role: "ADMIN" },
  { name: "Milad", family: "Hosseini", age: 33, role: "USER" },
  { name: "Hamid", family: "Heidar", age: 32, role: "ADMIN" },
  { name: "Ali", family: "Okhovat", age: 32, role: "ADMIN" },
];

app.get("/", (req, res) => {
  res.render("index", {
    users,
    title : "EJS"
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
