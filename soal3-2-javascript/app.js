const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const multer = require("multer");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Up Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
}).single("file");

// Upload Image to Public
app.post("/uploads", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(405).json({ error: err.message });
    } else {
      res.status(201).json({
        image_url: `http://localhost:${port}/uploads/${req.file.filename}`
      });
    }
  });
});

// Get Image from Public - ex: http://localhost:3000/uploads/gambar.jpg-1651192632253.jpg
app.use("/uploads", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
