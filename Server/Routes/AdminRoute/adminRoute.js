import { Router } from "express";
import {
  adminLogin,
  deleteEmployee,
  getList,
  updateEmployee,
  userSignup,
} from "../../Controller/AdminController/adminController.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = Router();

router.route("/admin_create").post(userSignup);
router.route("/admin_get").get(authenticateToken, getList);
router.route("/admin_update/:id").put(updateEmployee);
router.route("/admin_delete/:id").delete(deleteEmployee);

router.route("/admin_login").post(adminLogin);

export default router;
