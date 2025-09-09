import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-20 h-20 bg-blue-500 rounded-lg animate-pulse"></div>
        <div className="absolute top-32 right-24 w-16 h-16 bg-slate-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-24 left-32 w-12 h-12 bg-blue-600 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-slate-500 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl hover:bg-slate-800/70 transition-all duration-500 group">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300 relative">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors duration-300">
                Software Engineer Intern (Project Trainee)
              </h3>
              <p className="text-lg text-blue-400 mb-6 font-medium">
                EInfochips, Ahmedabad, India | Jan 2025 – June 2025
              </p>
              <ul className="space-y-4 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                <li className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed dynamic, user-friendly web solutions using PHP and WordPress.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to real-world projects by enhancing functionalities and solving practical challenges.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gained hands-on experience in full-stack development and project lifecycle management.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
