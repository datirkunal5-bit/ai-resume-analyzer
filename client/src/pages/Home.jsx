// src/pages/Home.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import JobRoleInput from "../components/JobRoleInput";
import Footer from "../components/Footer";
import { analyzeResume } from "../services/api";

const features = [
  {
    title: "ATS Score",
    description:
      "See exactly how well your resume performs against Applicant Tracking Systems used by recruiters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "AI Suggestions",
    description:
      "Get personalized, actionable suggestions to improve wording, structure, and impact of your resume.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Skill Gap Analysis",
    description:
      "Discover which key skills for your target role are missing from your resume, and how to add them.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

// Small reusable score display — kept inline since it's only used here for now
const ScoreCircle = ({ label, score }) => (
  <div className="flex flex-col items-center">
    <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 border-4 border-indigo-100">
      <span className="text-2xl font-bold text-indigo-700">{score}</span>
    </div>
    <p className="mt-3 text-sm font-medium text-gray-600">{label}</p>
  </div>
);

const Home = () => {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const isFormValid = file && jobRole.trim() !== "";

  const handleAnalyze = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const data = await analyzeResume(file, jobRole);
      setAnalysisResult(data.analysis);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong while analyzing your resume. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Upload + Job Role Section */}
        <section id="upload" className="max-w-3xl mx-auto px-6 py-20">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100 p-8 sm:p-10 space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                Upload Your Resume
              </h2>
              <p className="text-gray-500 mt-1">
                We'll analyze it against your target job role in seconds.
              </p>
            </div>

            <UploadBox file={file} onFileSelect={setFile} />
            <JobRoleInput value={jobRole} onChange={setJobRole} />

            {error && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                <span className="text-red-500 font-bold">!</span>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!isFormValid || isLoading}
              className={`w-full py-3.5 rounded-xl font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-2
                ${
                  !isFormValid || isLoading
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5"
                }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Analyzing...
                </>
              ) : (
                "Analyze Resume"
              )}
            </button>
          </div>

          {/* Results Section */}
          {analysisResult && (
            <div className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100 p-8 sm:p-10 space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Your Resume Analysis
              </h3>

              <div className="flex justify-center gap-10">
                <ScoreCircle label="Resume Score" score={analysisResult.resumeScore} />
                <ScoreCircle label="ATS Score" score={analysisResult.atsScore} />
              </div>

              <p className="text-gray-600 leading-relaxed text-center max-w-xl mx-auto">
                {analysisResult.summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {analysisResult.strengths.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">
                    Missing Skills
                  </h4>
                  <ul className="space-y-2">
                    {analysisResult.missingSkills.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-red-500">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-3">
                  Suggestions
                </h4>
                <ul className="space-y-2">
                  {analysisResult.suggestions.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-indigo-500">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">
                Everything You Need to Land the Job
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Our AI evaluates your resume the same way recruiters and ATS
                software do — so you're never left guessing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;