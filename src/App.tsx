import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import { AboutSection } from './components/AboutSection';
import { blogPosts } from './data/blogPosts';
import { homeIntroQuote } from './siteCopy';

const SITE_TITLE = 'Michael Torku';
/** Public site origin (must match how the site is served; used for og:url / canonical). */
const SITE_ORIGIN = 'https://michaeltorku.com';
const DEFAULT_DESCRIPTION = homeIntroQuote;

function truncateForMeta(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).trimEnd() + '…';
}

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

  useEffect(() => {
    const syncFromLocation = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      const postId = params.get('postId');

      if (page === 'post' && postId) {
        setCurrentPage('post');
        setCurrentPostId(postId);
        return;
      }

      if (page === 'about') {
        setCurrentPage('about');
        setCurrentPostId(null);
        return;
      }

      setCurrentPage('home');
      setCurrentPostId(null);
    };

    syncFromLocation();

    const onPopState = () => {
      syncFromLocation();
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const descEl = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const homeUrl = `${SITE_ORIGIN}/`;
    ogUrl?.setAttribute('content', homeUrl);
    twUrl?.setAttribute('content', homeUrl);
    canonical?.setAttribute('href', homeUrl);

    const setDesc = (d: string) => {
      const text = truncateForMeta(d);
      descEl?.setAttribute('content', text);
      ogDesc?.setAttribute('content', text);
      twDesc?.setAttribute('content', text);
    };
    const setHeadTitles = (pageTitle: string) => {
      document.title = pageTitle;
      ogTitle?.setAttribute('content', pageTitle);
      twTitle?.setAttribute('content', pageTitle);
    };

    if (currentPage === 'post' && currentPostId) {
      const post = blogPosts.find(p => p.id === currentPostId);
      if (post) {
        setHeadTitles(`${post.title} | ${SITE_TITLE}`);
        setDesc(post.excerpt);
        return;
      }
    }
    if (currentPage === 'about') {
      setHeadTitles(`About | ${SITE_TITLE}`);
      setDesc('About Michael Torku—background and how to get in touch.');
      return;
    }
    setHeadTitles(SITE_TITLE);
    setDesc(DEFAULT_DESCRIPTION);
  }, [currentPage, currentPostId]);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  const navigateTo = (page: string, postId: string | null = null) => {
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    url.searchParams.delete('postId');

    if (page !== 'home') {
      url.searchParams.set('page', page);
    }
    if (page === 'post' && postId) {
      url.searchParams.set('page', 'post');
      url.searchParams.set('postId', postId);
    }

    window.history.pushState({ page, postId }, '', `${url.pathname}${url.search}${url.hash}`);
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

      </main>
      <Footer />
    </div>;
}
