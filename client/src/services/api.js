// client/src/services/api.js

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const analyzeResume = async (file, jobRole) => {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("jobRole", jobRole);

  const response = await axios.post(
    `${API_BASE_URL}/api/resume/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};