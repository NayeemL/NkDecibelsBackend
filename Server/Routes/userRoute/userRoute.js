import { Router } from "express";
const router = Router();

import { createUser, deleteUser, getUser, updateUser } from "../../Controller/userController/userController.js";

router.route("/createUser").post(createUser);
router.route("/getUser").get(getUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);

export default router;
