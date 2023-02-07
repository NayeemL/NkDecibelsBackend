import { Router } from "express";
const router = Router();

import {createProduct} from "../../Controller/ProductController/addProductController.js";
import { getProduct } from "../../Controller/ProductController/addProductController.js";
import { updateProduct } from "../../Controller/ProductController/addProductController.js";
import { deleteProduct } from "../../Controller/ProductController/addProductController.js"; 

import upload from "../../middleware/multer.js"

router.route("/createProduct", upload).post(createProduct);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

export default router;
