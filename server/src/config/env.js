// server/src/config/env.js

import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  NODE_ENV: process.env.NODE_ENV || "development",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

if (!env.GEMINI_API_KEY) {
  throw new Error(
    "❌ Missing GEMINI_API_KEY in .env file. The server cannot start without it."
  );
}

export default env;