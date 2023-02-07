import { Router } from "express";
// import multer from "multer";
// import bodyParser from "body-parser";
const router = Router();
import {createProduct, getProduct, updateProduct, deleteProduct} from "../../Controller/ProductController/addProductController.js";

<<<<<<< HEAD
import {createProduct} from "../../Controller/ProductController/addProductController.js";
import { getProduct } from "../../Controller/ProductController/addProductController.js";
import { updateProduct } from "../../Controller/ProductController/addProductController.js";
import { deleteProduct } from "../../Controller/ProductController/addProductController.js"; 
=======
// const storage = multer.diskStorage({
//     destination: function(req, res, cb){
//         cd(null, 'public/ProductImage')
//     },
//     filename: function(req, res, cb){
//         cb(null, Date.now()+'_'+file.originalname)
//     }
// })
// // , upload.single('FileList')

// const upload = multer({storage:storage});
>>>>>>> b3d797ab2c00b0099b82700122a7612b3a6b80a5

import upload from "../../middleware/multer.js"

router.route("/createProduct", upload).post(createProduct);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

export default router;
