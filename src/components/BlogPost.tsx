import React from 'react';
import { blogPosts } from '../data/blogPosts';
interface BlogPostProps {
  postId: string;
}
export const BlogPost: React.FC<BlogPostProps> = ({
  postId
}) => {
  const post = blogPosts.find(post => post.id === postId);
  if (!post) {
    return <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The post you're looking for doesn't exist or has been removed.
        </p>
      </div>;
  }
  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    // This is a very simplified markdown parser
    // In a real app, you'd use a proper markdown library
    const formatted = content
    // Headers
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>').replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>').replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    // Code blocks
    .replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">$1</code>')
    // Bold text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>')
    // Lists (simplified)
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal">$1</li>').replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
    // Paragraphs
    .replace(/^(?!<h|<li|<pre)(.+$)/gm, '<p class="mb-4">$1</p>')
    // Fix lists
    .replace(/<\/li>\n<li/g, '</li><li').replace(/<li class="ml-6 list-disc">/g, '<ul class="list-disc mb-4"><li class="ml-6">').replace(/<li class="ml-6 list-decimal">/g, '<ol class="list-decimal mb-4"><li class="ml-6">').replace(/<\/li>\n\n/g, '</li></ul>\n\n').replace(/<\/li>\n(?!<li)/g, '</li></ul>\n');
    return formatted;
  };
  return <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <div className="mr-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              {post.author.charAt(0)}
            </div>
          </div>
          <div>
            <p className="font-medium">{post.author}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded">
              {tag}
            </span>)}
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{
      __html: formatContent(post.content)
    }} />
    </article>;
};