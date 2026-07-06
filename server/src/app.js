// server/src/app.js

import express from "express";
import cors from "cors";
import env from "./config/env.js";
import healthRoutes from "./routes/health.routes.js";
import resumeRoutes from "./routes/resume.routes.js"; // ← new import

const app = express();

// ---- Global Middleware ----
app.use(
  cors({
    origin: env.CLIENT_URL,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// ---- Routes ----
app.use("/api/health", healthRoutes);
app.use("/api/resume", resumeRoutes); // ← new route mounted

// ---- 404 Handler (unmatched routes) ----
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route ${req.originalUrl} not found`,
  });
});

export default app;