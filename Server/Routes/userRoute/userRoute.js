import { Router } from "express";
const router = Router();

import { createUser, deleteUser, getoneUser, getUser, updateUser, userLogin } from "../../Controller/userController/userController.js";
import { authenticateToken } from "../../middleware/auth.js";

router.route("/createUser").post(createUser);
router.route("/getUser").get(getUser);
router.route("/getone/:id").get(getoneUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);

router.route("/user_login").post(userLogin);
export default router;
