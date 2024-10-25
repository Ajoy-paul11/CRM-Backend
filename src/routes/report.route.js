import { Router } from "express";
import { generatePDFReport, generateCSVReport } from "../controllers/report.controller.js";


const router = Router()


router.route("/pdf").get(generatePDFReport)
router.route("/csv").get(generateCSVReport)


export default router;