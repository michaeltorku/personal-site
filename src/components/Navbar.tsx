import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center">
          <span className="text-3xl mr-1">&lt;</span>
          <span className="relative">
            alex
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
          <span className="text-slate-900 dark:text-slate-100">/</span>
          <span className="relative">
            dev
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
          <span className="text-3xl ml-1">&gt;</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>)}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="ml-4 text-slate-900 dark:text-slate-100 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
            </nav>
          </div>
        </div>}
    </header>;
};