import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        {/* Floating particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        {/* Neural network nodes */}
        <div className="neural-network">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="node"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 30}%`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <Sparkles className="text-purple-400" size={16} />
            <span className="text-sm font-medium text-purple-300">
              Machine Learning Enthusiast
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Garvit
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Audichya
            </span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-gray-300">
              AI Student at VIT Bhopal
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Turning data into insights, and insights into impact. 
              Building the future one algorithm at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => setActiveTab('Projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => setActiveTab('Contact')}
              className="px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-400" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Home;