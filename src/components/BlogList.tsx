import React from 'react';
import { blogPosts } from '../data/blogPosts';
interface BlogListProps {
  navigateTo: (page: string, postId: string | null) => void;
}
export const BlogList: React.FC<BlogListProps> = ({
  navigateTo
}) => {
  return <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">TechBytes</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of articles on web development, programming, and
          technology.
        </p>
      </div>
      <div className="space-y-8">
        {blogPosts.map(post => <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
              <h2 className="text-2xl font-bold">
                <button onClick={() => navigateTo('post', post.id)} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </button>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
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