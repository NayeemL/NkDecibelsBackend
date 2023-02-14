import { Router } from "express";
import multer from "multer";
import path from "path"
const router = Router();
import {createProduct, getProduct, updateProduct, deleteProduct, getProductData} from "../../Controller/ProductController/addProductController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  });
  
  
  const fileFilter = (req, file, cb) => {
      var ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
         return cb(new Error('Only images are allowed'))
      }
      cb(null, true)
  };
  
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
   limit:{
   fieldSize: 1*1024*1024 //1 MB
   }
  });

router.post("/createProduct",upload.single('productImage'), createProduct);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

router.route("/getoneProduct").post(getProductData);

export default router;
