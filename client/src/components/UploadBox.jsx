// src/components/UploadBox.jsx

import { useState } from "react";

const UploadBox = ({ file, onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      onFileSelect(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center w-full border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-200 cursor-pointer
        ${
          isDragging
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50/50"
        }`}
    >
      <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3"
          />
        </svg>
      </div>

      {file ? (
        <p className="text-sm font-medium text-indigo-700">
          Selected file: <span className="font-semibold">{file.name}</span>
        </p>
      ) : (
        <>
          <p className="text-base font-medium text-gray-700">
            Drag & drop your resume here
          </p>
          <p className="text-sm text-gray-400 mt-1">PDF files only, up to 5MB</p>
        </>
      )}

      <label
        htmlFor="resume-upload"
        className="mt-5 inline-block px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
      >
        Browse File
      </label>
      <input
        id="resume-upload"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadBox;