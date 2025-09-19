import React from 'react';
export const About = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design'];
  return <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              I'm a frontend developer with 5 years of experience building web
              applications. I specialize in React, TypeScript, and modern
              JavaScript frameworks.
            </p>
            <p className="mb-4">
              My approach to development focuses on creating intuitive user
              experiences with clean, maintainable code. I'm passionate about
              accessibility and performance optimization.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs,
              or experimenting with new web technologies.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm">
                  {skill}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};