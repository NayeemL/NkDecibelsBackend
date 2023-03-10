import { Router } from "express";
const router = Router();

import { createProposal, createProposalTable, deleteProposal, getProposal, updateProposal, getoneProposal } from "../../Controller/proposalController/proposalController.js";

router.route("/createProposal").post(createProposal);
router.route("/createProposalTable").post(createProposalTable)
router.route("/getProposal").get(getProposal);
router.route("/updateProposal/:id").put(updateProposal);
router.route("/deleteProposal/:id").delete(deleteProposal);

router.route("/proposal_getone/:id").get(getoneProposal);

export default router;
