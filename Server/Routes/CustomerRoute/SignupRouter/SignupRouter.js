import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  userLogin,
  getoneUser,
} from "../../controller/SignupController/SignupController.js";
import {
  checkVerifivationCode,
  forgetPassword,
  updatepassword,
} from "../../controller/userController.js";
import { authenticateToken } from "../../middleware/auth.js";

router.route("/create").post(userSignup);
router.route("/getall").get(authenticateToken, getList);
router.route("/student_getone/:id").get(getoneUser);
router.route("/update/:id").put(updateEmployee);
router.route("/delete/:id").delete(deleteEmployee);
router.post("/forget/password", forgetPassword);
router.post("/verify/password", checkVerifivationCode);
router.put("/update/password/:id", updatepassword);
router.route("/login").post(userLogin);

export default router;
