import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme
}) => {
  return <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>;
};