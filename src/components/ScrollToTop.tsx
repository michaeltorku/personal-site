import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return <div className="fixed bottom-5 right-5 z-50">
      {isVisible && <button onClick={scrollToTop} aria-label="Scroll to top" className="bg-red-700 hover:bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
          <ArrowUpIcon size={20} />
        </button>}
    </div>;
};