import React from 'react';
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}
export const Projects = () => {
  const projects: Project[] = [{
    title: 'Personal Portfolio',
    description: 'A clean, responsive portfolio website built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS'],
    link: '#'
  }, {
    title: 'E-commerce Dashboard',
    description: 'Admin dashboard for managing products, orders, and customers.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    link: '#'
  }, {
    title: 'Weather App',
    description: 'A weather application with location-based forecasts and clean UI.',
    tags: ['JavaScript', 'API Integration'],
    link: '#'
  }, {
    title: 'Task Manager',
    description: 'A simple task management application with drag-and-drop functionality.',
    tags: ['React', 'Redux', 'TypeScript'],
    link: '#'
  }];
  return <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs">
                    {tag}
                  </span>)}
              </div>
              <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};