import React, { useState } from 'react';
import { consultingServices } from '../data/consultingServices';
import { testimonials } from '../data/testimonials';
import { caseStudies } from '../data/caseStudies';
import { CheckCircle, Star, ArrowRight, Mail, Send } from 'lucide-react';

export const ConsultingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Consulting Inquiry: ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Service Interest: ${formData.service || 'General'}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:michaeltorku5@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          AI & Software Engineering Consulting
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Transform your technical challenges into scalable solutions. Expert guidance in AI strategy, 
          machine learning implementation, and software architecture.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>✓ AI Strategy</span>
          <span>✓ ML Implementation</span>
          <span>✓ Software Architecture</span>
          <span>✓ Technical Leadership</span>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map(service => (
            <div
              key={service.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">How It Works</h2>
        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Discovery Call',
              description: 'We discuss your challenges, goals, and requirements to understand your needs.'
            },
            {
              step: '2',
              title: 'Proposal & Planning',
              description: 'I provide a detailed proposal with scope, timeline, and approach tailored to your situation.'
            },
            {
              step: '3',
              title: 'Execution',
              description: 'We work together to implement solutions, with regular check-ins and iterations.'
            },
            {
              step: '4',
              title: 'Delivery & Support',
              description: 'Final deliverables are provided along with documentation and ongoing support as needed.'
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Case Studies</h2>
        <div className="space-y-8">
          {caseStudies.map(study => (
            <div
              key={study.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Client: {study.client}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Challenge</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{study.challenge}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Solution</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{study.solution}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Results</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {study.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {study.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Hourly Consulting',
              price: 'Custom',
              description: 'Flexible hourly engagement for specific technical challenges',
              features: [
                'Technical guidance',
                'Code reviews',
                'Architecture consulting',
                'Ad-hoc support'
              ]
            },
            {
              name: 'Project-Based',
              price: 'Custom',
              description: 'Fixed-scope projects with defined deliverables',
              features: [
                'Fixed pricing',
                'Clear deliverables',
                'Timeline commitment',
                'Full project ownership'
              ]
            },
            {
              name: 'Retainer',
              price: 'Custom',
              description: 'Ongoing partnership for continuous technical leadership',
              features: [
                'Monthly allocation',
                'Priority support',
                'Strategic planning',
                'Team mentoring'
              ]
            }
          ].map((package_, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {package_.name}
              </h3>
              <div className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                {package_.price}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {package_.description}
              </p>
              <ul className="space-y-2 mb-6">
                {package_.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Contact for custom pricing based on your needs
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get In Touch</h2>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          {formSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-900 dark:text-gray-100 mb-2">
                Thank you for your inquiry!
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Your email client should open shortly. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  {consultingServices.map(service => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or questions..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
