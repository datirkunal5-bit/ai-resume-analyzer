// server/src/middlewares/errorHandler.middleware.js

import multer from "multer";

const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  // Handle Multer-specific errors (file upload issues)
  if (err instanceof multer.MulterError) {
    let message = "File upload error.";

    if (err.code === "LIMIT_FILE_SIZE") {
      message = "File is too large. Maximum allowed size is 5MB.";
    } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
      message = "Unexpected file field. Please use the correct upload field.";
    }

    return res.status(400).json({
      status: "error",
      message,
    });
  }

  // Handle our custom fileFilter rejection (e.g., non-PDF files)
  if (err.message === "Only PDF files are allowed") {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  // Handle our custom AppError instances (known, expected errors)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Fallback: unexpected/unknown errors
  return res.status(500).json({
    status: "error",
    message: "Something went wrong on the server. Please try again later.",
  });
};

export default errorHandler;