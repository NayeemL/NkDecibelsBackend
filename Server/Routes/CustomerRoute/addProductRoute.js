import { Router } from "express";
const router = Router();

import {createProduct} from "../../Controller/CustomerController/addProductController.js";
import { getProduct } from "../../Controller/CustomerController/addProductController.js";
import { updateProduct } from "../../Controller/CustomerController/addProductController.js";
import { deleteProduct } from "../../Controller/CustomerController/addProductController.js";

router.route("/createProduct").post(createProduct);
router.route("/getProduct").get(getProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);

export default router;
