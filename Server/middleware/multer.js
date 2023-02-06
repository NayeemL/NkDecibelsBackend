// import multer from "multer";
// import path from "path"

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("first", file);
//     cb(null, "/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(filename.originalname))
//   }
// });

// let uploads = multer({ storage: storage });
// export default uploads.single("productImage");