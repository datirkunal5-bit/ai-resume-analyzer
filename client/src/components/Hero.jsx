// src/components/Hero.jsx

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
          Powered by Google Gemini AI
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Analyze Your Resume with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Upload your resume, tell us your target job role, and get instant
          AI-powered feedback on your ATS score, strengths, missing skills,
          and personalized suggestions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
           <a href="#upload"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Analyze My Resume
          </a>
          
           <a href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;