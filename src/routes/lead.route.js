import { Router } from "express";

import { createLead, getLeads, getLeadById, updateLead, deleteLead } from "../controllers/lead.controller.js";

const router = Router()


router.route("/create").post(createLead)
router.route("/all").get(getLeads)
router.route("/:id").get(getLeadById)
router.route("/:id").put(updateLead)
router.route("/:id").delete(deleteLead)


export default router;