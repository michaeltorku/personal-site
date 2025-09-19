import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  useEffect(() => {
    // Check for system preference or stored preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  const navigateTo = (page: string, postId: string | null = null) => {
    setCurrentPage(page);
    setCurrentPostId(postId);
    window.scrollTo(0, 0);
  };
  return <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} currentPage={currentPage} navigateTo={navigateTo} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {currentPage === 'home' && <BlogList navigateTo={navigateTo} />}
        {currentPage === 'post' && currentPostId && <BlogPost postId={currentPostId} />}
        {currentPage === 'about' && <AboutSection />}
        {currentPage === 'contact' && <ContactSection />}
      </main>
      <Footer />
    </div>;
}