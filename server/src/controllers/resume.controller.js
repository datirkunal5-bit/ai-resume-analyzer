// server/src/controllers/resume.controller.js

import extractTextFromPDF from "../services/pdf.service.js";
import analyzeResume from "../services/gemini.service.js";
import AppError from "../utils/AppError.js";

const uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new AppError("No resume file was uploaded. Please attach a PDF file.", 400);
    }

    const { jobRole } = req.body;

    if (!jobRole || jobRole.trim() === "") {
      throw new AppError("Job role is required to analyze the resume.", 400);
    }

    const extractedText = await extractTextFromPDF(req.file.buffer);

    if (!extractedText || extractedText.trim() === "") {
      throw new AppError("Could not extract any readable text from this PDF.", 422);
    }

    const analysis = await analyzeResume(extractedText, jobRole);

    return res.status(200).json({
      status: "success",
      message: "Resume analyzed successfully",
      jobRole,
      analysis,
    });
  } catch (error) {
    next(error); // ← pass to centralized error handler instead of handling here
  }
};

export default uploadResume;