import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentPage: string;
  navigateTo: (page: string, postId?: string | null) => void;
}
export const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  currentPage,
  navigateTo
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    page: 'home'
  }, {
    name: 'About',
    page: 'about'
  }, {
    name: 'Projects',
    page: 'projects'
  }];
  return <header className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <button onClick={() => navigateTo('home')} className="text-xl">
          Michael Torku
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <button key={item.name} onClick={() => navigateTo(item.page)} className={`${currentPage === item.page ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              {item.name}
            </button>)}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-gray-600 dark:text-gray-400" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto py-4 flex flex-col space-y-4 px-4">
            {navItems.map(item => <button key={item.name} onClick={() => {
          navigateTo(item.page);
          setIsMenuOpen(false);
        }} className={`text-left ${currentPage === item.page ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
                {item.name}
              </button>)}
          </nav>
        </div>}
    </header>;
};