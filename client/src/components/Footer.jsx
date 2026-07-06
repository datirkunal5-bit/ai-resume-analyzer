// src/components/Footer.jsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-lg font-semibold text-white">
              AI Resume Analyzer
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Get instant, AI-powered feedback on your resume and land your
            next role with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#features" className="hover:text-white transition-colors duration-200">
                Features
              </a>
            </li>
            <li>
              <a href="#upload" className="hover:text-white transition-colors duration-200">
                Analyze Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
            Get in Touch
          </h4>
          <p className="text-sm text-gray-400 mb-3">
            Have feedback or questions? We'd love to hear from you.
          </p>
          
            <a href="mailto:support@airesumeanalyzer.com"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            support@airesumeanalyzer.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <p className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-500 text-center">
          © {currentYear} AI Resume Analyzer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;