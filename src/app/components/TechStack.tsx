import React from 'react';

const TechStack: React.FC = () => {
  const languages = [
    { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-ES6+-4A90E2?logo=javascript&logoColor=white' },
    { name: 'Python', badge: 'https://img.shields.io/badge/Python-3.x-5B9BD5?logo=python&logoColor=white' },
    { name: 'React', badge: 'https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white' },
    { name: 'Next.js', badge: 'https://img.shields.io/badge/Next.js-14.x-3B82F6?logo=nextdotjs&logoColor=white' },
    { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-20.x-60A5FA?logo=nodedotjs&logoColor=white' },
    { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-4.x-6366F1?logo=express&logoColor=white' },
  ];

  const frontend = [
    { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-5-3B82F6?logo=html5&logoColor=white' },
    { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-3-60A5FA?logo=css3&logoColor=white' },
    { name: 'Bootstrap', badge: 'https://img.shields.io/badge/Bootstrap-5.x-5B9BD5?logo=bootstrap&logoColor=white' },
    { name: 'TailwindCSS', badge: 'https://img.shields.io/badge/TailwindCSS-3.x-4A90E2?logo=tailwind-css&logoColor=white' },
  ];

  const databases = [
    { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-7.x-6366F1?logo=mongodb&logoColor=white' },
    { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-8.x-5B9BD5?logo=mysql&logoColor=white' },
  ];

  const tools = [
    { name: 'Git', badge: 'https://img.shields.io/badge/Git-2.x-3B82F6?logo=git&logoColor=white' },
    { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-Pro-60A5FA?logo=github&logoColor=white' },
    { name: 'VS Code', badge: 'https://img.shields.io/badge/VSCode-Latest-4A90E2?logo=visualstudiocode&logoColor=white' },
    { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-API-6366F1?logo=postman&logoColor=white' },
    { name: 'Vercel', badge: 'https://img.shields.io/badge/Vercel-Deploy-5B9BD5?logo=vercel&logoColor=white' },
  ];

  return (
    <section id="techstack" className="bg-slate-800 py-20 px-4 relative overflow-hidden">
      {/* Subtle floating animated elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-slate-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-blue-600 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-slate-500 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-700/30 backdrop-blur-lg p-8 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-400 flex items-center justify-center gap-2">
              <span className="text-2xl">⚡</span>
              Languages & Frameworks
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {languages.map((tech, index) => (
                <div key={tech.name} className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={tech.badge} alt={tech.name} className="rounded-md shadow-lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-lg p-8 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-400 flex items-center justify-center gap-2">
              <span className="text-2xl">🎨</span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {frontend.map((tech, index) => (
                <div key={tech.name} className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={tech.badge} alt={tech.name} className="rounded-md shadow-lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-lg p-8 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-400 flex items-center justify-center gap-2">
              <span className="text-2xl">🗄️</span>
              Databases
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {databases.map((tech, index) => (
                <div key={tech.name} className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={tech.badge} alt={tech.name} className="rounded-md shadow-lg" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-lg p-8 rounded-xl border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-400 flex items-center justify-center gap-2">
              <span className="text-2xl">🛠️</span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {tools.map((tech, index) => (
                <div key={tech.name} className="hover:scale-110 transition-transform duration-200 hover:drop-shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={tech.badge} alt={tech.name} className="rounded-md shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
