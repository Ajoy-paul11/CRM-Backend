import { Lead } from "../models/lead.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


// * Create a lead *
const createLead = AsyncHandler(async (req, res, next) => {
    const { name, email, phone, source, status } = req.body;

    if ([name, email, phone, source, status].some(field => field === "")) {
        return next(new ApiError(404, "All fields are required"))
    }

    const newLead = await Lead.create({
        name, email, phone, source, status
    })

    return res.status(201).json(
        new ApiResponse(201, newLead, "Lead is created successfully")
    )
})


// * Get all leads *
const getLeads = AsyncHandler(async (req, res, next) => {
    const leads = await Lead.find()

    return res.status(200).json(
        new ApiResponse(200, leads, "All leads fetched successfully")
    )
})


// * Get single lead * 
const getLeadById = AsyncHandler(async (req, res, next) => {
    const { id } = req.params

    const lead = await Lead.findById(id)

    if (!lead) {
        return next(new ApiError(404, "Lead not found"))
    }

    return res.status(200).json(
        new ApiResponse(200, lead, "Lead fetched successfully")
    )

})


// * Update a lead * 
const updateLead = AsyncHandler(async (req, res, next) => {
    const { id } = req.params

    const { name, email, phone, source, status } = req.body

    if ([name, email, phone, source, status].some(field => field === "")) {
        return next(new ApiError(404, "All fields are required"))
    }

    const lead = await Lead.findById(id)

    if (!lead) {
        next(new ApiError(404, "Lead not found to be updated"))
    }

    const leadUpdate = await Lead.findByIdAndUpdate(
        id,
        { name, email, phone, source, status },
        { new: true }
    )

    return res.status(201).json(
        new ApiResponse(201, leadUpdate, "lead updated successfully")
    )

})


// * Delete a Lead *
const deleteLead = AsyncHandler(async (req, res, next) => {
    const { id } = req.params

    const lead = await Lead.findByIdAndDelete(id)
    if (!lead) {
        return next(new ApiError(404, "Lead not found to be deleted"))
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Lead deleted successfully")
    )
})


export { createLead, getLeads, getLeadById, deleteLead, updateLead }