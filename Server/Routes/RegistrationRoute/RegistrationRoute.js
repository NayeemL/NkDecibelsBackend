import { Router } from "express";
const router = Router();

import {Registration} from "../../Controller/RegistrationController/RegistrationController.js"

router.route("/registration").post(Registration);

export default router;
