// server/src/routes/health.routes.js

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is up and running",
    timestamp: new Date().toISOString(),
  });
});

export default router;