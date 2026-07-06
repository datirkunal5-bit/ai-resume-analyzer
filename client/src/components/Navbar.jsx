// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-semibold text-gray-800 tracking-tight">
            AI Resume Analyzer
          </span>
        </div>

        {/* Reserved space for future nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors duration-200">
            Features
          </a>
          <a href="#upload" className="hover:text-indigo-600 transition-colors duration-200">
            Analyze Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;