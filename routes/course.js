const express = require("express");
const courseRouter = express.Router();
const courseController = require("../controller/course");

courseRouter
  .route("/")
  .get(courseController.getAll)
  .post(courseController.create);

courseRouter.get("/remove/:id", courseController.remove);
courseRouter.post("/edit/:id", courseController.edit);
courseRouter.get("/search", courseController.search);

module.exports = courseRouter;
