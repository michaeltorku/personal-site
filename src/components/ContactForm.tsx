import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        // Reset form after success
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };
  return <section id="contact" className="py-20 dark:bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-stone-800 dark:text-stone-100 mb-2 inline-block border-b-2 border-red-700 pb-1">
              Get in Touch
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              お問い合わせ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-stone-700 rounded-lg shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300 hover:border-red-700/20 group">
              <div className="w-12 h-12 bg-red-700/10 dark:bg-red-700/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MailIcon size={24} className="text-red-700" />
              </div>
              <h3 className="text-lg text-stone-800 dark:text-stone-100 mb-2 font-normal">
                Email
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-center">
                hello@taroyamada.com
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-stone-700 rounded-lg shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300 hover:border-red-700/20 group">
              <div className="w-12 h-12 bg-red-700/10 dark:bg-red-700/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon size={24} className="text-red-700" />
              </div>
              <h3 className="text-lg text-stone-800 dark:text-stone-100 mb-2 font-normal">
                Phone
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-center">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-stone-700 rounded-lg shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300 hover:border-red-700/20 group">
              <div className="w-12 h-12 bg-red-700/10 dark:bg-red-700/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPinIcon size={24} className="text-red-700" />
              </div>
              <h3 className="text-lg text-stone-800 dark:text-stone-100 mb-2 font-normal">
                Location
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-center">
                San Francisco, CA
              </p>
            </div>
          </div>
          {submitStatus === 'success' ? <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg shadow-sm border border-green-200 dark:border-green-800 text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircleIcon size={48} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl text-green-800 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-400 mb-6">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button onClick={() => setSubmitStatus('idle')} className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-300 shadow-sm">
                Send Another Message
              </button>
            </div> : <div className="bg-white dark:bg-stone-700 p-8 rounded-lg shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md transition-all duration-300">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-normal text-stone-700 dark:text-stone-300 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className={`w-full px-4 py-3 bg-white dark:bg-stone-800 border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-stone-300 dark:border-stone-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700 transition-all text-stone-800 dark:text-stone-100`} placeholder="Your name" />
                    {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.name}
                      </p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-normal text-stone-700 dark:text-stone-300 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className={`w-full px-4 py-3 bg-white dark:bg-stone-800 border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-stone-300 dark:border-stone-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700 transition-all text-stone-800 dark:text-stone-100`} placeholder="Your email" />
                    {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircleIcon size={14} className="mr-1" />
                        {errors.email}
                      </p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-normal text-stone-700 dark:text-stone-300 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} className={`w-full px-4 py-3 bg-white dark:bg-stone-800 border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-stone-300 dark:border-stone-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700 transition-all text-stone-800 dark:text-stone-100`} placeholder="Subject" />
                  {errors.subject && <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircleIcon size={14} className="mr-1" />
                      {errors.subject}
                    </p>}
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-normal text-stone-700 dark:text-stone-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} className={`w-full px-4 py-3 bg-white dark:bg-stone-800 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-stone-300 dark:border-stone-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700 transition-all text-stone-800 dark:text-stone-100`} placeholder="Your message"></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircleIcon size={14} className="mr-1" />
                      {errors.message}
                    </p>}
                </div>
                <div className="text-center">
                  <button type="submit" disabled={isSubmitting} className={`px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md transition-all duration-300 flex items-center justify-center mx-auto shadow-sm hover:shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                    {isSubmitting ? <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </> : <>
                        <span>Send Message</span>
                        <SendIcon size={18} className="ml-2" />
                      </>}
                  </button>
                </div>
              </form>
            </div>}
        </div>
      </div>
    </section>;
};