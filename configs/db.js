const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Server connected successfully"))
  .catch((err) => console.log("server error => ", err));
