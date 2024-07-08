const coursesModel = require("../models/courses");

exports.create = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      req.flash("error", "عنوان دوره ای وارد نشد");

      return res.redirect("/courses");
    }

    const course = await coursesModel.findOne({ title });

    if (course) {
      req.flash("error", "اسم این دوره تکراری هست");

      return res.redirect("/courses");
    }

    await coursesModel.create({ title });
    req.flash("success", "دوره مورد نظر با موفقیت ایجاد شد");

    return res.redirect("/courses");
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};

exports.getAll = async (req, res) => {
  const courses = await coursesModel.find({});

  res.render("index", {
    courses,
    title: "Courses Page",
  });
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    await coursesModel.findOneAndDelete({ _id: id });

    req.flash("success", "دوره مورد نظر با موفقیت حذف شد");
    res.redirect("/courses");
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};

exports.edit = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  await coursesModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        title,
      },
    }
  );
  req.flash("success", "دوره با موفقیت ویرایش شد");
  res.redirect("/courses");
};

exports.search = async (req, res) => {
  try {
    const searchQuery = req.query.course;
    if (!searchQuery) {
      req.flash("error", "مقدار جستجو خالی است");
      // return res.render("index", {title:"ejs" });
      // return res.status(400).send('Course query is required');
    }

    const courses = await coursesModel.find({
      title: { $regex: searchQuery, $options: "i" },
    });

    if (courses.length === 0) {
      return res.render("index", { courses, title: "ejs" });
    }

    res.render("index", { courses, title: "ejs" }); // مسیر فایل نمایشی خود را درست تعیین کنید
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

