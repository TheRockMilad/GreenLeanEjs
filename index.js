const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const courses = require("./routes/course");
require("./configs/db");
const flash = require("express-flash");
const session = require("express-session");

app.use(
  session({
    secret: "123456",
    resave: false, 
    saveUninitialized: false,
  })
);
app.use(flash());

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/courses", courses);

app.use((req,res,error)=>{
  res.status(500).json({
    ErrorMessage : error
  })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
