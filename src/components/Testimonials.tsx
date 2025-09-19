import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}
export const Testimonials = () => {
  const testimonials: Testimonial[] = [{
    name: 'Yuki Tanaka',
    role: 'Art Director',
    company: 'Creative Studio Tokyo',
    quote: "Taro's ability to blend traditional Japanese design elements with modern web interfaces is truly remarkable. His work on our company website perfectly captured our brand essence.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    name: 'James Wilson',
    role: 'CEO',
    company: 'TechNova',
    quote: 'Working with Taro was a seamless experience. His attention to detail and commitment to creating intuitive user experiences helped us launch our product with exceptional feedback from users.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    name: 'Mei Zhang',
    role: 'Product Manager',
    company: 'Harmony Digital',
    quote: "Taro's deep understanding of both Eastern and Western design philosophies brought a unique perspective to our project. His code is as elegant as his designs.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);
  return <section className="py-20 bg-stone-100 dark:bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-800 dark:text-stone-100 mb-2 inline-block border-b-2 border-red-700 pb-1">
            Testimonials
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            お客様の声
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-lg bg-white dark:bg-stone-800 shadow-md">
            {testimonials.map((testimonial, index) => <div key={index} className={`
                  absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                  ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `} style={{
            zIndex: index === current ? 10 : 0
          }}>
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-700/10">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <QuoteIcon size={32} className="text-red-700/20 mb-4" />
                    <p className="text-stone-600 dark:text-stone-300 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="text-lg font-medium text-stone-800 dark:text-stone-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-stone-500 dark:text-stone-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-red-700 scale-125' : 'bg-stone-300 dark:bg-stone-600'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-stone-800 text-stone-800 dark:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-stone-200 dark:border-stone-700 transform hover:scale-110 transition-all duration-300 z-20" aria-label="Previous testimonial">
            <ChevronLeftIcon size={20} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-stone-800 text-stone-800 dark:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-stone-200 dark:border-stone-700 transform hover:scale-110 transition-all duration-300 z-20" aria-label="Next testimonial">
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>;
};