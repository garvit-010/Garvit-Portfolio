import React from 'react';
import { Mail, Github, Linkedin, MapPin, Rocket, Coffee, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      url: 'https://github.com/garvitaudichya',
      color: 'hover:text-gray-400',
      description: 'Check out my code and projects',
      handle: '@garvitaudichya'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      url: 'https://linkedin.com/in/garvitaudichya',
      color: 'hover:text-blue-400',
      description: 'Connect with me professionally',
      handle: 'Garvit Audichya'
    },
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8" />,
      url: 'mailto:garvit.audichya@vitbhopal.ac.in',
      color: 'hover:text-purple-400',
      description: 'Send me a direct message',
      handle: 'garvit.audichya@vitbhopal.ac.in'
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'VIT Bhopal, Madhya Pradesh, India',
      color: 'text-green-400'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Status',
      value: 'Available for opportunities',
      color: 'text-blue-400'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Usually within 24 hours',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Collaborate
            </span>
            <Rocket className="inline ml-4 text-purple-400" size={40} />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to build something amazing together? I'm always excited to discuss new opportunities, 
            innovative projects, or just chat about machine learning and technology.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <span>Connect With Me</span>
              </h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-6 p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`${link.color} transition-colors group-hover:scale-110 transform duration-300`}>
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100 text-lg mb-1 group-hover:text-purple-300 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-1">{link.description}</p>
                      <p className="text-xs text-purple-400 font-mono">{link.handle}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information & Status */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <span>Contact Information</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-6 bg-white/5 rounded-2xl border border-gray-600 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className={`${info.color} bg-white/10 p-3 rounded-xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-1">{info.title}</h4>
                      <p className="text-sm text-gray-400">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Status */}
              <div className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-400">Available for opportunities</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Currently open to internships, research collaborations, and freelance projects 
                  in machine learning and data science. I'm particularly interested in projects 
                  with social impact and real-world applications.
                </p>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Rocket className="text-purple-400" size={20} />
                <span>What I'm Looking For</span>
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Machine Learning internships and research opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Collaborative projects with social impact</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Open source contributions in AI/ML space</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Mentorship and learning opportunities</span>
                </li>
              </ul>
            </div>

            {/* Fun Call-to-Action */}
            <div className="text-center bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <Coffee className="text-white" size={24} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">Let's Grab a Virtual Coffee!</h4>
              <p className="text-gray-400 text-sm mb-4">
                Whether it's discussing the latest ML trends, brainstorming project ideas, 
                or just having a friendly chat about technology and innovation.
              </p>
              <div className="text-2xl">☕ 🚀</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I believe the best projects come from passionate collaboration. If you have an idea 
              that could make a difference, let's make it happen together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:garvit.audichya@vitbhopal.ac.in"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/garvitaudichya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;