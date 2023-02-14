import { Router } from "express";
const router = Router();

import {createCustomer, getoneCustomer, getCustomerData} from "../../Controller/CustomerController/addCustomerController.js";
import { getCustomer } from "../../Controller/CustomerController/addCustomerController.js";
import { updateCustomer } from "../../Controller/CustomerController/addCustomerController.js";
import { deleteCustomer } from "../../Controller/CustomerController/addCustomerController.js";

router.route("/createCustomer").post(createCustomer);
router.route("/getCustomer").get(getCustomer);
router.route("/updateCustomer/:id").put(updateCustomer);
router.route("/deleteCustomer/:id").delete(deleteCustomer);
router.route("/getoneCustomer").post(getCustomerData);

export default router;
