import React from 'react';
export const AboutSection = () => {
  return <div>
      <h1 className="text-2xl mb-6">About </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">
          Building infra at Netflix.
        </p>
        <h1 className="text-2xl mt-8 mb-4">Contact</h1>
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