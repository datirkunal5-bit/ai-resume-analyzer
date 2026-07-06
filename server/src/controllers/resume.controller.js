// server/src/controllers/resume.controller.js

import extractTextFromPDF from "../services/pdf.service.js";
import analyzeResume from "../services/gemini.service.js";

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        message: "No resume file was uploaded. Please attach a PDF file.",
      });
    }

    const { jobRole } = req.body;

    if (!jobRole || jobRole.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: "Job role is required to analyze the resume.",
      });
    }

    const extractedText = await extractTextFromPDF(req.file.buffer);

    if (!extractedText || extractedText.trim() === "") {
      return res.status(422).json({
        status: "error",
        message: "Could not extract any readable text from this PDF.",
      });
    }

    const analysis = await analyzeResume(extractedText, jobRole);

    return res.status(200).json({
      status: "success",
      message: "Resume analyzed successfully",
      jobRole,
      analysis,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Something went wrong while analyzing the resume.",
    });
  }
};

export default uploadResume;