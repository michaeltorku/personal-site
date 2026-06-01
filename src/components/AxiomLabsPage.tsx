import React from 'react';
import { axiomLabsPosts } from '../data/axiomLabs';

interface AxiomLabsPageProps {
  navigateTo: (page: string, postId?: string | null) => void;
}

export const AxiomLabsPage: React.FC<AxiomLabsPageProps> = ({ navigateTo }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="space-y-4 border-b border-gray-200 pb-8 dark:border-gray-800">
        <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          Lab
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-4xl">
          Axiom Labs
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-300">
          Axiom Labs is where experiments live. It is a separate page for posts
          that are about testing ideas, not just recording them.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => navigateTo('home')}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-500 hover:text-gray-950 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-gray-50"
          >
            Back to blog
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-50">
            Posts
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {axiomLabsPosts.length} post{axiomLabsPosts.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="space-y-3">
          {axiomLabsPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 dark:border-gray-800"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <button
                  onClick={() => navigateTo('post', post.id)}
                  className="text-left text-lg font-semibold text-gray-950 hover:text-blue-600 dark:text-gray-50 dark:hover:text-blue-400"
                >
                  {post.title}
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                {post.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

