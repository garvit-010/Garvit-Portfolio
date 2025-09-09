import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Home': return <Home setActiveTab={setActiveTab} />;
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        isDark 
          ? 'bg-slate-900/80 border-purple-500/20' 
          : 'bg-white/80 border-purple-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                GA
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? isDark
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                          : 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                        : isDark
                          ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                          : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isDark ? 'bg-slate-900/95 border-purple-500/20' : 'bg-white/95 border-purple-200'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-200 ${
                    activeTab === tab
                      ? isDark
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-600 text-white'
                      : isDark
                        ? 'text-gray-300 hover:bg-slate-800'
                        : 'text-gray-600 hover:bg-purple-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="page-transition">
          {renderActiveComponent()}
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-20 ${
        isDark ? 'border-purple-500/20 bg-slate-900/50' : 'border-purple-200 bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2025 Garvit Audichya. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-purple-500 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-purple-500 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:garvit@example.com"
                className={`transition-colors hover:text-purple-500 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;