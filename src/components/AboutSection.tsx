import React from 'react';
export const AboutSection = () => {
  return <div>
      <h1 className="text-3xl mb-6">About </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">
          Michael Torku is a blog dedicated to sharing knowledge about web
          development, programming, and technology. Our goal is to provide
          clear, concise, and practical articles that help developers improve
          their skills and stay up-to-date with the latest trends in the tech
          industry.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          We believe that knowledge should be accessible to everyone. That's why
          we create in-depth guides, tutorials, and articles that explain
          complex technical concepts in a way that's easy to understand,
          regardless of your experience level.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">The Author</h2>
        <div className="flex items-start mb-6">
          <div className="mr-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
              AC
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Michael Torku</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Frontend Developer
            </p>
            <p className="mb-4">
              Michael is a frontend developer with 5+ years of experience building
              web applications. He specializes in React, TypeScript, and modern
              JavaScript frameworks. When not coding, Alex enjoys writing
              technical articles to share his knowledge with the community.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="mb-2">
          Have a question or suggestion? Feel free to reach out:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Email: [firstname][lastname]5@gmail.com</li>
          <li>Twitter: @mtorkuMT</li>
          <li>GitHub: github.com/michaeltorku</li>
        </ul>
      </div>
    </div>;
};