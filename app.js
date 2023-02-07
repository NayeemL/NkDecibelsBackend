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


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("first", file);
      cb(null, "/uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(filename.originalname))
    }
});

const upload = multer({storage:storage})

app.post('/ProductImage', upload.single )
  


import path from "path";

app.use(express.static(path.join("./", "/public")));
app.use(bodyParser.json());

// Admin Routers
import addCustomer from "./Server/Routes/CustomerRoute/addCustomerRoute.js";
import addProduct from "./Server/Routes/ProductRoute/addProductRoute.js"


// Admin app.use
app.use("/addCustomer", addCustomer)

export default app;