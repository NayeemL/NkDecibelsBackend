import { Router } from "express";
// import multer from "multer";
// import bodyParser from "body-parser";
const router = Router();
import {createProduct, getProduct, updateProduct, deleteProduct} from "../../Controller/ProductController/addProductController.js";

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

router.route("/createProduct").post(createProduct);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

export default router;
