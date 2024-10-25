import { Lead } from "../models/lead.model.js"
import { Campaign } from "../models/campaign.model.js"
import PDFDocument from "pdfkit"
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const generatePDFReport = AsyncHandler(async (req, res, next) => {
    const doc = new PDFDocument()

    res.setHeader("Content-Type", "application/pdf")
    res.setHeader("Content-Disposition", "attachment; filename= report.pdf")

    doc.pipe(res)

    const leads = await Lead.find()
    const campaigns = await Campaign.find()

    doc.fontSize(20).text("Marketing and Leads Report", { align: "center" })
    doc.moveDown()

    doc.fontSize(16).text("Lead Summary")
    doc.fontSize(12).text(`Total leads: ${leads.length}`)

    const sourceBreakdown = leads.reduce((acc, lead) => {
        acc[lead.source] = (acc[lead.source] || 0) + 1;
        return acc;
    }, {});

    doc.moveDown();
    doc.text('Lead Sources:');
    Object.entries(sourceBreakdown).forEach(([source, count]) => {
        doc.text(`${source}: ${count}`);
    });

    doc.moveDown();
    doc.fontSize(16).text('Campaign Summary');
    campaigns.forEach(campaign => {
        doc.fontSize(12).text(`
                    Campaign: ${campaign.name}
                    Budget:  ${campaign.budget}
                    Spent:  ${campaign.spent}
                    Leads Generated: ${campaign.leadsGenerated}
                `);
        doc.moveDown();
    });

    doc.end();

})


const generateCSVReport = AsyncHandler(async (req, res, next) => {
    const leads = await Lead.find()

    const csvWriter = createCsvWriter({
        path: 'report.csv',
        header: [
            { id: 'name', title: 'NAME' },
            { id: 'email', title: 'EMAIL' },
            { id: 'phone', title: 'PHONE' },
            { id: 'source', title: 'SOURCE' },
            { id: 'status', title: 'STATUS' },
            { id: 'createdAt', title: 'CREATED AT' }
        ]
    });

    await csvWriter.writeRecords(leads);

    res.setHeader("Content-Type", "text/csv")
    res.setHeader("Content-Disposition", "attachment; filename=report.csv")

    res.download("report.csv")
})


export { generatePDFReport, generateCSVReport }