import mongoose, { Schema } from "mongoose";


const leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    source: {
        type: String,
        required: true
    }, // facebook, linkedin, instagram, etc.
    status: {
        type: String,
        default: 'new'
    },
}, { timestamps: true })


export const Lead = mongoose.model("Lead", leadSchema)