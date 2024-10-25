import express from "express"
import { processError } from "./middleware/error.middleware.js"
import cors from "cors"


const app = express()


// * request middleware *
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*", credentials: true }))


// * import routes *
import leadRoutes from "./routes/lead.route.js"
import campaignRoutes from "./routes/campaign.route.js"
import reportRoutes from "./routes/report.route.js"


// * declared routes *
app.use("/api/v1/leads", leadRoutes)
app.use("/api/v1/campaigns", campaignRoutes)
app.use("/api/v1/reports", reportRoutes)



// * error middleware *
app.use(processError)


export { app }