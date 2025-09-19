import React from 'react';
export const Contact = () => {
  return <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="max-w-md mx-auto">
          <p className="mb-6 text-center">
            Feel free to reach out if you'd like to work together or just want
            to connect.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" required></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Or email me directly:
            </p>
            <a href="mailto:alex@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              alex@example.com
            </a>
          </div>
        </div>
      </div>
    </section>;
};