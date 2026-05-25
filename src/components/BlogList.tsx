import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { homeIntroQuote } from '../siteCopy';
interface BlogListProps {
  navigateTo: (page: string, postId: string | null) => void;
}
export const BlogList: React.FC<BlogListProps> = ({
  navigateTo
}) => {
  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const formatInline = (value: string) =>
    escapeHtml(value)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
        const safeHref = href.replace(/"/g, '&quot;');
        return (
          '<a href="' +
          safeHref +
          '" class="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/40 dark:hover:decoration-blue-400" rel="noopener noreferrer" target="_blank">' +
          label +
          '</a>'
        );
      })
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/(^|[\s>])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  const postsByRecency = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return <div>
      <div className="mb-8">
        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {homeIntroQuote}
        </p>
      </div>
      <div className="space-y-8">
        {postsByRecency.map(post => <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
              <h2 className="text-2xl font-bold">
                <button onClick={() => navigateTo('post', post.id)} className="hover:text-blue-600 dark:hover:text-blue-400">
                  <span dangerouslySetInnerHTML={{ __html: formatInline(post.title) }} />
                </button>
              </h2>
              <p className="text-[1.02rem] leading-relaxed text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
              <div className="flex items-center pt-2">
                <button onClick={() => navigateTo('post', post.id)} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more →
                </button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
                    {tag}
                  </span>)}
              </div>
            </div>
          </article>)}
      </div>
    </div>;
};
