import { Router } from "express";
const router = Router();

import {
  userSignup,
  getList,
  updateEmployee,
  deleteEmployee,
  uploadResume,
  employeeLogin,
  getoneUser,
} from "../../controller/SignupController/professionalController.js";
import { authenticateToken } from "../../middleware/auth.js";
import resume from "../../middleware/multer.js";

router.route("/Employeecreate").post(userSignup);
router.route("/Employee_get").get(authenticateToken, getList);
router.route("/employee_getone/:id").get(getoneUser);
router.route("/Employee_update/:id").put(updateEmployee);
router.route("/Employee_delete/:id").delete(deleteEmployee);
router.post("/resume", resume, uploadResume);

router.route("/employee_login").post(employeeLogin);

export default router;
