import React from 'react';
import { Brain, Database, BarChart3, Settings, Code2, Zap, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning & Data Science",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500",
      skills: [
        "Python", "Scikit-learn", "Pandas", "NumPy", "LightGBM", 
        "XGBoost", "Neural Networks", "Deep Learning", "Feature Engineering"
      ]
    },
    {
      title: "Data Visualization & Analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau", 
        "Statistical Analysis", "Data Mining", "Exploratory Data Analysis"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      color: "from-cyan-500 to-green-500",
      skills: [
        "Git & GitHub", "Linux", "SQL", "Jupyter Notebooks", "VS Code", 
        "Docker", "AWS Basics", "Command Line"
      ]
    },
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-green-500 to-purple-500",
      skills: [
        "React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", 
        "Node.js", "REST APIs", "Responsive Design"
      ]
    },
    {
      title: "Specialized Libraries & Frameworks",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Optuna (Hyperparameter Tuning)", "TensorFlow", "PyTorch", 
        "OpenCV", "NLTK", "Streamlit", "FastAPI", "Flask"
      ]
    }
  ];

  const achievements = [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Data Science Fundamentals",
      issuer: "IBM",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Optuna Optimization Expert",
      issuer: "Self-learned",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable insights
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/skill"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Highlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Machine Learning",
                description: "Advanced ML algorithms, hyperparameter optimization, and model deployment",
                icon: <Brain className="w-8 h-8" />,
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "Data Analysis",
                description: "Statistical analysis, data visualization, and insight generation",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Problem Solving",
                description: "Real-world applications, social impact projects, and innovative solutions",
                icon: <Zap className="w-8 h-8" />,
                color: "from-cyan-500 to-green-500"
              }
            ].map((competency, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${competency.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {competency.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-purple-300 transition-colors">
                  {competency.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <h4 className="font-semibold mb-2 text-gray-100 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold mb-4">Learning Philosophy</h3>
            <p className="text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
              "I believe in learning by doing. Every project teaches me something new, and every challenge 
              is an opportunity to grow. My goal is to use technology not just to solve problems, 
              but to create meaningful impact in people's lives."
            </p>
            <div className="flex justify-center items-center space-x-2 text-purple-400">
              <Brain className="w-5 h-5" />
              <span className="font-medium">Always Learning, Always Growing</span>
              <Brain className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;