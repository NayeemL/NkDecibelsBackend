import express, { json } from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(
  json({
    limit: "25MB",
  })
);

app.use(
  express.urlencoded({
    extended: false,
    limit: "20mb",
  })
);

// app.use('./public/ProductImage', express.static('uploads'));

//Image Store With Multer
// const upload = multer({storage:storage});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       console.log(req.file)
//       cb(null, ".public/ProductImage");
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(filename.originalname))
//     }
// });

// const upload = multer({dest:'uploads/'});

// app.post('/ProductImage', upload.single('ProductImage'), function (req, res, next) {
//   console.log(req.file)
//   if(!req.file){
//     res.status(500).send('sorry, cant find that');
//   }
//   else{
//     res.status(200).send('uploaded successfully')
//   }
// })

// Admin Routers
import addCustomer from "./Server/Routes/CustomerRoute/addCustomerRoute.js";
import addProduct from "./Server/Routes/ProductRoute/addProductRoute.js";

// Admin app.use
app.use("/addCustomer", addCustomer);

export default app;
