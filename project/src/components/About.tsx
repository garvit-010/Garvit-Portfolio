import React from 'react';
import { Code, Heart, Gamepad2, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate 2nd-year Computer Science student at VIT Bhopal, 
                specializing in Artificial Intelligence and Machine Learning. My journey 
                into the world of AI began with a simple question: 
                <span className="font-semibold text-purple-400"> "How can technology solve real-world problems?"</span>
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This curiosity led me to focus on impactful projects, particularly in 
                healthcare and social welfare. I'm currently working on predictive models 
                for child malnutrition in tribal areas of Rajasthan, combining my technical 
                skills with a desire to make a meaningful difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Curiosity</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Code className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Favorite Language</p>
                      <p className="text-sm text-gray-400">Python & its ML ecosystem</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Heart className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Passion Project</p>
                      <p className="text-sm text-gray-400">Fighting malnutrition with ML</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-pink-500/20 p-2 rounded-lg">
                      <Gamepad2 className="text-pink-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Fun Fact</p>
                      <p className="text-sm text-gray-400">Speedrunner & morning runner</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <MapPin className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-400">Bhopal, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;