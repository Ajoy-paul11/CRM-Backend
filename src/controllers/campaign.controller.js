import { Campaign } from "../models/campaign.model.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


// * Create a Campaign *
const createCampaign = AsyncHandler(async (req, res, next) => {
    const { name, budget, spent, status, startDate, endDate, leadsGenerated } = req.body

    if (!name || !budget || !spent || !status || !startDate || !endDate || !leadsGenerated) {
        return next(new ApiError(404, "All fields are required"))
    }

    const newCampaign = await Campaign.create(
        { name, budget, spent, status, startDate, endDate, leadsGenerated }
    )

    return res.status(201).json(
        new ApiResponse(201, newCampaign, "New campaign created successfully")
    )
})


// * Get all Campaign *
const getCampaigns = AsyncHandler(async (req, res, next) => {
    const allCampaigns = await Campaign.find()

    return res.status(200).json(
        new ApiResponse(200, allCampaigns, "Campaigns retrieved successfully")
    )
})


// * Get single Campaign *
const campaignById = AsyncHandler(async (req, res, next) => {
    const { id } = req.body

    const campaign = await Campaign.findById(id)
    if (!campaign) {
        return next(new ApiError(404, "Campaign not found"))
    }

    return res.status(200).json(
        new ApiResponse(200, campaign, "Campaign retrieved successfully")
    )

})


// * Update a Campaign *
const updateCampaign = AsyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { name, budget, spent, status, startDate, endDate, leadsGenerated } = req.body

    const campaign = await Campaign.findById(id)
    if (!campaign) {
        return next(new ApiError(404, "Campaign not found"))
    }

    const campaignUpdate = await Campaign.findByIdAndUpdate(
        id,
        { name, budget, spent, status, startDate, endDate, leadsGenerated },
        { new: true }
    )

    return res.status(201).json(
        new ApiResponse(201, campaignUpdate, "Campaign data updated successfully")
    )
})


// * Delete a Campaign *
const deletedCampaign = AsyncHandler(async (req, res, next) => {
    const { id } = req.params

    const campaign = await Campaign.findByIdAndDelete(id)
    if (!campaign) {
        return next(new ApiError(404, "Campaign not found to be deleted"))
    }

    return res.status(201).json(
        new ApiResponse(201, {}, "Campaign deleted successfully")
    )
})


export { createCampaign, getCampaigns, campaignById, updateCampaign, deletedCampaign }