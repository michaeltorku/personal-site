import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
export const Hero = () => {
  return <section id="home" className="section flex items-center min-h-[calc(100vh-4rem)]">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Alex Chen</h1>
          <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6">
            Frontend Developer
          </h2>
          <p className="text-lg mb-8">
            I build responsive, user-friendly web applications with modern
            technologies. Focused on creating clean, efficient, and maintainable
            code.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>;
};