// server/src/services/gemini.service.js

import { GoogleGenAI } from "@google/genai";
import env from "../config/env.js";

const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

const buildPrompt = (resumeText, jobRole) => `
You are an expert resume reviewer and ATS (Applicant Tracking System) specialist.

Analyze the resume text below for the target job role: "${jobRole}".

Return ONLY a valid JSON object (no markdown, no code fences, no explanation text before or after) with EXACTLY this structure:

{
  "resumeScore": <number 0-100>,
  "atsScore": <number 0-100>,
  "strengths": [<string>, ...],
  "missingSkills": [<string>, ...],
  "suggestions": [<string>, ...],
  "summary": "<string, 2-3 sentences>"
}

Resume text:
"""
${resumeText}
"""
`;

const analyzeResume = async (resumeText, jobRole) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildPrompt(resumeText, jobRole),
    });

    const rawText = response.text.trim();

    // Strip markdown code fences if Gemini adds them despite instructions
    const cleanedText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const analysis = JSON.parse(cleanedText);
    return analysis;
  } catch (error) {
    console.error("GEMINI SERVICE ERROR:", error);
    throw new Error("Failed to analyze resume using AI. Please try again.");
  }
};

export default analyzeResume;