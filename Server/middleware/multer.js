import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/resume");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let resume = multer({ storage: storage });
export default resume.single("resume");
