import { Router } from "express";
const router = Router();
import {createProduct, getProduct, updateProduct, deleteProduct} from "../../Controller/ProductController/addProductController.js";

import productImage from "../../middleware/multer.js";

router.route("/createProduct", productImage).post(createProduct, productImage);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

export default router;
