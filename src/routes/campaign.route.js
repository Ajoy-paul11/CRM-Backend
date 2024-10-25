import { Router } from "express";

import { createCampaign, getCampaigns, campaignById, updateCampaign, deletedCampaign } from "../controllers/campaign.controller.js";


const router = Router()


router.route("/create").post(createCampaign)
router.route("/all").get(getCampaigns)
router.route("/:id").get(campaignById)
router.route("/:id").put(updateCampaign)
router.route("/:id").delete(deletedCampaign)


export default router;