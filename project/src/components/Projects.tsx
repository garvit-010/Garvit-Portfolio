import React, { useState } from 'react';
import { Github, ExternalLink, Brain, BarChart3, Database, Zap } from 'lucide-react';

const Projects: React.FC = () => {

  const projects = [
    {
      title: "Child Malnutrition Prediction Model",
      description: "Predictive model for identifying malnutrition risk in children across tribal areas of Rajasthan using demographic and health data.",
      longDescription: "Built using LightGBM with Optuna hyperparameter optimization, achieving 94% accuracy in early malnutrition detection.",
      tech: ["Python", "LightGBM", "Optuna", "Pandas", "Scikit-learn"],
      image: "https://images.pexels.com/photos/8553876/pexels-photo-8553876.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "Featured",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Blend Property Prediction System",
      description: "Advanced regression model for predicting material blend properties using ensemble methods and hyperparameter tuning.",
      longDescription: "Implemented ensemble learning with automated feature selection, reducing prediction error by 35%.",
      tech: ["Python", "XGBoost", "Random Forest", "Optuna", "NumPy"],
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "Completed",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Interactive ML Dashboard",
      description: "Real-time dashboard for visualizing machine learning model performance and data insights with interactive charts.",
      longDescription: "Built with React and D3.js, featuring real-time model monitoring and performance analytics.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "In Progress",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Student Performance Analytics",
      description: "Comprehensive analysis of student academic performance patterns using statistical modeling and visualization.",
      longDescription: "Identified key factors affecting student success rates, providing actionable insights for educational institutions.",
      tech: ["Python", "Matplotlib", "Seaborn", "Statistical Analysis"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "Completed",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing neural network architectures and training processes in real-time.",
      longDescription: "Educational tool helping students understand deep learning concepts through visual representation.",
      tech: ["JavaScript", "TensorFlow.js", "Canvas API", "React"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "Featured",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Time Series Forecasting Tool",
      description: "LSTM-based forecasting system for predicting stock prices and market trends with confidence intervals.",
      longDescription: "Achieved 87% accuracy in short-term price predictions using advanced deep learning techniques.",
      tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Plotly"],
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com",
      demo: "https://example.com",
      status: "Completed",
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];


  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of AI, data science, and real-world impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Featured' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : project.status === 'In Progress'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    : 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                }`}>
                  {project.status}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-500/20 p-1.5 rounded-lg">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-xs rounded-full text-gray-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-sm font-medium transition-all group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that can make a positive impact. 
              Let's build something amazing together!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;