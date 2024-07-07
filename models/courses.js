const mongoose = require("mongoose");

const cousrseSchema = mongoose.Schema({
  title: { type: String, required: true },
});

const CoursesModel = mongoose.model("Course", cousrseSchema);

module.exports = CoursesModel