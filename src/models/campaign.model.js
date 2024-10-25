import mongoose, { Schema } from "mongoose";


const campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    spent: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'active'
    }, // active, paused, completed
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    leadsGenerated: {
        type: Number,
        default: 0
    }
})


export const Campaign = mongoose.model("Campaign", campaignSchema)