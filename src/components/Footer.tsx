import React from 'react';
export const Footer = () => {
  return <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} TechBytes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Twitter
            </a>
            <a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>;
};