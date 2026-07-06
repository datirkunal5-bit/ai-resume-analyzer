// server/src/services/pdf.service.js

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const extractTextFromPDF = async (fileBuffer) => {
  try {
    const data = await pdfParse(fileBuffer);
    return data.text;
  } catch (error) {
    console.error("PDF PARSE ERROR:", error);
    throw new Error("Failed to extract text from the PDF file.");
  }
};

export default extractTextFromPDF;