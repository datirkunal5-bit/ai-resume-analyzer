// server/src/middlewares/upload.middleware.js

import multer from "multer";

// Store files in memory (RAM) as a Buffer — no disk writes needed
const storage = multer.memoryStorage();

// Only accept PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

export default upload;