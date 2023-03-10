import fs from "fs"
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("first", file);
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let productImage = multer({ storage: storage });
export default productImage.single("productImage");