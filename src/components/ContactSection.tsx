import React, { useState } from 'react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        Have a question, suggestion, or just want to say hello? Fill out the
        form below and we'll get back to you as soon as possible.
      </p>
      {isSubmitted ? <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-green-700 dark:text-green-500">
            Thank you for reaching out. We'll get back to you as soon as
            possible.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </button>
        </div> : <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">
              Subject
            </label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"></textarea>
          </div>
          <button type="submit" disabled={isSubmitting} className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
        <h2 className="text-xl font-bold mb-4">Other Ways to Reach Us</h2>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@techbytes.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@techbytes.com
            </a>
          </p>
          <p>
            <strong>Twitter:</strong>{' '}
            <a href="https://twitter.com/techbytes" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              @techbytes
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/techbytes" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              github.com/techbytes
            </a>
          </p>
        </div>
      </div>
    </div>;
};